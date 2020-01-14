package com.animal.sunserviceribbon.service;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * @Description TODO
 * @Author liheng
 * @Date 2019/12/26 10:01
 */
@Service
public class HelloService {
    @Autowired
    RestTemplate restTemplate;
    @HystrixCommand(fallbackMethod = "backError")
    public String callService(String name){
        return restTemplate.getForObject("http://SERVICE-PROVIDER/hello?name="+name,String.class);
    }

    public String backError(String name){
        return "call-"+name+",error!";
    }
}
