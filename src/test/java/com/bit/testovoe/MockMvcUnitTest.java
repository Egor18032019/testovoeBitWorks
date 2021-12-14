package com.bit.testovoe;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.repository.CrudUserRepository;
import com.bit.testovoe.repository.UsersRepository;
import com.bit.testovoe.utils.Priority;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.anyInt;

@SpringBootTest
public class MockMvcUnitTest {

    @MockBean
    private UsersRepository usersRepository;

    @Test
    public void findAll() {
        System.out.println(" работает ??");
        Priority priority = Priority.NORMAL;

        Users person = new Users(2, "name", priority);
        Users person1 = new Users(3, "S2", priority);
        Mockito.when(usersRepository.findAll()).thenReturn(Arrays.asList(person, person1));
    }

    @Test
    public void get() {
        Priority priority = Priority.NORMAL;
        String name = "S1";
        Integer id = 2;
        Users person = new Users(id, name,priority);
        Mockito.when(usersRepository.get(anyInt())).thenReturn(Optional.of(person));
    }


    @Test
    public void getAmountByUsers() throws Exception {
        Priority priority = Priority.NORMAL;
        String name = "S1";
        Users person = new Users(2, name, priority);
        Users person1 = new Users(3, name, priority);
        Mockito.when(usersRepository.getAmountByUsers(name)).thenReturn(2);
    }

    @Test
    public void save() throws Exception {
        Priority priority = Priority.NORMAL;
        String name = "S1";
        Integer id = 2;
        Users person = new Users(id, name,priority);
        Mockito.when(usersRepository.save(Mockito.any())).thenReturn(person);
       }

    @Test
    public void empty() {
        Users person = new Users();
        Mockito.when(usersRepository.get(Mockito.anyInt())).
                thenReturn(Optional.of(person));
    }

}