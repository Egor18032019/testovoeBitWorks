package com.bit.testovoe.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
public class AppController {

    @RequestMapping({"/"})
    public String loadUI() {
        log.info("loading page from React");
        return "forward:/index.html";
    }

}