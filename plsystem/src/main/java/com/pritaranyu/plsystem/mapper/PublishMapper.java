package com.pritaranyu.plsystem.mapper;

import com.pritaranyu.plsystem.pojo.Publish;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


import java.util.List;

@Mapper
public interface PublishMapper {
    //查询所有
    @Select("select * from test")
    List<Publish> publish();
}
