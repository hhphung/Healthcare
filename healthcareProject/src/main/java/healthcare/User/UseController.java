package healthcare.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/user")
public class UseController {

    @Autowired
    UserRepository userRepository;
    @PostMapping(value = "/", produces = "application/json")
    public String createUser(@RequestBody User user) {
        if (user == null)
            return "Invalid request body";

        User checkIfExists = userRepository.findByName(user.getUsername());

        if (checkIfExists != null)
            return "User already exists";

        userRepository.save(user);
        return "sucess";
    }
}
