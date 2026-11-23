---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '116'
ht-degree: 12%
---
# setOption

オプションテーブルのオプションの値を変更します。

```text
setOption (name, value, description )
```

## パラメーター

**name** オプションの名前。

**value** オプションの値。

**description**&#x200B;説明の値（オプション）。

## 戻り値

なし。

## 備考

データタイプは次のとおりです。

* テキスト，
* 整数，
* 浮動小数点，
* 日付+時間，
* longtext

longText型と整数型はAPIから作成できないことに注意してください。

これらの2つのタイプの場合、最初にコンソールからオプションを作成する必要があり、次にsetOption APIを使用して値を管理できます。

**例：**

```javascript
               //create option of type Date+Time'
               var ourDate = getCurrentDate();
               setOption("testOptionDateTime",ourDate,"option of type Date+Time");
                              
               //create option of type Floating point'
               setOption("testOptionFloat",1,"option of type Floating point");
               
               //create option of type Text'
               setOption("testOptionText","I am a text","option of type Text");               
           
```

説明を削除する場合は、空の説明（setOption （name,value,&quot;））でAPIを呼び出す必要があります。

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
