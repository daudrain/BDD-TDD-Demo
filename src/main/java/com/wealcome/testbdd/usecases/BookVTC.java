package com.wealcome.testbdd.usecases;

import com.wealcome.testbdd.domain.*;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.repositories.BalanceAlertRepository;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;

import java.util.Optional;

public class BookVTC {

    private final CustomerAccountRepository customerAccountRepository;
    private final BookingRepository bookingRepository;
    private final BalanceAlertRepository balanceAlertRepository;
    private final AuthenticationGateway authenticationGateway;

    public BookVTC(CustomerAccountRepository customerAccountRepository,
                   BookingRepository bookingRepository,
                   BalanceAlertRepository balanceAlertRepository,
                   AuthenticationGateway authenticationGateway) {
        this.customerAccountRepository = customerAccountRepository;
        this.bookingRepository = bookingRepository;
        this.balanceAlertRepository = balanceAlertRepository;
        this.authenticationGateway = authenticationGateway;
    }

    public void handle(VTC vtc, Travel travel) {
        authenticationGateway.currentCustomer().ifPresent(customer -> {
            if (chargeCustomer(customer, travel)) {
                applyBooking(new Booking(customer, vtc, travel));
            } else {
                balanceAlertRepository.add(new BalanceAlert());
            }
        });
    }

    private void applyBooking(Booking booking) {
        bookingRepository.add(booking);
    }

    private boolean chargeCustomer(Customer customer, Travel travel) {
        final Optional<CustomerAccount> ca = customerAccountRepository.byId(customer.getId());
        return ca.map(customerAccount -> customerAccount.charge(travel.createCharge())).orElse(false);
    }
}
