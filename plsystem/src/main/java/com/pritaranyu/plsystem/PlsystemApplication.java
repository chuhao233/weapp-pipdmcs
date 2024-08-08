package com.pritaranyu.plsystem;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan("com.pritaranyu.plsystem")
public class PlsystemApplication {

    public static void main(String[] args) {

        SpringApplication.run(PlsystemApplication.class, args);
    }

}
