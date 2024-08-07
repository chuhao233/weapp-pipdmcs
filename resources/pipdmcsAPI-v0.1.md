# 个性化信息发布与需求匹配定制系统-V0.1

## 1.监考信息管理

### 1.1 上传监考信息表格

#### 1.1.1 基本信息

> 请求路径：/invigilation/upload
>
> 请求方式：POST
>
> 接口描述：管理员通过上传.xlsx格式的表格来将监考信息存入数据库并发布信息。



#### 1.1.2 请求参数

参数格式：multipart/form-data

参数说明：

| 参数名 | 参数类型 | 是否必须 | 示例 | 备注         |
| ------ | -------- | -------- | ---- | ------------ |
| file   | file     | 是       |      | 监考信息表格 |



#### 1.1.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| ------ | ------ | -------- | ------------------------------ |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": null
}
```





### 1.2 发布监考信息

#### 1.2.1基本信息

> 请求路径：/invigilation/publish
>
> 请求方式：POST
>
> 接口描述：管理员手动发布监考信息。



#### 1.2.2 请求参数

参数格式：application/json

参数说明：

| 参数名                 | 类型      | 是否必须 | 备注                               |
| ---------------------- | --------- | -------- | ---------------------------------- |
| invigilateId           | number    | 是       | 监考信息ID                         |
| examDate               | string    | 是       | 考试日期（格式：YYYY-MM-DD）       |
| session                | number    | 是       | 考试场次第x场                      |
| week                   | number    | 是       | 第x周                              |
| dayOfWeek              | string    | 是       | 星期几                             |
| startTime              | string    | 是       | 开始时间（格式：HH:mm）            |
| endTime                | string    | 是       | 结束时间（格式：HH:mm）            |
| campus                 | string    | 是       | 校区                               |
| building               | string    | 是       | 考试楼                             |
| room                   | string    | 是       | 考场                               |
| seatCount              | number    | 是       | 座位数                             |
| studentCount           | number    | 是       | 考生人数                           |
| courseCode             | string    | 是       | 课程代码                           |
| courseName             | string    | 是       | 课程名称                           |
| department             | string    | 是       | 开课部门                           |
| teacherName            | string    | 是       | 授课教师                           |
| mainInvigilator        | string    | 是       | 主监考员，若没有则填暂无           |
| deputyInvigilator      | string [] | 是       | 副监考员，若没有则填暂无           |
| mainInvigilatorCount   | string    | 是       | 主监考员人数（格式：0/1、1/1）     |
| deputyInvigilatorCount | string    | 是       | 副监考员人数（格式如上）           |
| status                 | string    | 是       | 状态（如：待发布、已发布、已结束） |



#### 1.2.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "invigilateId": 1,
    "examDate": "2024-06-12",
    "session": 2,
    "week": 16,
    "dayOfWeek": "星期三",
    "startTime": "10:05",
    "endTime": "12:05",
    "campus": "校本部",
    "building": "三教",
    "room": "三教103",
    "seatCount": 70,
    "studentCount": 55,
    "courseCode": "100730C005",
    "courseName": "区块链与数字货币基础",
    "department": "经济管理学院",
    "teacherName": "廖宗湖",
    "mainInvigilator": "廖宗湖",
    "deputylnvigilator": ["暂无"],
    "maininvigilatorCount": "1/1",
    "deputyInvigilatorCount": "0/1",
    "status": "已发布"
  }
}
```





### 1.3 查询监考信息

#### 1.3.1 普通用户查询监考信息

##### 1.3.1.1 基本信息

> 请求路径：/invigilation/list
>
> 请求方式：GET
>
> 接口描述：普通用户条件查询监考信息列表，只能查看到已发布的监考信息。



##### 1.3.1.2 请求参数

参数格式：queryString

参数说明：

