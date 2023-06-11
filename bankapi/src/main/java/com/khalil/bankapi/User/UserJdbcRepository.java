package com.khalil.bankapi.User;

import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.websocket.RemoteEndpoint.Async;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class UserJdbcRepository {
    @Autowired
    private JdbcTemplate springJdbcTemplate;
    @PersistenceContext
    private EntityManager entityManager;
    private static Long count =0L;
        private static String getAll  = 
                    "select *  from `users` ";

    
                  
    private static String searchDateOfBirth=

                    "select *  from `user` "+
                    "where dateofbirth < ? and dateofbirth > ?";

    @Transactional
    public void insert(User user) {
        user.setId(count);
        count++;
        entityManager.merge(user);
    }
    public void getUserbyDate(Date date, Date date2){
        springJdbcTemplate.update(searchDateOfBirth, date ,date2);
        
        
    }
    public List<User> getUser(){
        return springJdbcTemplate.query(getAll,  new BeanPropertyRowMapper<>(User.class));   
    
    }
     @Transactional
    public User getUserById(Long id) {
        return  entityManager.find(User.class, id);
        
    }
    
    @Transactional
    public void deleteUser(Long id) {
    User user = entityManager.find(User.class, id);
     entityManager.remove(user);
}

    @Transactional
    public User updateUser(Long id, User updatedUser) {
        User user = entityManager.find(User.class, id);
        if (user == null) {
            throw new EntityNotFoundException("User with ID " + id + " does not exist.");
        }
        user.setFirstName(updatedUser.getFirstName());
        user.setSecondName(updatedUser.getSecondName());
        user.setAdresses(updatedUser.getAdresses());
        user.setDateOfBirth(updatedUser.getDateOfBirth());
        user.setPhoneNumber(updatedUser.getPhoneNumber());
        user.setPicture(updatedUser.getPicture());
        entityManager.merge(user);
        return user;
    }

    @Transactional
     public List<User> getUsersByDateRange(Date startDate, Date endDate) {
        String queryString = "SELECT u FROM User u WHERE u.dateOfBirth BETWEEN :startDate AND :endDate";
        TypedQuery<User> query = entityManager.createQuery(queryString, User.class);
        query.setParameter("startDate", startDate);
        query.setParameter("endDate", endDate);
        return query.getResultList();
    }


}
