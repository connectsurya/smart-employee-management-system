package com.ems.smart_employee_management.service;

import com.ems.smart_employee_management.model.Department;
import com.ems.smart_employee_management.repository.DepartmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DepartmentService {

    private final DepartmentRepository repo;

    public DepartmentService(DepartmentRepository repo) {
        this.repo = repo;
    }

    public List<Department> getAll() {
        return repo.findAll();
    }

    public Department add(Department dept) {
        return repo.save(dept);
    }

    public Department getDepartmentById(Long id) {

        return repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Department not found"));
    }

    public Department updateDepartment(Long id, Department dept) {

        Department existing = repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Department not found"));

        existing.setName(dept.getName());

        return repo.save(existing);
    }

    public void deleteDepartment(Long id) {

        repo.deleteById(id);
    }
}