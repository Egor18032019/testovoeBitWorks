package com.bit.testovoe.service;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.repository.CrudUserRepository;
import com.bit.testovoe.to.Rec;
import com.bit.testovoe.to.UserRequest;
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

    public Rec request(Rec request) {
        System.out.println(" пришло в UsersService");
/*
Пришли данные
Смотрим есть ли в ячейках куда хотим записать что то
Если нет то записываем
Если есть то =>
Смотрим кто записан в этой ячейки и сколько у него ячеек
Если ячеек больше чем мы принесли то выравниваем(было 2 у нас пришло 3 равнять в сторону существующего)
 */

        for (int i = 0; i < request.getRequestList().size(); i++) {
            if (usersRepository.get(request.getRequestList().get(i)).isPresent()) {
               int present = usersRepository.getAmountByUsers(request.getName());
               if(present>request.getRequestList().size()){
                   System.out.println("Ничего тут не делаем и переходим дальше");
               }else {
                   Users rewriteUser = new Users(i,request.getName());
                   usersRepository.save(rewriteUser);
               }

            }
            else {
                Users writeUser = new Users(i,request.getName());
                usersRepository.save(writeUser);
            }
        }
        return request;
    }

}