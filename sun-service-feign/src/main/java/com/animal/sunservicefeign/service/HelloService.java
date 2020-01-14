package com.animal.sunservicefeign.service;

import com.animal.sunservicefeign.service.impl.HelloServiceImplHystric;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @Description TODO
 * @Author liheng
 * @Date 2019/12/26 15:21
 */
@FeignClient(value = "service-provider",fallback = HelloServiceImplHystric.class)
public interface HelloService {
    @GetMapping("/hello")
    String callService1(@RequestParam("name") String name);
}
