package com.pritaranyu.plsystem.controller;

import com.pritaranyu.plsystem.pojo.Publish;
import com.pritaranyu.plsystem.pojo.Result;
import com.pritaranyu.plsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("invigilation")
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping("/list")
    public Result<List<Publish>> SearchMessage(){
        List<Publish> sm = userService.search();//普通用户查询已发布的监考信息
        return Result.success(sm);
    }

}
