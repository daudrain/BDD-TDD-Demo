package com.wealcome.testbdd.domain.repositories;

import com.wealcome.testbdd.domain.BalanceAlert;

import java.util.Set;

public interface BalanceAlertRepository {
    Set<BalanceAlert> all();

    void add(BalanceAlert alert);
}
