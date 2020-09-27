import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:FeaturesReport/index.html"},
        features = {"src/test/resources"})
public class AllAcceptanceTest {
}
