package com.bit.testovoe.service;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.repository.CrudUserRepository;
import com.bit.testovoe.to.Rec;
import com.bit.testovoe.to.UserRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


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
        System.out.println(" пришло в UsersService " + request.toString());
        List <Integer> requestList = request.getRequestList();


        for (int i = 0; i < requestList.size(); i++) {

            Optional<Users> presentUsers;
            if (usersRepository.get((Integer) requestList.get(i)).isPresent()) {
                presentUsers = usersRepository.get((Integer) requestList.get(i));
                System.out.println("47 " + presentUsers.get().getName());
                /*
                  считаем сколько есть у этого юзера
                 */
                int present = usersRepository.getAmountByUsers(presentUsers.get().getName());
                System.out.println("present " + present);
                int flag = 0;
                if (present < requestList.size()) {

                    recursion(present,requestList,request,flag);

                } else {
                    System.out.println("53 " + request.getName() + " " + i + requestList.get(i));
                    Users rewriteUser = new Users(requestList.get(i), request.getName());
                    usersRepository.save(rewriteUser);
                }

            } else {
                Users writeUser = new Users(requestList.get(i), request.getName());
                System.out.println("writeUser " + writeUser);
                usersRepository.save(writeUser);
            }
        }
        return request;
    }

    /**
     * Рекурсия на запись.
     * @param present сколько ячеек имеет этот юзер в БД
     * @param requestList Лист с номерами ячеек в которые хотим записать
     * @param request сам запрос
     * @param intrecursionFlag флаг для рекурсии
     */
    public void recursion (int present , List  <Integer> requestList, Rec request, int intrecursionFlag){
        if (present > 1) {
            Users addUser = new Users(requestList.get(intrecursionFlag), request.getName());
            usersRepository.save(addUser);
        }
        else {
            intrecursionFlag++;
            recursion(present ,requestList,request,intrecursionFlag);
        }

    }
}