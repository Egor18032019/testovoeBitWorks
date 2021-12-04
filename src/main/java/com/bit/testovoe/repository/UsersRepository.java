package com.bit.testovoe.repository;

import com.bit.testovoe.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer>{
    @Query("SELECT '*' FROM Users ")
    Optional<Users> findALl();

    @Override
    Users save (Users users);
}