| 参数名      | 是否必须 | 示例                 | 备注                           |
| :---------- | :------- | :------------------- | :----------------------------- |
| examDate    | 否       | 2024-06-12           | 考试日期（格式：YYYY-MM-DD）   |
| session     | 否       | 2                    | 考试场次第x场                  |
| week        | 否       | 16                   | 第x周                          |
| dayOfWeek   | 否       | 星期三               | 星期几                         |
| building    | 否       | 三教                 | 考试楼                         |
| courseCode  | 否       | 100730C005           | 课程代码                       |
| courseName  | 否       | 区块链与数字货币基础 | 课程名称                       |
| department  | 否       | 经济管理学院         | 开课部门                       |
| teacherName | 否       | 廖宗湖               | 授课教师                       |
| page        | 是       | 1                    | 分页查询的页码，默认为1        |
| pageSize    | 是       | 10                   | 分页查询的每页记录数，默认为10 |

请求数据样例：

```shell
/invigilation/list?week=16&dayOfWeek=星期三&page=1&pageSize=10
```



##### 1.3.1.3 响应数据

参数格式：application/json

参数说明：

| 名称                       | 类型      | 是否必须 | 备注                               |
| :------------------------- | :-------- | :------- | :--------------------------------- |
| code                       | number    | 必须     | 响应码, 1 成功 , 0 失败            |
| msg                        | string    | 非必须   | 提示信息                           |
| data                       | object    | 必须     | 返回的数据                         |
| - total                    | number    | 必须     | 总记录数                           |
| - rows                     | object [] | 必须     | 数据列表                           |
| --- invigilateId           | number    | 非必须   | 监考信息ID                         |
| --- examDate               | string    | 非必须   | 考试日期（格式：YYYY-MM-DD）       |
| --- session                | number    | 非必须   | 考试场次第x场                      |
| --- week                   | number    | 非必须   | 第x周                              |
| --- dayOfWeek              | string    | 非必须   | 星期几                             |
| --- startTime              | string    | 非必须   | 开始时间（格式：HH:mm）            |
| --- endTime                | string    | 非必须   | 结束时间（格式：HH:mm）            |
| --- campus                 | string    | 非必须   | 校区                               |
| --- building               | string    | 非必须   | 考试楼                             |
| --- room                   | string    | 非必须   | 考场                               |
| --- seatCount              | number    | 非必须   | 座位数                             |
| --- studentCount           | number    | 非必须   | 考生人数                           |
| --- courseCode             | string    | 非必须   | 课程代码                           |
| --- courseName             | string    | 非必须   | 课程名称                           |
| --- department             | string    | 非必须   | 开课部门                           |
| --- teacherName            | string    | 非必须   | 授课教师                           |
| --- mainInvigilator        | string    | 非必须   | 主监考员，若没有则填暂无           |
| --- deputyInvigilator      | string [] | 非必须   | 副监考员，若没有则填暂无           |
| --- mainInvigilatorCount   | string    | 非必须   | 主监考员人数（格式：0/1、1/1）     |
| --- deputyInvigilatorCount | string    | 非必须   | 副监考员人数（格式如上）           |
| --- status                 | string    | 非必须   | 状态（如：待发布、已发布、已结束） |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "total": 3,
    "rows": [
      {
        "invigilateId": 1,
    	"examDate": "2024-06-12",
    	"session": 2,
    	"week": 16,
    	"dayOfWeek": "星期三",
    	"startTime": "10:05",
    	"endTime": "12:05",
    	"campus": "校本部",
    	"building": "三教",
    	"room": "三教103",
    	"seatCount": 70,
    	"studentCount": 55,
    	"courseCode": "100730C005",
    	"courseName": "区块链与数字货币基础",
    	"department": "经济管理学院",
    	"teacherName": "廖宗湖",
    	"mainInvigilator": "廖宗湖",
    	"deputylnvigilator": ["暂无"],
    	"maininvigilatorCount": "1/1",
    	"deputyInvigilatorCount": "0/1",
    	"status": "已发布"
      },
      {
        "id": 2,
    	"examDate": "2024-06-13",
    	"session": 2,
    	"week": 16,
    	"dayOfWeek": "星期四",
    	"startTime": "10:05",
    	"endTime": "12:05",
    	"campus": "校本部",
    	"building": "三教",
    	"room": "三教105",
    	"seatCount": 96,
    	"studentCount": 53,
    	"courseCode": "100925G110",
    	"courseName": "雅思英语",
    	"department": "外国语学院",
    	"teacherName": "刘葆",
    	"mainInvigilator": "刘葆",
    	"deputylnvigilator": ["暂无"],
    	"maininvigilatorCount": "1/1",
    	"deputyInvigilatorCount": "0/2",
    	"status": "已发布"
      }
    ]
  }
}
```



#### 1.3.2 管理员查询监考信息

##### 1.3.2.1 基本信息

> 请求路径：/invigilation/adminlist
>
> 请求方式：GET
>
> 接口描述：管理员条件查询监考信息列表，可以查看所有状态的监考信息。



##### 1.3.2.2 请求参数

参数格式：queryString

参数说明：

| 参数名      | 是否必须 | 示例                 | 备注                               |
| :---------- | :------- | :------------------- | :--------------------------------- |
| examDate    | 否       | 2024-06-12           | 考试日期（格式：YYYY-MM-DD）       |
| session     | 否       | 2                    | 考试场次第x场                      |
| week        | 否       | 16                   | 第x周                              |
| dayOfWeek   | 否       | 星期三               | 星期几                             |
| building    | 否       | 三教                 | 考试楼                             |
| courseCode  | 否       | 100730C005           | 课程代码                           |
| courseName  | 否       | 区块链与数字货币基础 | 课程名称                           |
| department  | 否       | 经济管理学院         | 开课部门                           |
| teacherName | 否       | 廖宗湖               | 授课教师                           |
| status      | 否       | 已发布               | 状态（如：待发布、已发布、已结束） |
| page        | 是       | 1                    | 分页查询的页码，默认为1            |
| pageSize    | 是       | 10                   | 分页查询的每页记录数，默认为10     |

##### 1.3.2.3 响应数据

参数格式：application/json

参数说明：

| 名称                       | 类型      | 是否必须 | 备注                               |
| :------------------------- | :-------- | :------- | :--------------------------------- |
| code                       | number    | 必须     | 响应码, 1 成功 , 0 失败            |
| msg                        | string    | 非必须   | 提示信息                           |
| data                       | object    | 必须     | 返回的数据                         |
| - total                    | number    | 必须     | 总记录数                           |
| - rows                     | object [] | 必须     | 数据列表                           |
| --- invigilateId           | number    | 非必须   | 监考信息ID                         |
| --- examDate               | string    | 非必须   | 考试日期（格式：YYYY-MM-DD）       |
| --- session                | number    | 非必须   | 考试场次第x场                      |
| --- week                   | number    | 非必须   | 第x周                              |
| --- dayOfWeek              | string    | 非必须   | 星期几                             |
| --- startTime              | string    | 非必须   | 开始时间（格式：HH:mm）            |
| --- endTime                | string    | 非必须   | 结束时间（格式：HH:mm）            |
| --- campus                 | string    | 非必须   | 校区                               |
| --- building               | string    | 非必须   | 考试楼                             |
| --- room                   | string    | 非必须   | 考场                               |
| --- seatCount              | number    | 非必须   | 座位数                             |
| --- studentCount           | number    | 非必须   | 考生人数                           |
| --- courseCode             | string    | 非必须   | 课程代码                           |
| --- courseName             | string    | 非必须   | 课程名称                           |
| --- department             | string    | 非必须   | 开课部门                           |
| --- teacherName            | string    | 非必须   | 授课教师                           |
| --- mainInvigilator        | string    | 非必须   | 主监考员，若没有则填暂无           |
| --- deputyInvigilator      | string [] | 非必须   | 副监考员，若没有则填暂无           |
| --- mainInvigilatorCount   | string    | 非必须   | 主监考员人数（格式：0/1、1/1）     |
| --- deputyInvigilatorCount | string    | 非必须   | 副监考员人数（格式如上）           |
| --- status                 | string    | 非必须   | 状态（如：待发布、已发布、已结束） |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "total": 3,
    "rows": [
      {
        "invigilateId": 1,
    	"examDate": "2024-06-12",
    	"session": 2,
    	"week": 16,
    	"dayOfWeek": "星期三",
    	"startTime": "10:05",
    	"endTime": "12:05",
    	"campus": "校本部",
    	"building": "三教",
    	"room": "三教103",
    	"seatCount": 70,
    	"studentCount": 55,
    	"courseCode": "100730C005",
    	"courseName": "区块链与数字货币基础",
    	"department": "经济管理学院",
    	"teacherName": "廖宗湖",
    	"mainInvigilator": "廖宗湖",
    	"deputylnvigilator": ["暂无"],
    	"maininvigilatorCount": "1/1",
    	"deputyInvigilatorCount": "0/1",
    	"status": "已发布"
      },
      {
        "invigilateId": 2,
    	"examDate": "2024-06-13",
    	"session": 2,
    	"week": 16,
    	"dayOfWeek": "星期四",
    	"startTime": "10:05",
    	"endTime": "12:05",
    	"campus": "校本部",
    	"building": "三教",
    	"room": "三教105",
    	"seatCount": 96,
    	"studentCount": 53,
    	"courseCode": "100925G110",
    	"courseName": "雅思英语",
    	"department": "外国语学院",
    	"teacherName": "刘葆",
    	"mainInvigilator": "刘葆",
    	"deputylnvigilator": ["暂无"],
    	"maininvigilatorCount": "1/1",
    	"deputyInvigilatorCount": "0/2",
    	"status": "待发布"
      }
    ]
  }
}
```





