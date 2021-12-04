package com.bit.testovoe.repository;

import com.bit.testovoe.entity.Users;

import java.util.List;

public interface CrudUserRepository {

    List<Users> findAll();

    Users save(Users users);
}
