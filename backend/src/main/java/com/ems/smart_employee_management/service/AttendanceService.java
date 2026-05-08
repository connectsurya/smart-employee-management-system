package com.ems.smart_employee_management.service;

import com.ems.smart_employee_management.model.Attendance;
import com.ems.smart_employee_management.repository.AttendanceRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AttendanceService {

    private final AttendanceRepository repo;

    public AttendanceService(AttendanceRepository repo) {
        this.repo = repo;
    }

    public List<Attendance> getAllAttendance() {
        return repo.findAll();
    }

    public Attendance addAttendance(Attendance attendance) {
        attendance.setCreatedAt(LocalDateTime.now());
        return repo.save(attendance);
    }
}