### 1.4 修改监考信息

#### 1.4.1 基本信息

> 请求路径：/invigilation/{invigilateId}
>
> 请求方式：PUT
>
> 接口描述：管理员修改指定ID的监考信息。



#### 1.4.2 请求参数

参数格式：application/json

参数说明：

| 参数名                 | 类型      | 是否必须 | 备注                               |
| ---------------------- | --------- | -------- | ---------------------------------- |
| invigilateId           | number    | 是       | 监考信息ID                         |
| examDate               | string    | 否       | 考试日期（格式：YYYY-MM-DD）       |
| session                | number    | 否       | 考试场次第x场                      |
| week                   | number    | 否       | 第x周                              |
| dayOfWeek              | string    | 否       | 星期几                             |
| startTime              | string    | 否       | 开始时间（格式：HH:mm）            |
| endTime                | string    | 否       | 结束时间（格式：HH:mm）            |
| campus                 | string    | 否       | 校区                               |
| building               | string    | 否       | 考试楼                             |
| room                   | string    | 否       | 考场                               |
| seatCount              | number    | 否       | 座位数                             |
| studentCount           | number    | 否       | 考生人数                           |
| courseCode             | string    | 否       | 课程代码                           |
| courseName             | string    | 否       | 课程名称                           |
| department             | string    | 否       | 开课部门                           |
| teacherName            | string    | 否       | 授课教师                           |
| mainInvigilator        | string    | 否       | 主监考员，若没有则填暂无           |
| deputyInvigilator      | string [] | 否       | 副监考员，若没有则填暂无           |
| mainInvigilatorCount   | string    | 否       | 主监考员人数（格式：0/1、1/1）     |
| deputyInvigilatorCount | string    | 否       | 副监考员人数（格式如上）           |
| status                 | string    | 否       | 状态（如：待发布、已发布、已结束） |



