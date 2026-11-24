---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '157'
ht-degree: 2%
---
# SpawnWithParametersEx

モデルからワークフローインスタンスを作成し、このインスタンスでメソッド [StartWithParameters](sm-workflow-startwithparameters.md)または[SimulateWithParameters](sm-workflow-simulatewithparameters.md)を呼び出します。

```text
Number instanceId = SpawnWithParametersEx ( String workflowId, Boolean simulation, XML parameters )
```

## パラメーター

**workflowId** ワークフローテンプレートの識別子または内部名。

**simulation** trueの場合、新しく作成されたワークフローはシミュレーションモードで開始されます。

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

テンプレートから作成されたインスタンスの&#x200B;**instanceId**&#x200B;識別子。

## 備考

コマンドは非同期モードで実行され、メソッドの戻り後に即座に影響を与えません。 ワークフローは、特定のログインがワークフローログインテーブルのテンプレートにリンクされている場合を除き、呼び出し元オペレーターアカウントで開始されます。この場合、このログインが使用されます。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
