---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '120'
ht-degree: 3%
---
# スポーン

テンプレートからワークフローインスタンスを作成し、パッチを適用してから、このワークフローを開始します。

```text
Number instanceId = Spawn ( String workflowId, XML patch )
```

## パラメーター

**workflowId** ワークフローテンプレートの識別子または内部名。

**patch** インスタンスを実行する前にモデルと結合する必要があるXML要素。 例：

```xml
    <workflow>
      <activities>
        <extern name="notepad">
          <additionnalArgs><![CDATA[c:\xxx.txt]]>
          </additionnalArgs>
        </extern>
      </activities>
    </workflow>
    
```

この例では、「メモ帳」アクティビティの引数を置き換えます。 このパッチを適用しない場合は、空の&lt;workflow/>要素または空の文字列を使用します。

## 戻り値

テンプレートから作成されたインスタンスの&#x200B;**instanceId**&#x200B;識別子。

## 備考

コマンドは非同期モードで実行され、メソッドの戻り後に即座に影響を与えません。 ワークフローは、呼び出し元のオペレーターのアカウントで開始されます。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