#### 1.4.3 响应数据

参数格式：application/json

参数说明（与1.2节相同）：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例（与1.2.3节相同）：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "invigilateId": 1,
    "examDate": "2024-06-12",
    "session": 2,
    "week": 16,
    "dayOfWeek": "星期三",
    "startTime": "10:05",
    "endTime": "12:05",
    "campus": "校本部",
    "building": "三教",
    "room": "三教103",
    "seatCount": 70,
    "studentCount": 55,
    "courseCode": "100730C005",
    "courseName": "区块链与数字货币基础",
    "department": "经济管理学院",
    "teacherName": "廖宗湖",
    "mainInvigilator": "廖宗湖",
    "deputylnvigilator": ["暂无"],
    "maininvigilatorCount": "1/1",
    "deputyInvigilatorCount": "0/1",
    "status": "已发布"
  }
}
```





### 1.5 删除监考信息

#### 1.5.1 基本信息

> 请求路径：/invigilation/{invigilateIds}
>
> 请求方式：DELETE
>
> 接口描述：管理员批量删除指定ID的监考信息。



#### 1.5.2 请求参数

参数格式：路径参数

参数说明：

| 参数名        | 类型       | 示例  | 是否必须 | 备注             |
| ------------- | ---------- | ----- | -------- | ---------------- |
| invigilateIds | 数组 array | 1,2,3 | 必须     | 监考信息的id数组 |



#### 1.5.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| ------ | ------ | -------- | ------------------------------ |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
    "code":1,
    "msg":"success",
    "data":null
}
```





