package com.pritaranyu.plsystem.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Result <T>{
    private Integer code;   //业务状态码  0-失败  1-成功
    private String msg;     //提示信息
    private T data;         //响应数据

    public static <E> Result<E> success(E data){
        return new Result<>(1,"success",data);}

    public static Result success(){
        return new Result(1,"success",null);}

    public static Result error(String msg){
        return new Result(0,msg,null);}
}
