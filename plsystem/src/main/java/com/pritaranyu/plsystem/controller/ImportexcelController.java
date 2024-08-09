package com.pritaranyu.plsystem.controller;


import cn.hutool.poi.excel.ExcelReader;
import cn.hutool.poi.excel.ExcelUtil;
import com.pritaranyu.plsystem.mapper.ImportexcelMapper;
import com.pritaranyu.plsystem.pojo.Publish;
import com.pritaranyu.plsystem.service.ImportexcelService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("invigilation")
@CrossOrigin(origins = "*")
public class ImportexcelController {

    @Resource
    private ImportexcelMapper importexcelMapper;
    @PostMapping("/import")
    public void imp(@RequestBody MultipartFile file) throws Exception {
        InputStream inputStream = file.getInputStream();
        ExcelReader reader = ExcelUtil.getReader(inputStream);
        List<Publish> publish1 = reader.readAll(Publish.class);
        importexcelMapper.batchInsert(publish1);
    }
}