### 1.6 用户报名监考员

#### 1.6.1 用户报名为主监考员

##### 1.6.1.1 基本信息

> 请求路径：/invigilation/signup/main
>
> 请求方式：POST
>
> 接口描述：用户报名成为主监考员。



##### 1.6.1.2 请求参数

参数格式：application/json

参数说明：

| 名称         | 类型   | 是否必须 | 备注       |
| :----------- | :----- | :------- | :--------- |
| userId       | number | 是       | 用户ID     |
| invigilateId | number | 是       | 监考信息ID |



##### 1.6.1.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": null
}
```



#### 1.6.2 用户报名为副监考员

##### 1.6.2.1 基本信息

> 请求路径：/invigilation/signup/deputy
>
> 请求方式：POST
>
> 接口描述：用户报名成为副监考员。



##### 1.6.2.2 请求参数

参数格式：application/json

参数说明：

| 名称         | 类型   | 是否必须 | 备注       |
| :----------- | :----- | :------- | :--------- |
| userId       | number | 是       | 用户ID     |
| invigilateId | number | 是       | 监考信息ID |



##### 1.6.2.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": null
}
```





### 1.7 查询用户报名状态

#### 1.7.1 基本信息

> 请求路径：/invigilation/signup/status
>
> 请求方式：GET
>
> 接口描述：用户点击单个监考信息查询自己该监考的报名状态。



#### 1.7.2 请求参数

参数格式：queryString

参数说明：

| 参数名称 | 是否必须 | 示例 | 备注   |
| :------- | :------- | :--- | :----- |
| userId   | 是       | 123  | 用户ID |



#### 1.7.3 响应数据

参数格式：application/json

参数说明：

| 类型     | 是否必须 | 备注   |                                                              |
| :------- | :------- | :----- | ------------------------------------------------------------ |
| code     | number   | 必须   | 响应码                                                       |
| msg      | string   | 非必须 | 提示信息                                                     |
| data     | object   | 必须   | 返回的数据                                                   |
| - status | string   | 必须   | 报名状态，如"已报名主监考"、"已报名副监考"、"未报名"、“已通过主监考报名”、“已通过副监考报名” |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "status": "已报名主监考"
  }
}
```





### 1.8 管理员审核报名

#### 1.8.1 批量审核用户报名为主监考员

##### 1.8.1.1 基本信息

> 请求路径：/invigilation/review/main/{signupIds}
>
> 请求方式：PUT
>
> 接口描述：管理员审核用户报名为主监考员的请求。



##### 1.8.1.2 请求参数

参数格式：application/json

参数说明：

| 名称           | 类型       | 是否必须 | 备注                              |
| :------------- | :--------- | :------- | :-------------------------------- |
| signupIds      | 数组 array | 是       | 报名记录ID                        |
| approvalStatus | bool       | 是       | 审核状态，true为批准，false为拒绝 |



##### 1.8.1.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": null
}
```



#### 1.8.2 批量审核用户报名为副监考员

##### 1.8.2.1 基本信息

> 请求路径：/invigilation/review/deputy/{signupIds}
>
> 请求方式：PUT
>
> 接口描述：管理员审核用户报名为副监考员的请求。



##### 1.8.2.2 请求参数

参数格式：application/json

参数说明：

| 名称           | 类型       | 是否必须 | 备注                              |
| :------------- | :--------- | :------- | :-------------------------------- |
| signupIds      | 数组 array | 是       | 报名记录ID                        |
| approvalStatus | bool       | 是       | 审核状态，true为批准，false为拒绝 |



