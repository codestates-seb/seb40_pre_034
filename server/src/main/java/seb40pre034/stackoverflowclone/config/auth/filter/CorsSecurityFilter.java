package seb40pre034.stackoverflowclone.config.auth.filter;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class CorsSecurityFilter implements Filter {
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {

        HttpServletResponse response = (HttpServletResponse) res;

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with, origin, content-type, accept");
        response.setHeader("Access-Control-Allow-Methods", "POST,GET,PATCH,OPTIONS,DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");

        chain.doFilter(req, response);
    }

    public void init(FilterConfig arg0) throws ServletException {}

    public void destroy() {}
}
