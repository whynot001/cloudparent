package com.animal.servicezipkins2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ServiceZipkinS2Application {

    public static void main(String[] args) {
        SpringApplication.run(ServiceZipkinS2Application.class, args);
    }

}
