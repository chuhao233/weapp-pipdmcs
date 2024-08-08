package com.pritaranyu.plsystem.service;

import com.pritaranyu.plsystem.pojo.Publish;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface PublishService {
    //发布监考信息
    List<Publish> list();
}
