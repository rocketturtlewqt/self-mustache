---
title: "自我实现的mustache模板引擎"
---

## 使用说明
- 将代码 git clone 到本地

```shell
git clone https://github.com/rocketturtlewqt/self-mustache.git
```

- 将dist文件夹下的bundle.js放到自己工程目录下，并通过script标签引入

- 具体可以参考以下html文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>test</title>
</head>
<body>
  <script src="/dist/bundle.js"></script>
  <script>
    const mustacheStr=`
      <ul>
        {{#arr}}
          <li>{{name}}</li>
          <li>{{age}}</li>
          <li>
            <h2>爱好</h2>
            <ol>
              {{#hobbies}}
                <li>{{.}}</li>
              {{/hobbies}}
            </ol>
          </li>
        {{/arr}}
      </ul>
      <ul>
        {{#school}}
            <li>{{name}}</li>
            <li>{{place}}</li>
            <ul>
              {{#department}}
                <li>{{name}}</li>
                <li>{{studentNum}}</li>
                <ol>
                  {{#trend}}
                    <li>{{.}}</li>
                  {{/trend}}
                </ol>
              {{/department}}
            </ul>
        {{/school}}
      </ul>
    `;
    
    const data={
      arr:[
        {
          name:'小王',
          age:21,
          hobbies:['游泳','篮球']
        },
        {
          name:'小红',
          age:22,
          hobbies:['乒乓球','电竞']
        }
      ],
      school:[
        {
          name:'浙江科技学院',
          place:'杭州',
          department:[
            {
              name:'信息与电子工程学院',
              studentNum:500,
              trend:[10,20,30]
            },
            {
              name:'土木学院',
              studentNum:200,
              trend:[20,30,40]
            }
          ]
        },
        {
          name:'浙江工业大学',
          place:'杭州',
          department:[
            {
              name:'信息与电子工程学院',
              studentNum:700,
              trend:[10,20,30]
            },
            {
              name:'土木学院',
              studentNum:200,
              trend:[20,30,40]
            }
          ]
        }
      ]
    }
    myMustache.render(mustacheStr,data);
  </script>
</body>
</html>
```

- 语法类似于官方mustache