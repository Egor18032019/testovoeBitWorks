package com.bit.testovoe.service;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.repository.CrudUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;


// тут прописать логику
@Service
public class UsersService {

    private final CrudUserRepository usersRepository;

    public UsersService(CrudUserRepository usersRepository) {

        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }

    public Users saveUser(Users users) {
        return usersRepository.save(users);
    }

}