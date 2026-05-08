package com.ems.smart_employee_management.controller;

import com.ems.smart_employee_management.model.Leave;
import com.ems.smart_employee_management.service.LeaveService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/leaves")
public class LeaveController {

    private final LeaveService service;

    public LeaveController(LeaveService service) {
        this.service = service;
    }

    @PostMapping
    public Leave applyLeave(
            @RequestBody Leave leave
    ) {
        return service.applyLeave(leave);
    }

    @GetMapping
    public List<Leave> getAllLeaves() {
        return service.getAllLeaves();
    }

    @GetMapping("/{userId}")
    public List<Leave> getLeaveHistory(
            @PathVariable Long userId
    ) {
        return service.getLeaveHistory(userId);
    }

    @PutMapping("/approve/{id}")
    public Leave approveLeave(
            @PathVariable Long id
    ) {
        return service.approveLeave(id);
    }

    @PutMapping("/reject/{id}")
    public Leave rejectLeave(
            @PathVariable Long id
    ) {
        return service.rejectLeave(id);
    }
}
