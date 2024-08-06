package com.pritaranyu.plsystem.pojo;

import lombok.Data;

@Data
public class Publish {
    private Integer invigilateId;
    private String examDate;
    private Integer session;
    private Integer week;
    private String dayOfWeek;
    private String startTime;
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
