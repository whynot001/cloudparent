package com.animal.configclient.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description TODO
 * @Author liheng
 * @Date 2020/1/6 18:00
 */
@RestController
@RefreshScope
public class TestController {
    @Value("${boy}")
    String test0;
    @RequestMapping("/test")
    public String test() {
        System.out.println(test0);
       return test0;
    }
}
