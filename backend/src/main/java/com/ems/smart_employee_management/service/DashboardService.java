package com.ems.smart_employee_management.service;

import com.ems.smart_employee_management.model.Employee;
import com.ems.smart_employee_management.repository.AnnouncementRepository;
import com.ems.smart_employee_management.repository.EmployeeAttendanceRepository;
import com.ems.smart_employee_management.repository.EmployeeRepository;
import com.ems.smart_employee_management.repository.LeaveRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Service
public class DashboardService {

    private final LeaveRepository leaveRepo;

    private final EmployeeAttendanceRepository attendanceRepo;

    private final AnnouncementRepository announcementRepo;

    private final EmployeeRepository employeeRepo;

    public DashboardService(
            LeaveRepository leaveRepo,
            EmployeeAttendanceRepository attendanceRepo,
            AnnouncementRepository announcementRepo,
            EmployeeRepository employeeRepo
    ) {

        this.leaveRepo = leaveRepo;
        this.attendanceRepo = attendanceRepo;
        this.announcementRepo = announcementRepo;
        this.employeeRepo = employeeRepo;
    }

    public Map<String, Object> getDashboardData(
            Long userId
    ) {

        Map<String, Object> data =
                new HashMap<>();

        Employee employee =
                employeeRepo.findById(userId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Employee Not Found"
                                ));

        Long pendingLeaves =
                leaveRepo.countByUserIdAndStatus(
                        userId,
                        0
                );

        Long approvedLeaves =
                leaveRepo.countByUserIdAndStatus(
                        userId,
                        1
                );

        LocalDate firstDate =
                LocalDate.now()
                        .withDayOfMonth(1);

        LocalDate today =
                LocalDate.now();

        Long attendanceCount =
                attendanceRepo
                        .countByUserIdAndAttendanceDateBetween(
                                userId,
                                firstDate,
                                today
                        );

        Long announcementCount =
                announcementRepo.count();

        data.put(
                "employeeName",
                employee.getFirstName()
                        + " " +
                        employee.getLastName()
        );

        data.put(
                "pendingLeaves",
                pendingLeaves
        );

        data.put(
                "approvedLeaves",
                approvedLeaves
        );

        data.put(
                "attendanceCount",
                attendanceCount
        );

        data.put(
                "announcementsCount",
                announcementCount
        );

        return data;
    }
}
