package com.ems.smart_employee_management.service;

import com.ems.smart_employee_management.model.EmployeeAttendance;
import com.ems.smart_employee_management.repository.EmployeeAttendanceRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class EmployeeAttendanceService {

    private final EmployeeAttendanceRepository repo;

    public EmployeeAttendanceService(
            EmployeeAttendanceRepository repo
    ) {
        this.repo = repo;
    }

    public EmployeeAttendance clockIn(Long userId) {

        LocalDate today = LocalDate.now();

        EmployeeAttendance existing = repo
                .findByUserIdAndAttendanceDate(
                        userId,
                        today
                )
                .orElse(null);

        if (existing != null) {

            throw new RuntimeException(
                    "Already Clocked In Today"
            );
        }

        EmployeeAttendance attendance =
                EmployeeAttendance.builder()
                        .userId(userId)
                        .attendanceDate(today)
                        .clockIn(LocalDateTime.now())
                        .build();

        return repo.save(attendance);
    }

    public EmployeeAttendance clockOut(
            Long attendanceId
    ) {

        EmployeeAttendance attendance =
                repo.findById(attendanceId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Attendance Not Found"
                                ));

        attendance.setClockOut(
                LocalDateTime.now()
        );

        return repo.save(attendance);
    }

    public List<EmployeeAttendance>
    getAttendanceByUser(Long userId) {

        return repo
                .findByUserIdOrderByAttendanceIdDesc(
                        userId
                );
    }
}
