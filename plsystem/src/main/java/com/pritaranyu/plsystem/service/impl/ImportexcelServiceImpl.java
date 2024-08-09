package com.pritaranyu.plsystem.service.impl;

import com.pritaranyu.plsystem.mapper.ImportexcelMapper;
import com.pritaranyu.plsystem.pojo.Publish;
import com.pritaranyu.plsystem.service.ImportexcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ImportexcelServiceImpl implements ImportexcelService {

    @Autowired
    private ImportexcelMapper importexcelMapper;
    public void batchInsert(List<Publish> publishss) {
          importexcelMapper.batchInsert(publishss);

    }
}
