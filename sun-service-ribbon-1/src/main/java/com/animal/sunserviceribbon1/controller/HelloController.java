package com.animal.sunserviceribbon1.controller;

import com.animal.sunserviceribbon1.service.HelloService1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description TODO
 * @Author liheng
 * @Date 2019/12/26 10:07
 */
@RestController
public class HelloController {
    @Autowired
    HelloService1 helloService;
    @RequestMapping("/call")
    public String hello(@RequestParam("name") String name){
        return helloService.callService(name);
    }

}
