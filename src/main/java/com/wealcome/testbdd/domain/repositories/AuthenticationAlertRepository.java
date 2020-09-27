package com.wealcome.testbdd.domain.repositories;

import com.wealcome.testbdd.domain.AuthenticationAlert;

import java.util.Set;

public interface AuthenticationAlertRepository {
    Set<AuthenticationAlert> all();

    void add(AuthenticationAlert alert);
}
