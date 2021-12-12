package com.bit.testovoe.repository;

import com.bit.testovoe.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

    List<Users> findAllBy();

    @Query("SELECT s FROM Users s Where s.id=:id")
    Optional<Users> get(@Param("id") int id);

    @Query("SELECT COUNT(d) From Users d where d.name=:name")
    int getAmountByUsers(@Param("name") String name);

    @Override
    Users save(Users users);



}