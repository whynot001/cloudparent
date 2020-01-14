package com.animal.sunservicefeign.service.impl;

import com.animal.sunservicefeign.service.HelloService;
import org.springframework.stereotype.Component;

/**
 * @Description TODO
 * @Author liheng
 * @Date 2019/12/26 16:12
 */
@Component
public class HelloServiceImplHystric implements HelloService {
    @Override
    public String callService1(String name) {
        return "sorry "+name+",you wrong !";
    }
}
