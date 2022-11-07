package seb40pre034.stackoverflowclone.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import seb40pre034.stackoverflowclone.config.auth.CustomAuthorityUtils;
import seb40pre034.stackoverflowclone.config.auth.filter.JwtAuthenticationFilter;
import seb40pre034.stackoverflowclone.config.auth.JwtTokenizer;
import seb40pre034.stackoverflowclone.config.auth.filter.JwtVerificationFilter;

import java.util.Arrays;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtTokenizer tokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
//                .cors().configurationSource(corsConfigurationSource())
                .cors()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // (1) 추가
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/questions/ask").authenticated()
                        .antMatchers(HttpMethod.PATCH, "/questions/edit/**").authenticated()
                        .antMatchers(HttpMethod.DELETE, "/questions/delete/**").authenticated()
                        .antMatchers(HttpMethod.POST, "/answers").authenticated()
                        .antMatchers(HttpMethod.PATCH, "/answers/edit/**").authenticated()
                        .antMatchers(HttpMethod.DELETE, "/answers/**").authenticated()
                        .antMatchers(HttpMethod.GET, "/questions/**").permitAll()
                        .antMatchers(HttpMethod.GET, "/answers/**").permitAll()
                        .anyRequest().permitAll()
                )
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/questions");
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(tokenizer, authenticationManager);
            jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(tokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");
        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","PATCH","OPTIONS","DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        configuration.addExposedHeader("Authorization");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}
