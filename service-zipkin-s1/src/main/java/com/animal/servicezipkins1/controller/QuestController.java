package com.animal.servicezipkins1.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * @Description TODO
 * @Author liheng
 * @Date 2020/1/7 17:25
 */
@RestController
public class QuestController {
    private static final Log log= LogFactory.getLog(QuestController.class);
    @Autowired
    private RestTemplate restTemplate;
    @Bean
    public RestTemplate getRestTemplate(){
        return new RestTemplate();
    }
    @GetMapping("/call1")
    public String call(){
        log.info("1 call me !!!");
        return restTemplate.getForObject("http://localhost:9002/answer2",String.class);
    }
    @GetMapping("/answer1")
    public String answer(){
        log.info("answer1 me");
        return "answer1 me!!!";
    }
}
