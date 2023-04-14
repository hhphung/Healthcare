package healthcare.User;
import javax.persistence.*;



@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private int PersonID;
    @Column(nullable = false)
    private String Username;
    @Column(nullable = false)
    private String Password;

    @Column(nullable = false)
    private String Email;

    @Enumerated(EnumType.STRING)
    private Role Role;


    public User(){

    }
    public User(String username, String password, String email,Role role){
        this.Username = username;
        this.Password = password;
        this.Email = email;
        this.Role = role;
    }



    // Getters and setters

    public int getPersonID() {
        return PersonID;
    }

    public void setPersonID(int personID) {
        PersonID = personID;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public Role getRole() {
        return Role;
    }

    public void setRole(Role role) {
        Role = role;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }
}