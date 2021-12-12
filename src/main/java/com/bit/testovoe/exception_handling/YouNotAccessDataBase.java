package com.bit.testovoe.exception_handling;


public class YouNotAccessDataBase  extends RuntimeException{
    public YouNotAccessDataBase(String message) {
        super(message);
    }
}
