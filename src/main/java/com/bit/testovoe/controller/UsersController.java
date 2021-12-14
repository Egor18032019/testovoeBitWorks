package com.bit.testovoe.controller;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.exception_handling.YouNotAccessDataBase;
import com.bit.testovoe.links.UserLinks;
import com.bit.testovoe.service.UsersService;
import com.bit.testovoe.to.Rec;
import com.bit.testovoe.to.UserRequest;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Tag(name = "Основной контроллер", description = "получение и добавление")
@Slf4j
@RestController
@RequestMapping("/api/")
public class UsersController {

    @Autowired
    UsersService usersService;

    @GetMapping(path = UserLinks.LIST_USERS)
    public ResponseEntity<?> getAllCells() {
        List<Users> response = usersService.getUsers();
        return ResponseEntity.ok(response);
    }

    @PostMapping(path = UserLinks.ADD_REQUEST)
    public ResponseEntity<?> recUser(@RequestBody @Valid UserRequest userRequest) {
        System.out.println("!!! userRequest!! " + userRequest);
        Rec resource = usersService.request(userRequest);
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = UserLinks.DELETE_ALL)
    public ResponseEntity<?> deleteAllInBD() {
        System.out.println("!!! deleteAllInBD!! ");
        try{
        usersService.deleteAll();
        } catch (Exception e) {
            throw new YouNotAccessDataBase(e.getMessage());
        }
        List<Users> response = usersService.getUsers();
        return ResponseEntity.ok(response);
    }
}

//    {       "sign": "+",
//            "name": "S1",
//            "requestList": [2,3] ,
//             "priority":"NORMAL"         }
