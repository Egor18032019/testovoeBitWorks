package com.bit.testovoe.controller;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.links.UserLinks;
import com.bit.testovoe.service.UsersService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class UsersController {

    @Autowired
    UsersService usersService;

    @GetMapping(path = UserLinks.LIST_USERS)
    public ResponseEntity<?> listUsers() {
        log.info("UsersController: UsersController get list users");
        List<Users> resource = usersService.getUsers();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = UserLinks.ADD_USER)
    public ResponseEntity<?> saveUser(@RequestBody Users user) {
        log.info("UsersController: Post list users");
        Users resource = usersService.saveUser(user);
        return ResponseEntity.ok(resource);
    }
}