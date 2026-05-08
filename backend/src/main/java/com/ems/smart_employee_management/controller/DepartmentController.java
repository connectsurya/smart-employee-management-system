package com.ems.smart_employee_management.controller;

import com.ems.smart_employee_management.model.Department;
import com.ems.smart_employee_management.service.DepartmentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentService service;

    public DepartmentController(DepartmentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Department> getAllDepartments() {
        return service.getAll();
    }

    @PostMapping
    public Department addDepartment(@RequestBody Department dept) {
        return service.add(dept);
    }

    @GetMapping("/{id}")
    public Department getDepartmentById(
            @PathVariable Long id
    ) {

        return service.getDepartmentById(id);
    }

    @PutMapping("/{id}")
    public Department updateDepartment(
            @PathVariable Long id,
            @RequestBody Department dept
    ) {
        return service.updateDepartment(id, dept);
    }

    @DeleteMapping("/{id}")
    public String deleteDepartment(
            @PathVariable Long id
    ) {
        service.deleteDepartment(id);
        return "Department Deleted Successfully";
    }
}