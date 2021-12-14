package com.bit.testovoe.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.bit.testovoe.utils.Priority;
import lombok.Data;
import org.springframework.validation.annotation.Validated;

@Entity
@Data
@Table(name = "users")

public class Users {
    @Id
    @Column
    @Min(0)
    @Max(9)
    private Integer id;

    @Column
    private String name;

    @Column
    private Priority priority;

    public Users() {}

    public Users(Integer id, String name,Priority priority) {
        this.id = id;
        this.name = name;
        this.priority = priority;
    }

    public Integer getId() {
        return id;
    }

    public Priority getPriority() {
        return priority;
    }

    public String getName() {
        return name;
    }
}
