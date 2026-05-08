package com.ems.smart_employee_management.repository;

import com.ems.smart_employee_management.model.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
}
