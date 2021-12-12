package com.bit.testovoe.service;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.exception_handling.IncorectDataDuringRequest;
import com.bit.testovoe.repository.CrudUserRepository;
import com.bit.testovoe.to.Rec;
import com.bit.testovoe.to.UserRequest;
import com.bit.testovoe.utils.Priority;
import com.bit.testovoe.utils.Sign;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

/*
  Если субъект имеет приоритет LOWPRIO, то он становится владельцем, только
 в том случае, если нет владельца нормального приоритета и передает
 владение при появлении владельца нормального приоритета.

fixme ! В картинке с тесткейсами такого нет !

 */

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
        if (request.getName().length() < 1) {
            throw new IncorectDataDuringRequest(" Need name this cells !");
        }
        //Убрал повторы

        List<Integer> requestList = request.getRequestList().stream().distinct().collect(Collectors.toList());
        List<Integer> answerList = new ArrayList<>();

        if (requestList.size() == 0) {
            throw new IncorectDataDuringRequest("Необходим список заменяемых мест");
        }
        if (requestList.stream().anyMatch(Objects::isNull)) {
            throw new IncorectDataDuringRequest("в графе \"Места через запятую\" должны быть перечислены цифры через запятую");
        }
        if (requestList.stream().anyMatch(x -> x < 0)) {
            throw new IncorectDataDuringRequest(" Only positive integers ! ");
        }
        if (requestList.stream().anyMatch(x -> x > 9)) {
            throw new IncorectDataDuringRequest(" We have only cells => 0,1,2,3,4,5,6,7,8,9! ");
        }
        for (int q = 0; q < requestList.size(); q++) {
            if (usersRepository.get(requestList.get(q)).isEmpty()) {
                Users writeUser = new Users(requestList.get(q), request.getName(), request.getPriority());
                usersRepository.save(writeUser);
                answerList.add(requestList.get(q));
                System.out.println("69 'answerList'" + answerList.size());
            }
        }

        int flag = 0;
        for (int i = 0; i < requestList.size(); i++) {


            if (request.getSign().equals(Sign.PLUS)) {

                Optional<Users> presentUsers = usersRepository.get(requestList.get(i));

                System.out.println("Prio " + presentUsers.get().getPriority());
                //считаем сколько есть у этого юзера
                int present = usersRepository.getAmountByUsers(presentUsers.get().getName());
                // сколько у нового в настоящий момент
                int future = usersRepository.getAmountByUsers(request.getName());

                if (request.getPriority().equals(Priority.LOWPRIO) && presentUsers.get().getPriority().equals(Priority.NORMAL)) {
                        System.out.println("Пропускаем ");

                } else {
                    if (presentUsers.get().getPriority().equals(Priority.LOWPRIO)) {
                        Users rewriteUser = new Users(requestList.get(i), request.getName(), request.getPriority());
                        usersRepository.save(rewriteUser);
                        answerList.add(requestList.get(i));
                        continue;
                    }

                    if (present > future) {
                        Users rewriteUser = new Users(requestList.get(i), request.getName(), request.getPriority());
                        usersRepository.save(rewriteUser);
                        answerList.add(requestList.get(i));

                    } else {
                        flag = flag + 1;
                    }
                    if (flag == requestList.size()) {
                        Users rewriteUser = new Users(requestList.get(i), request.getName(), request.getPriority());
                        usersRepository.save(rewriteUser);
                        answerList.add(requestList.get(i));
                    }

                }


            } else if (request.getSign().equals(Sign.MINUS)) {

                Optional<Users> isPresentCell = usersRepository.get(requestList.get(i));
                if (isPresentCell.isPresent()) {

                    if (isPresentCell.get().getName().equals(request.getName())) {
                        Users deleteUser = new Users(requestList.get(i), request.getName(), request.getPriority());
                        usersRepository.delete(deleteUser);
                        answerList.add(requestList.get(i));
                    }
                }
            } else {
                throw new IncorectDataDuringRequest("sign = ( + or - )");
            }
        }
        System.out.println("151 'answerList'" + answerList.size());

        request.setRequestList(answerList);
        return request;
    }

    public boolean deleteAll() {
        usersRepository.deleteAll();
        return true;
    }

}