---
source-git-commit: 77f8182ea5b1fda08206021a164b2e0ff827890a
workflow-type: tm+mt
source-wordcount: '72'
ht-degree: 22%
---
# getEnv

>[!WARNING]
>
>この関数は、オンプレミス環境で使用できます。

>[!NOTE]
>
>この関数を無効にするには、**XtkSecurity\_Disable\_GetSetEnv** オプションを&#x200B;**true**&#x200B;に渡します。

環境変数の値を返します。

```text
getEnv (name [, default ])
```

## パラメーター

**name**&#x200B;変数の名前。

**default**&#x200B;環境変数が見つからない場合に使用するデフォルト値。

## 戻り値

変数の値。

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* 配信メッセージ
* タイポロジルール
* 読み込み
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
