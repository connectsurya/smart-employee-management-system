package com.ems.smart_employee_management.repository;

import com.ems.smart_employee_management.model.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PayrollRepository extends JpaRepository<Payroll, Long> {
    List<Payroll> findByEmpIdOrderByIdDesc(Long empId);
}
