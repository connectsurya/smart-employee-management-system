package com.ems.smart_employee_management.service;

import com.ems.smart_employee_management.model.Employee;
import com.ems.smart_employee_management.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository repo;

    public EmployeeService(EmployeeRepository repo) {
        this.repo = repo;
    }

    public Employee login(Employee emp) {
        Employee user = repo.findByEmail(emp.getUsername())
                .or(() -> repo.findByUsername(emp.getUsername()))
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(emp.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }

    public Employee register(Employee emp) {
        if (emp.getRole() == null || emp.getRole().isEmpty()) {
            emp.setRole("EMPLOYEE");
        }
        return repo.save(emp);
    }

    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    public Employee addEmployee(Employee emp) {
        if (emp.getRole() == null || emp.getRole().isEmpty()) {
            emp.setRole("EMPLOYEE");
        }

        return repo.save(emp);
    }

    public Employee getEmployeeById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    public Employee updateEmployee(Long id, Employee emp) {
        Employee existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        existing.setUsername(emp.getUsername());
        existing.setEmail(emp.getEmail());
        existing.setFirstName(emp.getFirstName());
        existing.setLastName(emp.getLastName());
        existing.setDepartment(emp.getDepartment());
        existing.setSalary(emp.getSalary());
        existing.setExperience(emp.getExperience());
        existing.setRole(emp.getRole());

        if (emp.getPassword() != null && !emp.getPassword().isEmpty()) {
            existing.setPassword(emp.getPassword());
        }

        return repo.save(existing);
    }

    public void deleteEmployee(Long id) {
        repo.deleteById(id);
    }
}