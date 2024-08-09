package com.pritaranyu.plsystem.service.impl;

import com.pritaranyu.plsystem.mapper.PublishMapper;
import com.pritaranyu.plsystem.pojo.Publish;
import com.pritaranyu.plsystem.service.PublishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Primary
public class PublishServiceImpl implements PublishService  {

    @Autowired
    private PublishMapper publishMapper;
    
    @Override
    public List<Publish> list(){


        return  publishMapper.publish();

    }

    @Override
    public void updateStatus() {
        publishMapper.updateStatus();
    }

}
