# Young-beauty

## 项目

名称：稚美电商app

时间：2017-4-21 14：00

参与人员：孙勇华,刘天华,马慧,大王伟,小王伟,史文飞,王旭梅,刘旭辉,王磊

## 命名规范

    所有的img、js、css 文件 都以自己姓名缩写为前缀如 syh_index.css 
    多人开发同一个页面，css选择器请加自己姓名缩写前缀防止冲突
    图片，选择器 名称命名均采用类似 syh-logo.jpg  syh-nav方式命名
    注意： 统一采用下划线 hnz_index.css 
    注释问题 公共组件相关必须把注释标好
    开发过程中,请加好注释说明，方便后台人员套模板
    
## public文件夹结构

    /-----------------
    |
    |-- admin   登录注册界面 
    |-------- login登陆界面 register注册页面
    |
    |-- default 前台展示界面
    |-------- display展吧界面 home首页界面 ind个性化界面 initial闪屏页界面 person个人中心界面
    |
    |-----
 
## src文件夹结构

    /-----------------
    |
    |-- commponents 组件文件夹
    |
    |---- comment.js 公共组件
    |---- ***.js 个人组件添加
    |
    |-- css css样式 base.css 去除默认样式css cols.scss 适配视口scss 
    |
    |---- display 展吧css样式放置文件夹
    |---- home 首页css样式放置文件夹
    |---- ind 个性化css样式放置文件夹
    |---- initial 闪屏css样式放置文件夹
    |---- login 登陆css样式放置文件夹
    |---- person 个人中心css样式放置文件夹
    |---- register 注册css样式放置文件夹
    |
    |-- js 效果js文件夹 
    |
    |-- images 所有图片放置文件夹 
    |
    
## 任务分配
 
   ##### 孙勇华: 登录注册 展吧
   ##### 小王伟 马慧 刘天华 史文飞: 首页 支付流程
   ##### 王旭梅 王磊: 个性化界面