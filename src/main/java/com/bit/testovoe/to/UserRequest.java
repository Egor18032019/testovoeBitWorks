package com.bit.testovoe.to;

import com.bit.testovoe.entity.Users;
import com.bit.testovoe.utils.Priority;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.List;

@JsonPropertyOrder({"sign", "name", "requestList", "priority"})
public class UserRequest implements Rec {
    public String sign;
    public String name;
    public List<Integer> requestList;
    public Priority priority;

    public UserRequest() {

    }


    //TODO а если не Енум придёт  то упадет с ошибкой. надо поймать и обработать ??
    @JsonCreator
    public UserRequest(String sign, String name, List<Integer> requestList, Priority priority) {
        this.sign = sign;
        this.name = name;
        this.requestList = requestList;
        this.priority = priority;
    }

    @JsonGetter("name")
    @Override
    public String getName() {
        return name;
    }

    @JsonGetter("requestList")
    @Override
    public List<Integer> getRequestList() {
        return requestList;
    }

    @JsonGetter("priority")
    @Override
    public Priority getPriority() {
        return priority;
    }

    @JsonGetter("sign")
    @Override
    public String getSign() {
        return sign;
    }

    @Override
    public String toString() {
        return "UserRequest{" +
                "sign='" + sign + '\'' +
                ", name='" + name + '\'' +
                ", requestList=" + requestList +
                ", priority=" + priority +
                '}';
    }
}







