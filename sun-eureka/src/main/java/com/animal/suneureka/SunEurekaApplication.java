package com.animal.suneureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class SunEurekaApplication {

    public static void main(String[] args) {
        SpringApplication.run(SunEurekaApplication.class, args);
    }

}
