package com.pritaranyu.plsystem.mapper;

import com.pritaranyu.plsystem.pojo.Publish;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;


import java.util.List;

@Mapper
public interface PublishMapper {
    //修改发布状态
    @Update("UPDATE test SET status='已发布'")
    void updateStatus();
    //查询所有
    @Select("select * from test")
    List<Publish> publish();
}
