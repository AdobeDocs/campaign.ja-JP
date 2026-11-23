---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '33'
ht-degree: 18%
---
# パラメーター

クエリパラメーターを返します。

```text
parameters
```

## 備考

parameters プロパティは、クエリのパラメーターと一致するプロパティを持つオブジェクトを返します。 例：

```javascript
var parameters = request.parameters
for(var name in parameters)
{
var value = parameters[name]
document.write(name + " : " + value + "<br>")
}
```

## 機能

**クラスのプロパティ：** [HttpServletRequest](c-httpservletrequest.md)

**読み取り専用：**

はい

**次の場所で利用できます：**

* JSSP
* Web アプリ
