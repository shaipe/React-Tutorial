平常开发中常遇到的问题及解决方案
---

### 1. 在Render中数据更新界面展示不更新

    Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。[相关教程](https://react.docschina.org/docs/lists-and-keys.html)

```js
    data.map((item,index)=>{
        // 此处的key非常关键,如果data的什已经变了,但是key对应的index不变的时候,值变了界面也不会有变化,此处的key最好用id来作标识
        return <div key={index}>{item}</div>
    })
```