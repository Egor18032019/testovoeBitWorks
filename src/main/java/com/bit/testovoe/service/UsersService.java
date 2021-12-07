package com.bit.testovoe.service;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.repository.CrudUserRepository;
import com.bit.testovoe.to.Rec;
import com.bit.testovoe.to.UserRequest;
import com.bit.testovoe.utils.Priority;
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
        List<Integer> requestList = request.getRequestList();


        for (int i = 0; i < requestList.size(); i++) {
            //TODO убрать в Енум
            if (request.getSign().equals("+")) {
                Optional<Users> presentUsers;
                if (usersRepository.get(requestList.get(i)).isPresent()) {
                    presentUsers = usersRepository.get(requestList.get(i));
                    System.out.println("42 " + presentUsers.get().getName());
                /*
                  считаем сколько есть у этого юзера
                 */
                    int present = usersRepository.getAmountByUsers(presentUsers.get().getName());
                    System.out.println("present " + present);
                    int flag = 0;
                    if (request.getPriority().equals(Priority.LOW)) {
                        System.out.println("i" + i + " Ничего не делаем пропускаем дальше");
                    } else {
                        if (present < requestList.size()) {

                            recursion(present, requestList, request, flag);

                        } else {
                            System.out.println("58 " + request.getName() + " " + i + requestList.get(i));
                            Users rewriteUser = new Users(requestList.get(i), request.getName());
                            usersRepository.save(rewriteUser);
                        }
                    }

                } else {
                    Users writeUser = new Users(requestList.get(i), request.getName());
                    System.out.println("writeUser " + writeUser);
                    usersRepository.save(writeUser);
                }
            } else {
                Optional<Users> isPresentCell = usersRepository.get(requestList.get(i));
                if (isPresentCell.isPresent()) {
                    System.out.println(isPresentCell.toString());
                    if (isPresentCell.get().getName().equals(request.getName())) {
                        Users deleteUser = new Users(requestList.get(i), request.getName());
                        usersRepository.delete(deleteUser);
                    }
                }
            }
        }
        // TODO возврат сделать того что по факту в БД записалось
        return request;
    }

    /**
     * Рекурсия на запись.
     *
     * @param present          сколько ячеек имеет этот юзер в БД
     * @param requestList      Лист с номерами ячеек в которые хотим записать
     * @param request          сам запрос
     * @param intrecursionFlag флаг для рекурсии
     */
    public void recursion(int present, List<Integer> requestList, Rec request, int intrecursionFlag) {
        if(present==1){
            return;
        }
        if (present > 1) {
            Users addUser = new Users(requestList.get(intrecursionFlag), request.getName());
            usersRepository.save(addUser);
        } else {
            intrecursionFlag++;
            recursion(present, requestList, request, intrecursionFlag);
        }

    }
}