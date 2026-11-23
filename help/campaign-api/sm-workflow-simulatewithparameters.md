---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '95'
ht-degree: 4%
---
# SimulateWithParameters

シミュレーションモードでワークフローを開始し、パラメーターを指定します。

```text
SimulateWithParameters ( String workflowId, XML parameters )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

インスタンスに渡す&#x200B;**パラメーター** パラメーター。 これらのパラメーターは、ワークフローのインスタンス変数になります。 この引数は、名前が変数である必要があり、属性のみを含めることができるXML要素です。 例：

```xml
<variables foo="abc" bar="def">
```

ワークフロー内のJavaScript スクリプトは、instance.vars オブジェクトからこれらの変数にアクセスできます。

```javascript
    var foo = instance.vars.foo   // "abc"
    var bar = instance.vars.bar   // "def"
            
```

## 戻り値

なし。

## 備考

コマンドは非同期的に実行され、メソッドの戻り後に直ちに影響を与えません。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
