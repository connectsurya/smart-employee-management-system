package com.ems.smart_employee_management.repository;

import com.ems.smart_employee_management.model.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LeaveRepository extends JpaRepository<Leave, Long> {
    List<Leave> findByUserIdOrderByLeaveIdDesc(Long userId);
    List<Leave> findAllByOrderByLeaveIdDesc();
    Long countByUserIdAndStatus(Long userId, Integer status);
}
