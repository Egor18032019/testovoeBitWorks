package com.bit.testovoe.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class Users {
    @Id
    @Column
    private Integer id;
    @Column
    private String name;
}
