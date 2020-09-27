package com.wealcome.testbdd.adapters;

import com.wealcome.testbdd.domain.BalanceAlert;
import com.wealcome.testbdd.domain.repositories.BalanceAlertRepository;

import java.util.LinkedHashSet;
import java.util.Set;

public class InMemoryBalanceAlertRepository implements BalanceAlertRepository {
    private final Set<BalanceAlert> alerts = new LinkedHashSet<>();
    @Override
    public Set<BalanceAlert> all() {
        return alerts;
    }

    @Override
    public void add(BalanceAlert alert) {
        alerts.add(alert);
    }
}
