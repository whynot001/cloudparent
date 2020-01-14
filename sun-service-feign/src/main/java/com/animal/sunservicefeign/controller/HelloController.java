package com.animal.sunservicefeign.controller;

import com.animal.sunservicefeign.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description TODO
 * @Author liheng
 * @Date 2019/12/26 15:25
 */
@SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
@RestController
public class HelloController {
    @Autowired
    private HelloService helloService;
    @GetMapping("/he")
    public String call(@RequestParam("name")String name){
        return helloService.callService1(name);
    }
}
