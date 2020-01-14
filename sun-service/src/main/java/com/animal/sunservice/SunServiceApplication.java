package com.animal.sunservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SunServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SunServiceApplication.class, args);
    }

}
