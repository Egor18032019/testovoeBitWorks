package com.bit.testovoe.repository;

import com.bit.testovoe.entity.Users;

import java.util.List;
import java.util.Optional;

public interface CrudUserRepository {

    List<Users> findAll();

    Optional<Users> get(int id);

    int getAmountByUsers(String name);

    Users save(Users users);

    void delete(Users users);

    void deleteAll();
}
