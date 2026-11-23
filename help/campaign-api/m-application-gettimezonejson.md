---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '179'
ht-degree: 7%
---
# getTimezoneJson

タイムゾーンのUNIX期間と比較して、UTC時間とその開始日との時間差のリストをJSON形式で表す文字列を返します。

```text
getTimezoneJson ( [timezone ])
```

## パラメーター

**timezone** UTCと比較した時間差のリストを返す必要があるタイムゾーンの名前。 各時間差は、次の開始日まで適用される開始日にリンクされます。 値が返されない場合は、デフォルトのオペレータータイムゾーンが使用されます。

## 戻り値

日付に基づいて適用する時間差のJSON表現である文字列を返します。 返されたJSON文字列は、{startDate, offset}組のテーブルで評価されます。 返される文字列の形式は次のとおりです。

```javascript
[
  {"startDate" : -1855958901000, "offset" : 0},
  {"startDate" : -1689814800000, "offset" : 3600000}
]
```

* startDateは、失効が適用されるPosix時刻です。
* offsetは、UTCとの時間差のミリ秒単位の値です。 例えば、UTC+02:00は7200000に等しい。

## 備考

getTimezoneJsonは、アプリケーションインスタンスを介して呼び出されます。

```javascript
var tzList = eval(application.getTimezoneJson());
```

## 機能

**クラスのメソッド：** [ アプリケーション ](c-application.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
