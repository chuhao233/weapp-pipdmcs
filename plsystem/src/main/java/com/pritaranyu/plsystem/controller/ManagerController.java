package com.pritaranyu.plsystem.controller;


import com.pritaranyu.plsystem.pojo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
@RestController
@RequestMapping("invigilation")

public class ManagerController {
    @Autowired


    private static final String UPLOAD_DIR = "uploads/";


    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            String fileName = file.getOriginalFilename();
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs(); // 如果目录不存在，创建它
            }

            //后面pathname修改成服务器地址即可将表格上传
            file.transferTo(new File("E:/ideatest/plsystem/uploads/" + fileName));
            return Result.success().toString();
        }
        catch (IOException e) {
            e.printStackTrace();
            return Result.error("上传失败").toString();
        }
    }





}


