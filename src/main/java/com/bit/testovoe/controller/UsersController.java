package com.bit.testovoe.controller;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.links.UserLinks;
import com.bit.testovoe.service.UsersService;
import com.bit.testovoe.to.ListTest;
import com.bit.testovoe.to.Rec;
import com.bit.testovoe.to.UserRequest;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name="Основной контроллер", description="получение и добавление")
@Slf4j
@RestController
@RequestMapping("/api/")
public class UsersController {

    @Autowired
    UsersService usersService;

    @GetMapping(path = UserLinks.LIST_USERS)
    public ResponseEntity<?> getAllCells() {
        log.info("UsersController: UsersController get list users");
        List<Users> resource = usersService.getUsers();
        return ResponseEntity.ok(resource);
    }

//    @PostMapping(path = UserLinks.ADD_USER)
//    public ResponseEntity<?> saveUser(@RequestBody Users user) {
//        log.info("UsersController: Post list users");
//        Users resource = usersService.saveUser(user);
//        return ResponseEntity.ok(resource);
//    }

    @PostMapping(path = UserLinks.ADD_REQUEST)
    public ResponseEntity<?> recUser(@RequestBody UserRequest userRequest) {
        System.out.println("!!! userRequest!! " + userRequest);
        log.info("UsersController: recUser list users");
        Rec resource = usersService.request(userRequest);
        return ResponseEntity.ok(resource);
    }

}

