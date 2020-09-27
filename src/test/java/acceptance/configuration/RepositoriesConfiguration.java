package acceptance.configuration;

import com.wealcome.testbdd.adapters.*;
import com.wealcome.testbdd.domain.repositories.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration
public class RepositoriesConfiguration {

    @Bean
    @Scope("cucumber-glue")
    public CustomerRepository customerRepository() {
        return new InMemoryCustomerRepository();
    }

    @Bean
    @Scope("cucumber-glue")
    public VTCRepository vtcRepository() {
        return new InMemoryVTCRepository();
    }

    @Bean
    @Scope("cucumber-glue")
    public CustomerAccountRepository customerAccountRepository() {
        return new InMemoryCustomerAccountRepository();
    }

    @Bean
    @Scope("cucumber-glue")
    public BookingRepository bookingRepository() {
        return new InMemoryBookingRepository();
    }

    @Bean
    @Scope("cucumber-glue")
    public BalanceAlertRepository balanceAlertRepository() {
        return new InMemoryBalanceAlertRepository();
    }

    @Bean
    @Scope("cucumber-glue")
    public AuthenticationAlertRepository authenticationAlertRepository() {
        return new InMemoryAuthenticationAlertRepository();
    }
}
