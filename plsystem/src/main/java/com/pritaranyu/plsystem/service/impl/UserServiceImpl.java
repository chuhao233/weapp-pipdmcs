package com.pritaranyu.plsystem.service.impl;

import com.pritaranyu.plsystem.mapper.UserMapper;
import com.pritaranyu.plsystem.pojo.Publish;
import com.pritaranyu.plsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Primary
public class UserServiceImpl implements UserService {


    @Autowired
    private UserMapper userMapper;

    @Override
    public List<Publish> search(){


        return userMapper.search();
    }

}
