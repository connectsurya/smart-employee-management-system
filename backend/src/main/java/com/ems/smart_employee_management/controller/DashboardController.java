package com.ems.smart_employee_management.controller;

import com.ems.smart_employee_management.service.DashboardService;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService service;

    public DashboardController(
            DashboardService service
    ) {
        this.service = service;
    }

    @GetMapping("/employee/{userId}")
    public Map<String, Object> getDashboard(
            @PathVariable Long userId
    ) {

        return service.getDashboardData(userId);
    }
}
