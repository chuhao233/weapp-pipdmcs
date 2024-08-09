package com.pritaranyu.plsystem.service;

import com.pritaranyu.plsystem.mapper.ImportexcelMapper;
import com.pritaranyu.plsystem.pojo.Publish;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface ImportexcelService {

     void batchInsert(List<Publish> publishss);
}
