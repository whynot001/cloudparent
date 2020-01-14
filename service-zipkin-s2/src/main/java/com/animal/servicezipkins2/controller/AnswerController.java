package com.animal.servicezipkins2.controller;

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
public class AnswerController {
    private static final Log log= LogFactory.getLog(AnswerController.class);
    @Autowired
    private RestTemplate restTemplate;
    @Bean
    public RestTemplate getRestTemplate(){
        return new RestTemplate();
    }
    @GetMapping("/answer2")
    public String answer(){
        log.info("answer2 me");
        return "answer2 me!!!";
    }

    @GetMapping("/call")
    public String call(){
        log.info("2 call me !!!");
        return restTemplate.getForObject("http://localhost:9001/answer1",String.class);
    }
}
