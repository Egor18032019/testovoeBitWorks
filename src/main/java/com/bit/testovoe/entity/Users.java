package com.bit.testovoe.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import lombok.Data;
import org.springframework.validation.annotation.Validated;

@Entity
@Data
@Table(name = "users")

public class Users {
    @Id
    @Column
    @Min(1)
    @Max(9)
    private Integer id;

    @Column
    private String name;

    public Users() {}

    public Users(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
