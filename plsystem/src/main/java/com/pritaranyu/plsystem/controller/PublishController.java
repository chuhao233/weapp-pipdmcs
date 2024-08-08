package com.pritaranyu.plsystem.controller;

import com.pritaranyu.plsystem.pojo.Publish;
import com.pritaranyu.plsystem.pojo.Result;
import com.pritaranyu.plsystem.service.PublishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("invigilation")
public class PublishController {
    @Autowired
    private PublishService publishService;
    @PostMapping("/publish")
    public Result<List<Publish>> publishmessage(){
        List<Publish> pb = publishService.list();
        return Result.success(pb);



    }


}
