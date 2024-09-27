package com.college.CollegeDetail.repositry;

import com.college.CollegeDetail.model.CourseFee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseFeeRepository extends JpaRepository<CourseFee, Long> {
}

