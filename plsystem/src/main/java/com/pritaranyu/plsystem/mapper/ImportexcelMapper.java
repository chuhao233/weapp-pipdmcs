package com.pritaranyu.plsystem.mapper;

import com.pritaranyu.plsystem.pojo.Publish;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ImportexcelMapper {


    void batchInsert( List<Publish> list);


}
