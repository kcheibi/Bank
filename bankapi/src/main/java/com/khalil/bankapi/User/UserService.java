package com.khalil.bankapi.User;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class UserService {
     @Autowired
    private UserJdbcRepository repository;
    

    public List<User> getUser(){
        return repository.getUser();
    }
    public void deleteUserById(Long id) {
        repository.deleteUser(id);
    }
    
    public User getUserById(Long id) {
       return repository.getUserById(id);
    }
    public User updateUser(Long id, User user){
        return repository.updateUser(id, user);
    }
    public void createUser(User user){
        repository.insert(user);
    }
    public List<User> getUsersByDateRange(Date start, Date end){
        return repository.getUsersByDateRange(start, end);
    }
}

