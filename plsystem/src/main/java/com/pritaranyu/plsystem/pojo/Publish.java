package com.pritaranyu.plsystem.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

@Data
public class Publish {
    private Integer invigilateId;
    @JsonFormat(pattern = "YYYY-MM-DD")
    private String examDate;
    private Integer session;
    private Integer week;
    private String dayOfWeek;
    @JsonFormat(pattern = "HH:mm")
    private String startTime;
    @JsonFormat(pattern = "HH:mm")
    private String endTime;
    private String campus;
    private String building;
    private String room;
    private Integer seatCount;
    private Integer studentCount;
    private String courseCode;
    private String courseName;
    private String department;
    private String teacherName;
    private String mainInvigilator;
    private String deputyInvigilator;
    private String mainInvigilatorCount;
    private String deputyInvigilatorCount;
    private String status;
}
