package com.wealcome.testbdd.usecases;

import com.wealcome.testbdd.domain.*;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;

import java.util.Optional;

public class BookVTC {

    private final CustomerAccountRepository customerAccountRepository;
    private final BookingRepository bookingRepository;
    private final AuthenticationGateway authenticationGateway;

    public BookVTC(CustomerAccountRepository customerAccountRepository,
                   BookingRepository bookingRepository,
                   AuthenticationGateway authenticationGateway) {
        this.customerAccountRepository = customerAccountRepository;
        this.bookingRepository = bookingRepository;
        this.authenticationGateway = authenticationGateway;
    }

    public void handle(VTC vtc, Travel travel) {
        authenticationGateway.currentCustomer().ifPresent(customer -> {
            if (chargeCustomer(customer, travel)) {
                applyBooking(new Booking(customer, vtc, travel));
            }
        });
    }

    private void applyBooking(Booking booking) {
        bookingRepository.add(booking);
    }

    private boolean chargeCustomer(Customer customer, Travel travel) {
        final Optional<CustomerAccount> ca = customerAccountRepository.byId(customer.getId());
        if (!ca.isPresent()) {
            return false;
        }
        return ca.get().charge(travel.createCharge());
    }
}
