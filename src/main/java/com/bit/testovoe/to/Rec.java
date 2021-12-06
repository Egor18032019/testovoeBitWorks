package com.bit.testovoe.to;

import com.bit.testovoe.utils.Priority;

import java.util.List;

public interface Rec {

    String getName();

    List<Integer> getRequestList();

    Priority getPriority();

    String getSign();
}
