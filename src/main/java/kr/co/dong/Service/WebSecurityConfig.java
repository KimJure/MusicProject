package kr.co.dong.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	   @Bean
	    public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	    
	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	        http
	            .authorizeRequests()
	                .antMatchers("/board/**").permitAll() // 특정 URL은 모든 사용자에게 허용
	                .antMatchers("/board/adminHome").authenticated() // 특정 URL은 인증된 사용자에게만 허용
	            .and()
	            .formLogin()
	                .loginPage("/Loginview") // 로그인 페이지 지정
	                .defaultSuccessUrl("/") // 로그인 성공 후 이동할 페이지
	                .permitAll() // 로그인 페이지는 모든 사용자에게 허용
	            .and()
	            .logout()
	                .logoutSuccessUrl("/") // 로그아웃 후 이동할 페이지
	                .permitAll(); // 로그아웃은 모든 사용자에게 허용
	    }
	    
	    @Autowired
	    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
	        auth
	            .inMemoryAuthentication()
	                .withUser("user").password(passwordEncoder().encode("password")).roles("USER");
	    }
	}