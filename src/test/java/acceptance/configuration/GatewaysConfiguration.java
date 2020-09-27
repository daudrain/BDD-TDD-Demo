package acceptance.configuration;

import com.wealcome.testbdd.adapters.InMemoryAuthenticationGateway;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.test.context.ContextConfiguration;


@ContextConfiguration
public class GatewaysConfiguration {

    @Bean
    @Scope("cucumber-glue")
    public AuthenticationGateway authenticationGateway() {
        return new InMemoryAuthenticationGateway();
    }

}
