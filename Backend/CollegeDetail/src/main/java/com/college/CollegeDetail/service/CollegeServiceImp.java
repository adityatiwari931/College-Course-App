package com.college.CollegeDetail.service;

import com.college.CollegeDetail.model.College;
import com.college.CollegeDetail.repositry.CollegeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CollegeServiceImp implements CollegeService {
    @Autowired
    private CollegeRepository collegeRepository;

    @Override
    public List<College> getAllColleges() {
        return collegeRepository.findAll(); // Fetches all colleges from the database
    }

    @Override
    public Optional<College> getCollegeById(Long id) {
        return collegeRepository.findById(id); // Fetches a specific college by its ID
    }
}
