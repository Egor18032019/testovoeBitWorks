package com.bit.testovoe.repository;

import com.bit.testovoe.entity.Users;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public class DataJpaUserRepository  implements CrudUserRepository{
    private final UsersRepository userRepository;

    public DataJpaUserRepository(UsersRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Users> findAll() {
        return userRepository.findAllBy();
    }



    @Override
    public Optional<Users> get(int id) {
        return userRepository.get(id);
    }

    @Override
    public int getAmountByUsers(String name) {
        return userRepository.getAmountByUsers(name);
    }

    @Override
    public Users save(Users users) {
         return userRepository.save(users);
    }


    public void delete (Users users) {
        System.out.println(" DataJpaUserRepository delete ");
          userRepository.delete(users);
    }
}
