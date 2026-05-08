package com.ems.smart_employee_management.service;

import com.ems.smart_employee_management.model.Payroll;
import com.ems.smart_employee_management.repository.PayrollRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class PayrollService {

    private final PayrollRepository repo;

    public PayrollService(PayrollRepository repo) {
        this.repo = repo;
    }

    public List<Payroll> getAllPayrolls() {
        return repo.findAll();
    }

    public Payroll createPayroll(Payroll payroll) {
        payroll.setCreatedAt(
                LocalDateTime.now()
        );

        payroll.setStatus(0);
        return repo.save(payroll);
    }

    public List<Payroll> getEmployeePayslips(
            Long empId
    ) {
        return repo.findByEmpIdOrderByIdDesc(
                empId
        );
    }

    public Payroll updatePayrollStatus(Long id) {

        Payroll payroll = repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Payroll not found"
                        ));

        payroll.setStatus(1);
        return repo.save(payroll);
    }
}
