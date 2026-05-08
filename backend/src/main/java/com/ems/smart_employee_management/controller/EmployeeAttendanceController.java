package com.ems.smart_employee_management.controller;

import com.ems.smart_employee_management.model.EmployeeAttendance;
import com.ems.smart_employee_management.service.EmployeeAttendanceService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/attendance")
public class EmployeeAttendanceController {

    private final EmployeeAttendanceService service;

    public EmployeeAttendanceController(
            EmployeeAttendanceService service
    ) {
        this.service = service;
    }

    @PostMapping("/clock-in/{userId}")
    public EmployeeAttendance clockIn(
            @PathVariable Long userId
    ) {
        return service.clockIn(userId);
    }

    @PutMapping("/clock-out/{attendanceId}")
    public EmployeeAttendance clockOut(
            @PathVariable Long attendanceId
    ) {
        return service.clockOut(attendanceId);
    }

    @GetMapping("/{userId}")
    public List<EmployeeAttendance> getAttendance(
            @PathVariable Long userId
    ) {

        return service.getAttendanceByUser(userId);
    }
}
