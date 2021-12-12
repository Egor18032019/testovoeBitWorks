package com.bit.testovoe.exception_handling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<IncorrectData> handleException(IncorectDataDuringRequest exception) {
        IncorrectData data = new IncorrectData();
        data.setInfo(exception.getMessage());
        return new ResponseEntity<>(data, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler
    public ResponseEntity<IncorrectData> handleException(YouNotAccessDataBase exception) {
        IncorrectData data = new IncorrectData();
        data.setInfo(exception.getMessage());
        return new ResponseEntity<>(data, HttpStatus.FORBIDDEN);
    }
}
