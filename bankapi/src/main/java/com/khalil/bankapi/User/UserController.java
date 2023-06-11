package com.khalil.bankapi.User;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200/")
@RestController
public class UserController {
    
    @Autowired
    private UserService userService;


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Long> deleteItem(@PathVariable Long id) {
            userService.deleteUserById(id);
            return ResponseEntity.noContent().build();
    }

    @GetMapping("/getUser")
    public List<User> getUser(){
        return userService.getUser();
    }

   @GetMapping("/UserById/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }
    @PutMapping("/update/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return userService.updateUser(id, updatedUser);
    }
    @PostMapping("/createUser")
    public void createUser( @RequestBody User user) {
         userService.createUser(user);
    }
    @GetMapping("UserById/{start}/{end}")
    public List<User> getByDate(@PathVariable Date start, @PathVariable Date end){
        return userService.getUsersByDateRange(  start, end);
    }
}