##### 1.8.2.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": null
}
```





### 1.9 管理员获取监考员的报名列表

#### 1.9.1 获取主监考员报名列表

##### 1.9.1.1 基本信息

> 请求路径：/invigilation/signup/main/list
>
> 请求方式：GET
>
> 接口描述：获取所有报名为主监考员的用户列表。



##### 1.9.1.2 请求参数

参数格式：queryString

参数说明：

| 参数名   | 是否必须 | 示例 | 备注                           |
| :------- | :------- | :--- | :----------------------------- |
| page     | 是       | 1    | 分页查询的页码，默认为1        |
| pageSize | 是       | 10   | 分页查询的每页记录数，默认为10 |



##### 1.9.1.3 响应数据

参数格式：application/json

参数说明：

| 名称             | 类型      | 是否必须 | 备注       |
| :--------------- | :-------- | :------- | :--------- |
| code             | number    | 必须     | 响应码     |
| msg              | string    | 非必须   | 提示信息   |
| data             | object    | 必须     | 返回的数据 |
| - total          | number    | 必须     | 总记录数   |
| - rows           | object [] | 必须     | 用户列表   |
| --- signupId     | number    | 非必须   | 报名记录ID |
| --- userId       | number    | 非必须   | 用户ID     |
| --- invigilateId | number    | 非必须   | 监考信息ID |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "total": 2,
    "rows": [
      {
        "signupId": 1,
        "userId": 123,
        "invigilateId": 1,
        // ... 其他用户信息
      },
      // ... 其他用户信息
    ]
  }
}
```



#### 1.9.2 获取副监考员报名列表

##### 1.9.2.1 基本信息

> 请求路径：/invigilation/signup/deputy/list
>
> 请求方式：GET
>
> 接口描述：获取所有报名为副监考员的用户列表。



##### 1.9.2.2 请求参数

参数格式：queryString

参数说明：

| 参数名   | 是否必须 | 示例 | 备注                           |
| :------- | :------- | :--- | :----------------------------- |
| page     | 是       | 1    | 分页查询的页码，默认为1        |
| pageSize | 是       | 10   | 分页查询的每页记录数，默认为10 |



##### 1.9.2.3 响应数据

参数格式：application/json

参数说明：

| 名称             | 类型      | 是否必须 | 备注       |
| :--------------- | :-------- | :------- | :--------- |
| code             | number    | 必须     | 响应码     |
| msg              | string    | 非必须   | 提示信息   |
| data             | object    | 必须     | 返回的数据 |
| - total          | number    | 必须     | 总记录数   |
| - rows           | object [] | 必须     | 用户列表   |
| --- signupId     | number    | 非必须   | 报名记录ID |
| --- userId       | number    | 非必须   | 用户ID     |
| --- invigilateId | number    | 非必须   | 监考信息ID |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "total": 2,
    "rows": [
      {
        "signupId": 1,
        "userId": 123,
        "invigilateId": 1,
        // ... 其他用户信息
      },
      // ... 其他用户信息
    ]
  }
}
```





## 2.用户管理

### 2.1 用户列表查询

#### 2.1.1 基本信息

> 请求路径：/users
>
> 请求方式：GET
>
> 接口描述：用于查询用户列表，可根据条件分页查询



#### 2.1.2 请求参数

参数格式：queryString

参数说明：

| 参数名称 | 是否必须 | 示例 | 备注                                       |
| -------- | -------- | ---- | ------------------------------------------ |
| username | 是       | 张   | 用户姓名                                   |
| page     | 是       | 1    | 分页查询的页码，如果未指定，默认为1        |
| pageSize | 是       | 10   | 分页查询的每页记录数，如果未指定，默认为10 |

请求数据样例：

```shell
/users?name=张&page=1&pageSize=10
```



#### 2.1.3 响应数据

参数格式：application/json

参数说明：

| 称           | 类型      | 是否必须 | 默认值 | 备注                    | 其他信息          |
| ------------ | --------- | -------- | ------ | ----------------------- | ----------------- |
| code         | number    | 必须     |        | 响应码, 1 成功 , 0 失败 |                   |
| msg          | string    | 非必须   |        | 提示信息                |                   |
| data         | object    | 必须     |        | 返回的数据              |                   |
| \|- total    | number    | 必须     |        | 总记录数                |                   |
| \|- rows     | object [] | 必须     |        | 数据列表                | item 类型: object |
| \|- userId   | number    | 非必须   |        | 用户id                  |                   |
| \|- username | string    | 非必须   |        | 用户名                  |                   |
| \|- image    | string    | 非必须   |        | 头像                    |                   |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "total": 2,
    "rows": [
       {
        "userId": 1,
        "username": "金",
        "image": "https://pipdmcs.cn/2022-09-02-00-27-53B.jpg",
      },
      {
        "userId": 2,
        "username": "张",
        "image": "https://pipdmcs.cn/2022-09-02-00-27-53B.jpg",
      }
    ]
  }
}
```





