package com.ems.smart_employee_management.repository;

import com.ems.smart_employee_management.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
