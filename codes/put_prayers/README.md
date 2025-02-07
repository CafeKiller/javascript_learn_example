# put_prayers



## 项目结构
```text

```

## 数据库设计

### 管理员表 (pp_admins)

|   字段名   | 数据类型 | 长度 | 必填 | 默认值 |    字段说明    |          备注          |
| :--------: | :------: | :--: | :--: | :----: | :------------: | :--------------------: |
|    aid     |   int    |  10  |  是  |        |    管理员id    |       主键，自增       |
| admin_name | varchar  |  64  |  是  |        | 管理员账户名称 |        唯一校验        |
|  account   | varchar  |  64  |  是  |        |   管理员账户   |        用于登录        |
|  password  | varchar  |  64  |  是  |        |   管理员密码   |     使用 hash 加密     |
|   email    | varchar  |  64  |  是  |        |   管理员邮箱   |                        |
|   authority    |   int    |  10  |  是  |   1    | 管理员权限等级 | 1:增改 2:增改删 3:全部 |
| histories  |   text   |      |  否  |        | 管理员操作历史 |      操作日志历史      |
| created_at | datetime |      |  是  |        |    创建时间    |        自动生成        |
| udpated_at | datetime |      |  是  |        |    更新时间    |        自动生成        |
| deleted_at | datetime |      |  否  |        |    删除时间    |                        |
| last_login | datetime |      |  否  |        |  最后登录时间  |                        |
|   is_del   |   int    |  10  |  是  |   否   |   删除标志位   |   0:未删除 1:已删除    |

### 普通用户表 (pp_users)

|       字段名        |   数据类型   | 长度  | 必填 |         默认值          |  字段说明  |          备注          |
|:----------------:| :------: |:---:| :--: |:--------------------:|:------:|:--------------------:|
|       uid        |   int    | 10  |  是  |                      |  用户id  |        主键，自增         |
|    user_name     | varchar  | 64  |  是  |                      |  用户昵称  |        可用于登录         |
|    user_cover    | varchar  | 255 |  是  | /static/user_def.png |  用户头像  |       格式为URL链接       |
|     account      | varchar  | 64  |  是  |                      |  用户账户  |        可用于登录         |
|     password     | varchar  | 64  |  是  |                      |  用户密码  |      使用 hash 加密      |
|      email       | varchar  | 64  |  否  |                      |  用户邮箱  |                      |
|      phone       | varchar  | 64  |  否  |                      | 用户手机号码 |                      |
|     address      | varchar  | 255 |  否  |                      | 用户居住地址 |                      |
|       pets       | varchar  | 64  |  是  |                      | 管理员邮箱  |                      |
| server_histories |   text   |     |  否  |                      | 用户服务历史 |     保存服务id 使用,分隔     |
| order_histories  |   text   |     |  否  |                      | 用户订单历史 |     保存订单id 使用,分隔     |
|      level       |   int    | 10  |  是  |          1           |  用户等级  | 0:测试会员 1:普通会员 2:高级会员 |
|       tags       |  varchar | 255 |  否  |          1           | 用户关键字  |      用户特征 使用,分隔      |
|    created_at    | datetime |     |  是  |                      |  创建时间  |         自动生成         |
|    udpated_at    | datetime |     |  是  |                      |  更新时间  |         自动生成         |
|    deleted_at    | datetime |     |  否  |                      |  删除时间  |                      |
|    last_login    | datetime |     |  否  |                      | 最后登录时间 |                      |
|      is_del      |   int    | 10  |  是  |          否           | 删除标志位  |     0:未删除 1:已删除      |

### 宠物信息表 (pp_puts)

|       字段名        |   数据类型   | 长度  | 必填 |         默认值          |  字段说明  |          备注          |
|:----------------:| :------: |:---:| :--: |:--------------------:|:------:|:--------------------:|
|       pid        |   int    | 10  |  是  |                      |  宠物id  |        主键，自增         |
|     put_type     | varchar  | 64  |  是  |                      |  宠物类型  |        可用于登录         |
|     put_name     | varchar  | 255 |  是  | /static/user_def.png |  宠物昵称  |       格式为URL链接       |
|     put_sex      | varchar  | 64  |  是  |                      |  宠物性别  |        可用于登录         |
|     put_age      | varchar  | 64  |  是  |                      |  宠物年龄  |      使用 hash 加密      |
|    put_image     | varchar  | 64  |  否  |                      |  宠物图片  |                      |
|     put_info     | varchar  | 64  |  否  |                      | 宠物详细信息 |                      |
|    created_at    | datetime |     |  是  |                      |  创建时间  |         自动生成         |
|    udpated_at    | datetime |     |  是  |                      |  更新时间  |         自动生成         |
|    deleted_at    | datetime |     |  否  |                      |  删除时间  |                      |
|    last_login    | datetime |     |  否  |                      | 最后登录时间 |                      |
|      is_del      |   int    | 10  |  是  |          否           | 删除标志位  |     0:未删除 1:已删除      |

### 纪念服务表 (pp_servers)

|     字段名     |   数据类型   | 长度  | 必填 | 默认值 |  字段说明  |     备注      |
|:-----------:|:--------:|:---:|:--:|:---:|:------:|:-----------:|
|     sid     |   int    | 10  | 是  |     | 服务订单id |    主键，自增    |
|   epitaph   | varchar  | 255 | 是  |     |  墓志铭   |  格式为URL链接   |
| server_type | varchar  | 64  | 是  |     |  服务类型  |    可用于登录    |
| server_time | varchar  | 64  | 否  |     | 服务执行时间 |             |
|   remark    | varchar  | 64  | 否  |     |   备注   |             |
| created_at  | datetime |     | 是  |     |  创建时间  |    自动生成     |
| udpated_at  | datetime |     | 是  |     |  更新时间  |    自动生成     |
| deleted_at  | datetime |     | 否  |     |  删除时间  |             |
| last_login  | datetime |     | 否  |     | 最后登录时间 |             |
|   is_del    |   int    | 10  | 是  |  否  | 删除标志位  | 0:未删除 1:已删除 |

### 财务记录表 (pp_finances)

|     字段名      |   数据类型   | 长度  | 必填 | 默认值 |  字段说明  |     备注      |
|:------------:|:--------:|:---:|:--:|:---:|:------:|:-----------:|
|     fid      |   int    | 10  | 是  |     | 财务记录id |    主键，自增    |
|    amount    | varchar  | 255 | 是  |     |  交易金额  |  格式为URL链接   |
|  deal_type   | varchar  | 64  | 是  |     |  交易类型  |    可用于登录    |
|  deal_time   | varchar  | 64  | 否  |     | 交易执行时间 |             |
|    remark    | varchar  | 64  | 否  |     |   备注   |             |
|  created_at  | datetime |     | 是  |     |  创建时间  |    自动生成     |
|  udpated_at  | datetime |     | 是  |     |  更新时间  |    自动生成     |
|  deleted_at  | datetime |     | 否  |     |  删除时间  |             |
|  last_login  | datetime |     | 否  |     | 最后登录时间 |             |
|    is_del    |   int    | 10  | 是  |  否  | 删除标志位  | 0:未删除 1:已删除 |

