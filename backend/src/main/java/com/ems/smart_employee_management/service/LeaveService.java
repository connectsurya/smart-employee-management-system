package com.ems.smart_employee_management.service;

import com.ems.smart_employee_management.model.Leave;
import com.ems.smart_employee_management.repository.LeaveRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LeaveService {

    private final LeaveRepository repo;

    public LeaveService(LeaveRepository repo) {
        this.repo = repo;
    }

    public Leave applyLeave(Leave leave) {
        leave.setStatus(0);
        return repo.save(leave);
    }

    public List<Leave> getAllLeaves() {
        return repo.findAllByOrderByLeaveIdDesc();
    }

    public List<Leave> getLeaveHistory(Long userId) {
        return repo.findByUserIdOrderByLeaveIdDesc(userId);
    }

    public Leave approveLeave(Long id) {
        Leave leave = repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Leave not found"));

        leave.setStatus(1);
        return repo.save(leave);
    }

    public Leave rejectLeave(Long id) {
        Leave leave = repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Leave not found"));

        leave.setStatus(2);
        return repo.save(leave);
    }
}
