package com.bit.testovoe.to;

import com.fasterxml.jackson.annotation.JsonCreator;

import java.util.List;

public class ListTest {
    public List<Integer> requestList;
    @JsonCreator
    public ListTest(List<Integer> requestList) {
        this.requestList = requestList;
    }

    public List<Integer> getRequestList() {
        return requestList;
    }

    @Override
    public String toString() {
        return "ListTest{" +
                "requestList=" + requestList +
                '}';
    }
}
