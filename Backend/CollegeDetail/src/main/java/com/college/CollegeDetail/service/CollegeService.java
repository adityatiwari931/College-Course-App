package com.college.CollegeDetail.service;
import com.college.CollegeDetail.model.College;
import java.util.List;
import java.util.Optional;

public interface CollegeService {
    List<College> getAllColleges();
    Optional<College> getCollegeById(Long id);
}


