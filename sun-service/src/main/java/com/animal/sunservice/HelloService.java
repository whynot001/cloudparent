package com.animal.sunservice;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description TODO
 * @Author liheng
 * @Date 2019/12/20 17:31
 */
@RestController
public class HelloService {
    @RequestMapping("/hello")
    public String hello(@RequestParam("name") String name){
        System.out.println("service:8081");
        return name+":hello world service";
    }
}
