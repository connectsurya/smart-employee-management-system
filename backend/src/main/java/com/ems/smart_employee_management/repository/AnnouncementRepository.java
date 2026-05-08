package com.ems.smart_employee_management.repository;

import com.ems.smart_employee_management.model.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
}
