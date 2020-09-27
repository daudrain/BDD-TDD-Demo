package com.wealcome.testbdd.adapters;

import com.wealcome.testbdd.domain.AuthenticationAlert;
import com.wealcome.testbdd.domain.repositories.AuthenticationAlertRepository;

import java.util.LinkedHashSet;
import java.util.Set;

public class InMemoryAuthenticationAlertRepository implements AuthenticationAlertRepository {
    private final Set<AuthenticationAlert> alerts = new LinkedHashSet<>();

    @Override
    public Set<AuthenticationAlert> all() {
        return alerts;
    }

    @Override
    public void add(AuthenticationAlert alert) {
        alerts.add(alert);
    }
}
