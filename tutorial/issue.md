平常开发中常遇到的问题及解决方案
---

### 1. 在Render中数据更新界面展示不更新

    Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。[相关教程](https://react.docschina.org/docs/lists-and-keys.html)

#### react key概述

key的作用:  react中的key属性，它是一个特殊的属性，它是出现不是给开发者用的（例如你为一个组件设置key之后不能获取组件的这个key props），而是给react自己用的。

简单来说，react利用key来识别组件，它是一种身份标识标识，就像我们的身份证用来辨识一个人一样。每个key对应一个组件，相同的key react认为是同一个组件，这样后续相同的key对应组件都不会被创建。

```js
//this.state.users内容
this.state = {
 users: [{id:1,name: '张三'}, {id:2, name: '李四'}, {id: 2, name: "王五"}],
 ....//省略
}
render()
 return(
  <div>
    <h3>用户列表</h3>
    
    {
        /* 
        此处的key非常关键,如果data的什已经变了,但是key对应的index不变的时候,值变了界面也不会有变化,此处的key最好用id来作标识
        */
        this.state.users.map(u => <div key={u.id}>{u.id}:{u.name}</div>)
    }
  </div>
 )
);
```