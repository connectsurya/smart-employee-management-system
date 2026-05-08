package com.ems.smart_employee_management.service;

import com.ems.smart_employee_management.model.Announcement;
import com.ems.smart_employee_management.repository.AnnouncementRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AnnouncementService {

    private final AnnouncementRepository repo;

    public AnnouncementService(AnnouncementRepository repo) {
        this.repo = repo;
    }

    public List<Announcement> getAllAnnouncements() {
        return repo.findAll();
    }

    public Announcement addAnnouncement(Announcement announcement) {
        announcement.setCreatedAt(LocalDateTime.now());
        return repo.save(announcement);
    }

    public Announcement getAnnouncementById(Long id) {
        return repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Announcement not found"));
    }

    public Announcement updateAnnouncement(Long id, Announcement announcement) {
        Announcement existing = repo.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Announcement not found"));

        existing.setTitle(announcement.getTitle());
        existing.setContent(announcement.getContent());

        return repo.save(existing);
    }

    public void deleteAnnouncement(Long id) {
        repo.deleteById(id);
    }
}
