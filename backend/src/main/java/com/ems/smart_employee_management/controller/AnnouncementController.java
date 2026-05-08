package com.ems.smart_employee_management.controller;

import com.ems.smart_employee_management.model.Announcement;
import com.ems.smart_employee_management.service.AnnouncementService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {

    private final AnnouncementService service;

    public AnnouncementController(AnnouncementService service) {
        this.service = service;
    }

    @GetMapping
    public List<Announcement> getAllAnnouncements() {
        return service.getAllAnnouncements();
    }

    @GetMapping("/{id}")
    public Announcement getAnnouncementById(@PathVariable Long id) {
        return service.getAnnouncementById(id);
    }

    @PostMapping
    public Announcement addAnnouncement(@RequestBody Announcement announcement) {
        return service.addAnnouncement(announcement);
    }

    @PutMapping("/{id}")
    public Announcement updateAnnouncement(@PathVariable Long id, @RequestBody Announcement announcement) {
        return service.updateAnnouncement(id, announcement);
    }

    @DeleteMapping("/{id}")
    public String deleteAnnouncement(@PathVariable Long id) {
        service.deleteAnnouncement(id);
        return "Announcement Deleted Successfully";
    }
}
