package com.bit.testovoe.service;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.repository.CrudUserRepository;
import com.bit.testovoe.to.Rec;
import com.bit.testovoe.to.UserRequest;
import com.bit.testovoe.utils.Priority;
import com.bit.testovoe.utils.Sign;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        List<Integer> answerList = new ArrayList<>();

        int flag = 0;
        for (int i = 0; i < requestList.size(); i++) {

            //TODO убрать в Енум
            if (request.getSign().equals(Sign.PLUS)) {
                Optional<Users> presentUsers;
                if (usersRepository.get(requestList.get(i)).isPresent()) {
                    presentUsers = usersRepository.get(requestList.get(i));

                    //считаем сколько есть у этого юзера
                    int present = usersRepository.getAmountByUsers(presentUsers.get().getName());
                    // сколько у нового в настоящий момент
                    int future = usersRepository.getAmountByUsers(request.getName());
                    System.out.println("present " + present + "future " + future);

                    if (request.getPriority().equals(Priority.LOW)) {
                        System.out.println("i" + i + " Ничего не делаем пропускаем дальше");
                    } else {
                        if (present > 1 && present >= future) {

                            Users rewriteUser = new Users(requestList.get(i), request.getName());
                            usersRepository.save(rewriteUser);
                            answerList.add(requestList.get(i));

                        } else {
                            flag = flag + 1;
                        }
                        if (flag == requestList.size()) {
                            Users rewriteUser = new Users(requestList.get(i), request.getName());
                            usersRepository.save(rewriteUser);
                            answerList.add(requestList.get(i));
                        }

                    }
                } else {
                    Users writeUser = new Users(requestList.get(i), request.getName());
                    usersRepository.save(writeUser);
                    answerList.add(requestList.get(i));
                }
            } else {
                Optional<Users> isPresentCell = usersRepository.get(requestList.get(i));
                if (isPresentCell.isPresent()) {

                    if (isPresentCell.get().getName().equals(request.getName())) {
                        Users deleteUser = new Users(requestList.get(i), request.getName());
                        usersRepository.delete(deleteUser);
                        answerList.add(requestList.get(i));
                    }
                }
            }
        }

        request.setRequestList(answerList);
        return request;
    }

    /**
     * Рекурсия на запись.
     *
     * @param present     сколько ячеек имеет этот юзер в БД
     * @param requestList Лист с номерами ячеек в которые хотим записать
     * @param request     сам запрос
     * @param i           флаг для рекурсии
     * @param answerList  то что по факту в БД
     */
    public void recursion(Integer present, List<Integer> requestList, Rec request, int i,
                          List<Integer> answerList) {
        if (present == 1) {
            return;
        }

        if (present > 1 && present <= requestList.size()) {
            if (!answerList.contains(requestList.get(i))) {


                Users addUser = new Users(requestList.get(i), request.getName());
                usersRepository.save(addUser);
                System.out.println(answerList.toString() + " " + i);

                answerList.add(requestList.get(i));
            }
        } else {
            int intrecursionFlag = i + 1;
            System.out.println("intrecursionFlag" + intrecursionFlag);
            recursion(present, requestList, request, intrecursionFlag, answerList);
        }

    }
}