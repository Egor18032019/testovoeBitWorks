package com.bit.testovoe.repository;

import com.bit.testovoe.entity.Users;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class DataJpaUserRepository  implements CrudUserRepository{
    private final UsersRepository userRepository;

    public DataJpaUserRepository(UsersRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Users> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Users save(Users users) {
        return userRepository.save(users);
    }
}
