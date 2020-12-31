视频资源：
    https://www.bilibili.com/video/BV1fV411d7Ka?p=42

Redux:
    参考地址：
        https://www.redux.org.cn/
        http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
        https://www.redux.org.cn/docs/react-redux/

    基础知识点：
        React中，状态数据， state
        组件与组件之间可以传递数据：props, 回传事件.  // 见 src\components\coms 下 parent 与 child 组件
        兄弟之间组件传递数据： 共同的子元素或者父元素（大量的组件需要使用同一条数据）
        
    如果你不知道什么时候需要使用Redux，就是你不需要使用它，当你遇到解决不了的问题， 自然会想起Redux. 

    redux 与 react-redux 的区别
    redux: js的状态管理 createStore
    react-redux: 为了在react中容易地使用: connect provider

    1.安装
        npm i redux react-redux
        或者
        yarn add redux react-redux

    2.调试流程
        1.chrome浏览器需要安装插件： Redux devTools
        2.安装依赖, redux-devtools-extension
        npm i -D redux-devtools-extension 
        或者
        yarn add --dev redux-devtools-extension
        // 详情： https://github.com/zalmoxisus/redux-devtools-extension
