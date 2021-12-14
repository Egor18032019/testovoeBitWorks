package com.bit.testovoe;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.service.UsersService;
import com.bit.testovoe.to.UserRequest;
import com.bit.testovoe.utils.Priority;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ControllerIntegrationTest {

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    UsersService usersService;
    @Autowired
    private MockMvc mockMvc;

    @AfterEach
    public void resetDb() {
        usersService.deleteAll();
    }

    @Test
    public void givenPerson_whenAdd_thenStatus200andPersonReturned() throws Exception {

        List<Integer> requestList = new ArrayList<>();
        requestList.add(2);
        requestList.add(3);
        Priority priority = Priority.NORMAL;
        String sign = "+";
        String name = "S1";
        UserRequest person = new UserRequest(
                sign, name, requestList, priority);

        mockMvc.perform(
                post("/api/rec")
                        .content(objectMapper.writeValueAsString(person))
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.sign").value(sign))
                .andExpect(jsonPath("$.requestList").value(requestList))
                .andExpect(jsonPath("$.priority").value("NORMAL"));
    }

    @Test
    public void givenPersons_whenGetPersons_thenStatus200() throws Exception {

        mockMvc.perform(
                get("/api/get"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(Collections.emptyList())));
    }

    @Test
    public void givenPerson_whenDeletePerson_thenStatus200() throws Exception {
        mockMvc.perform(
                post("/api/clear"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(Collections.emptyList())));
    }


    @Test
    public void givenPerson_whenAdd_Many() throws Exception {
        Priority NORMAL = Priority.NORMAL;
        Priority LOW = Priority.LOWPRIO;
        String plus = "+";
        String minus = "-";

        List<Integer> requestList = new ArrayList<>();
        requestList.add(2);
        requestList.add(3);
        UserRequest person1 = new UserRequest(
                plus, "S1", requestList, NORMAL);

        List<Integer> requestList1 = new ArrayList<>();
        requestList1.add(2);
        requestList1.add(4);
        requestList1.add(5);
        UserRequest person2 = new UserRequest(
                plus, "S2", requestList1, NORMAL);

        List<Integer> requestList3 = new ArrayList<>();
        requestList3.add(2);
        UserRequest person3 = new UserRequest(
                plus, "S3", requestList3, NORMAL);

        UserRequest person4 = new UserRequest(
                minus, "S2", requestList1, NORMAL);

        List<Integer> requestList4 = new ArrayList<>();
        requestList4.add(2);
        requestList4.add(3);
        UserRequest person5 = new UserRequest(
                plus, "S4", requestList4, LOW);

        mockMvc.perform(
                post("/api/rec")
                        .content(objectMapper.writeValueAsString(person1))
                        .contentType(MediaType.APPLICATION_JSON)
        );
        mockMvc.perform(
                post("/api/rec")
                        .content(objectMapper.writeValueAsString(person2))
                        .contentType(MediaType.APPLICATION_JSON)
        );
        mockMvc.perform(
                post("/api/rec")
                        .content(objectMapper.writeValueAsString(person3))
                        .contentType(MediaType.APPLICATION_JSON)
        );
        mockMvc.perform(
                post("/api/rec")
                        .content(objectMapper.writeValueAsString(person4))
                        .contentType(MediaType.APPLICATION_JSON)
        );
        mockMvc.perform(
                post("/api/rec")
                        .content(objectMapper.writeValueAsString(person5))
                        .contentType(MediaType.APPLICATION_JSON)
        );
        Users s1 = new Users(2,"S3",NORMAL);
        Users s3 = new Users(3,"S1",NORMAL);

        List<Users> response = new ArrayList<>();
        response.add(s1);
        response.add(s3);


        mockMvc.perform(
                get("/api/get"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(response)));
    }

}