### 2.2 根据ID查询用户

#### 2.2.1 基本信息

> 请求路径：/users/{userId}
>
> 请求方式：GET
>
> 接口描述：用于查询用户列表，可根据条件分页查询



#### 2.2.2 请求参数

参数格式：queryString

参数说明：

| 参数名称 | 是否必须 | 示例 | 备注   |
| -------- | -------- | ---- | ------ |
| userId   | 是       | 123  | 用户id |

请求数据样例：

```shell
/users/123
```



#### 2.2.3 响应数据

参数格式：application/json

参数说明：

| 称           | 类型      | 是否必须 | 默认值 | 备注                    | 其他信息          |
| ------------ | --------- | -------- | ------ | ----------------------- | ----------------- |
| code         | number    | 必须     |        | 响应码, 1 成功 , 0 失败 |                   |
| msg          | string    | 非必须   |        | 提示信息                |                   |
| data         | object    | 必须     |        | 返回的数据              |                   |
| \|- total    | number    | 必须     |        | 总记录数                |                   |
| \|- rows     | object [] | 必须     |        | 数据列表                | item 类型: object |
| \|- userId   | number    | 非必须   |        | 用户id                  |                   |
| \|- username | string    | 非必须   |        | 用户名                  |                   |
| \|- image    | string    | 非必须   |        | 头像                    |                   |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "total": 2,
    "rows": [
       {
        "userId": 1,
        "username": "金",
        "image": "https://pipdmcs.cn/2022-09-02-00-27-53B.jpg",
      },
      {
        "userId": 2,
        "username": "张",
        "image": "https://pipdmcs.cn/2022-09-02-00-27-53B.jpg",
      }
    ]
  }
}
```





### 2.3 修改用户

#### 2.3.1 基本信息

> 请求路径：/users
>
> 请求方式：PUT
>
> 接口描述：该接口用于修改用户的数据信息



#### 2.3.2 请求参数

参数格式：application/json

参数说明：

| 名称     | 类型   | 是否必须 | 备注   |
| -------- | ------ | -------- | ------ |
| userId   | number | 必须     | 用户id |
| username | string | 必须     | 用户名 |
| image    | string | 非必须   | 头像   |

请求数据样例：

```json
{
  "userId": 1,
  "username": "linpingzhi",
  "image": "https://pipdmcs.cn/2022-09-03-07-37-38222.jpg",
}
```



#### 2.3.3 响应数据

参数格式：application/json

参数说明：



| 参数名 | 类型   | 是否必须 | 备注                           |
| ------ | ------ | -------- | ------------------------------ |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
    "code":1,
    "msg":"success",
    "data":null
}
```



### 2.4 文件上传（头像图片）

#### 2.4.1 基本信息

> 请求路径：/users/uploadimage
>
> 请求方式：POST
>
> 接口描述：上传图片接口



#### 2.4.2 请求参数

参数格式：multipart/form-data

参数说明：

| 参数名称 | 参数类型 | 是否必须 | 示例 | 备注 |
| -------- | -------- | -------- | ---- | ---- |
| image    | file     | 是       |      |      |



#### 2.4.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| ------ | ------ | -------- | ------------------------------ |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据，上传图片的访问路径 |

响应数据样例：

```json
{
    "code": 1,
    "msg": "success",
    "data": "https://pipdmcs.cn/2022-09-02-00-27-0400.jpg"
}
```





