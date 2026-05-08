package com.ems.smart_employee_management.controller;

import com.ems.smart_employee_management.model.Payroll;
import com.ems.smart_employee_management.service.PayrollService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/payroll")
public class PayrollController {

    private final PayrollService service;

    public PayrollController(PayrollService service) {
        this.service = service;
    }

    @GetMapping
    public List<Payroll> getAllPayrolls() {

        return service.getAllPayrolls();
    }

    @PostMapping
    public Payroll createPayroll(
            @RequestBody Payroll payroll
    ) {
        return service.createPayroll(payroll);
    }

    @GetMapping("/{empId}")
    public List<Payroll> getPayslips(
            @PathVariable Long empId
    ) {
        return service.getEmployeePayslips(
                empId
        );
    }

    @PutMapping("/pay/{id}")
    public Payroll updatePayrollStatus(
            @PathVariable Long id
    ) {
        return service.updatePayrollStatus(id);
    }
}
