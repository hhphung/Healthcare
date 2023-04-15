package healthcare.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UseController {

    @Autowired
    UserRepository userRepository;
    @PostMapping(value = "/", produces = "application/json")
    public String createUser(@RequestBody User user) {
        if (user == null)
            return "Invalid request body";
        User checkIfExists = userRepository.findByName(user.getUsername());
        if (checkIfExists != null)
            return "fail";
        userRepository.save(user);
        return "sucess";
    }
    @GetMapping(value = "/", produces = "application/json")
    public User loginUser(@RequestBody User user) {
        User checkIfExists = userRepository.findByName(user.getUsername());
        if (checkIfExists == null || !(checkIfExists.getPassword().equals(user.getPassword())))
            return null;
        return checkIfExists;
    }
}