### 2.5 用户申请成为管理员

#### 2.5.1 提交管理员申请

##### 2.5.1.1 基本信息

> 请求路径：/admin/application
>
> 请求方式：POST
>
> 接口描述：允许普通用户提交成为管理员的申请。



##### 2.5.1.2 请求参数

参数格式：application/json

参数说明：

| 参数名称 | 类型   | 是否必须 | 备注     |
| :------- | :----- | :------- | :------- |
| userId   | number | 是       | 用户ID   |
| reason   | string | 是       | 申请理由 |



##### 2.5.1.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "申请已提交",
  "data": null
}
```





#### 2.5.2 管理员审核申请

##### 2.5.2.1 基本信息

> 请求路径：/admin/application/review
>
> 请求方式：PUT
>
> 接口描述：管理员审核普通用户的管理员申请。



##### 2.5.2.2 请求参数

参数格式：application/json

参数说明：

| 参数名称      | 类型   | 是否必须 | 备注                              |
| :------------ | :----- | :------- | :-------------------------------- |
| applicationId | number | 是       | 申请记录ID                        |
| approve       | bool   | 是       | 审核结果，true为批准，false为拒绝 |
| comment       | string | 否       | 审核意见，可选                    |



##### 2.5.2.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "申请已批准",
  "data": null
}
```





#### 2.5.3 管理员获取申请列表

##### 2.5.3.1 基本信息

> 请求路径：/admin/application/list
>
> 请求方式：GET
>
> 接口描述：管理员获取所有待审核的管理员申请列表。



##### 2.5.3.2 请求参数

参数格式：queryString

参数说明：

| 参数名   | 是否必须 | 示例 | 备注                           |
| :------- | :------- | :--- | :----------------------------- |
| page     | 是       | 1    | 分页查询的页码，默认为1        |
| pageSize | 是       | 10   | 分页查询的每页记录数，默认为10 |



##### 2.5.3.3 响应数据

参数格式：application/json

参数说明：

| 名称              | 类型      | 是否必须 | 备注                                     |
| :---------------- | :-------- | :------- | :--------------------------------------- |
| code              | number    | 必须     | 响应码                                   |
| msg               | string    | 非必须   | 提示信息                                 |
| data              | object    | 必须     | 返回的数据                               |
| - total           | number    | 必须     | 总记录数                                 |
| - rows            | object [] | 必须     | 申请记录列表                             |
| --- applicationId | number    | 非必须   | 申请记录id                               |
| --- userId        | number    | 非必须   | 用户id                                   |
| --- username      | string    | 非必须   | 用户名                                   |
| --- reason        | string    | 非必须   | 申请理由                                 |
| --- status        | string    | 非必须   | 审核状态，如“待审核”、“已通过”、“已拒绝” |

响应数据样例：

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "total": 2,
    "rows": [
      {
        "applicationId": 1,
        "userId": 123,
        "username": "普通用户A",
        "reason": "希望为社区做出更多贡献",
        "status": "待审核"
      },
      // ...其他申请记录
    ]
  }
}
```





#### 2.5.4 管理员撤销审核

##### 2.5.4.1 基本信息

> 请求路径：/admin/application/revoke
>
> 请求方式：PUT
>
> 接口描述：管理员可以撤销之前对普通用户成为管理员的审核决定。



##### 2.5.4.2 请求参数

参数格式：application/json

参数说明：

| 参数名称      | 类型   | 是否必须 | 备注       |
| :------------ | :----- | :------- | :--------- |
| applicationId | number | 是       | 申请记录ID |
| reason        | string | 是       | 撤销理由   |



##### 2.5.4.3 响应数据

参数格式：application/json

参数说明：

| 参数名 | 类型   | 是否必须 | 备注                           |
| :----- | :----- | :------- | :----------------------------- |
| code   | number | 必须     | 响应码，1 代表成功，0 代表失败 |
| msg    | string | 非必须   | 提示信息                       |
| data   | object | 非必须   | 返回的数据                     |

响应数据样例：

```json
{
  "code": 1,
  "msg": "审核已撤销",
  "data": null
}
```

