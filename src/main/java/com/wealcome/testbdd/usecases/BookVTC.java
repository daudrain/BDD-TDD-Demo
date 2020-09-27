package com.wealcome.testbdd.usecases;

import com.wealcome.testbdd.domain.*;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.repositories.AuthenticationAlertRepository;
import com.wealcome.testbdd.domain.repositories.BalanceAlertRepository;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;

import java.util.Optional;

public class BookVTC {

    private final CustomerAccountRepository customerAccountRepository;
    private final BookingRepository bookingRepository;
    private final BalanceAlertRepository balanceAlertRepository;
    private final AuthenticationAlertRepository authenticationAlertRepository;
    private final AuthenticationGateway authenticationGateway;

    public BookVTC(CustomerAccountRepository customerAccountRepository,
                   BookingRepository bookingRepository,
                   BalanceAlertRepository balanceAlertRepository,
                   AuthenticationAlertRepository authenticationAlertRepository,
                   AuthenticationGateway authenticationGateway) {
        this.customerAccountRepository = customerAccountRepository;
        this.bookingRepository = bookingRepository;
        this.balanceAlertRepository = balanceAlertRepository;
        this.authenticationAlertRepository = authenticationAlertRepository;
        this.authenticationGateway = authenticationGateway;
    }

    public boolean handle(VTC vtc, Travel travel) {
        if (authenticationGateway.currentCustomer().isPresent()) {
            Customer customer = authenticationGateway.currentCustomer().get();
            if (chargeCustomer(customer, travel)) {
                applyBooking(new Booking(customer, vtc, travel));
            } else {
                balanceAlertRepository.add(new BalanceAlert());
            }
            return true;
        } else {
            authenticationAlertRepository.add(new AuthenticationAlert());
            return false;
        }
    }

    private void applyBooking(Booking booking) {
        bookingRepository.add(booking);
    }

    private boolean chargeCustomer(Customer customer, Travel travel) {
        final Optional<CustomerAccount> ca = customerAccountRepository.byId(customer.getId());
        return ca.map(customerAccount -> customerAccount.charge(travel.createCharge())).orElse(false);
    }
}
