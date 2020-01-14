package com.animal.sungateway;

import com.animal.sungateway.config.RequestTimeGatewayFilterFactory;
import com.animal.sungateway.config.TokenFilter;
import com.animal.sungateway.config.UriKeyResolver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class SunGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(SunGatewayApplication.class, args);
    }
    @Bean
    public RequestTimeGatewayFilterFactory elapsedGatewayFilterFactory() {
        return new RequestTimeGatewayFilterFactory();
    }
    @Bean
    public TokenFilter tokenFilter(){
        return  new TokenFilter();
    }

    /**
     * KeyResolver需要实现resolve方法，比如根据Hostname进行限流，则需要用hostAddress去判断
     * @return
     */
//    @Bean
//    public HostAddrKeyResolver hostAddrKeyResolver() {
//        return new HostAddrKeyResolver();
//    }

    /**
     * 根据uri去限流，这时KeyResolver
     * @return
     */
    @Bean
    public UriKeyResolver uriKeyResolver() {
        return new UriKeyResolver();
    }

    /**
     * 用户的维度去限流
     * @return
     */
//    @Bean
//    KeyResolver userKeyResolver() {
//        return exchange -> Mono.just(exchange.getRequest().getQueryParams().getFirst("user"));
//    }
}
