package com.pritaranyu.plsystem.mapper;

import com.pritaranyu.plsystem.pojo.Publish;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select("SELECT * from test WHERE status = '已发布'")
    List<Publish> search();
}
