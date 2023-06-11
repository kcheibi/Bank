package com.khalil.bankapi.jdbc;


import java.text.ParseException;

import java.util.Date;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.khalil.bankapi.User.User;
import com.khalil.bankapi.User.UserJdbcRepository;




@Component
public class UserJdbcCommandLineRunner implements CommandLineRunner {
    private static final String[] FIRST_NAMES = {"John", "Jane", "Michael", "Emily", "David", "Sarah"};
        private static final String[] LAST_NAMES = {"Smith", "Johnson", "Brown", "Davis", "Miller", "Wilson"};
        private static final String[] ADDRESSES = {"123 Main St", "456 Elm St", "789 Oak St", "321 Pine St", "987 Maple St"};
        private static final String[] PHONE_NUMBERS = {"555-1234", "555-5678", "555-9012", "555-3456", "555-7890"};

    @Autowired
    private UserJdbcRepository repository;
    @Override
    public void run(String... args) throws Exception {

    generateFakeUsers((long) 100);
}
  public void generateFakeUsers(Long count) {
   
        for (int i = 3; i < count; i++) {
            User user = new User();
            user.setId((long) (i + 1));
            user.setFirstName(getRandomElement(FIRST_NAMES));
            user.setSecondName(getRandomElement(LAST_NAMES));
            user.setPhoneNumber(getRandomElement(PHONE_NUMBERS));
            user.setAdresses(getRandomElement(ADDRESSES));
            user.setDateOfBirth(generateRandomDate());
            String base64Image = ImageGenerator.generateImage();
            user.setPicture(base64Image);
            repository.insert(user);

        }
        
    }
    private static String getRandomElement(final String[] array) {
        int index = new Random().nextInt(array.length);
        return array[index];
    }

    private static Date generateRandomDate() {
        long offset = new Date(0).getTime();
        long end = new Date().getTime();
        long diff = end - offset + 1;
        return new Date(offset + (long) (Math.random() * diff));
    }

    private static Date generateDateOfBirth(String dateString) {
    try {
        return DateGenerator.generateDate(dateString);
    } catch (ParseException e) {
        e.printStackTrace();
        return null;
    }
}
}
