package com.bit.testovoe.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {

        registry.addViewController("/realization").setViewName("index.html");
        registry.addViewController("/task").setViewName("index.html");
        registry.addViewController("/case").setViewName("index.html");

    }
}
