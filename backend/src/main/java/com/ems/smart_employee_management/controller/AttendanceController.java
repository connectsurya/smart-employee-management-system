package com.ems.smart_employee_management.controller;

import com.ems.smart_employee_management.model.Attendance;
import com.ems.smart_employee_management.service.AttendanceService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {

    private final AttendanceService service;

    public AttendanceController(AttendanceService service) {
        this.service = service;
    }

    @GetMapping
    public List<Attendance> getAllAttendance() {

        return service.getAllAttendance();
    }

    @PostMapping
    public Attendance addAttendance(
            @RequestBody Attendance attendance
    ) {

        return service.addAttendance(attendance);
    }
}
