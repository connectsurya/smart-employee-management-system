package com.ems.smart_employee_management.repository;

import com.ems.smart_employee_management.model.EmployeeAttendance;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface EmployeeAttendanceRepository extends JpaRepository<EmployeeAttendance, Long> {
    List<EmployeeAttendance> findByUserIdOrderByAttendanceIdDesc(Long userId);
    Optional<EmployeeAttendance> findByUserIdAndAttendanceDate(Long userId, LocalDate attendanceDate);
    Long countByUserIdAndAttendanceDateBetween(Long userId, LocalDate startDate, LocalDate endDate);
}
