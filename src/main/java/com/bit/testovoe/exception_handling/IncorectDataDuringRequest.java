package com.bit.testovoe.exception_handling;


public class IncorectDataDuringRequest  extends RuntimeException{
    public IncorectDataDuringRequest(String message) {
        super(message);
    }
}
