---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '137'
ht-degree: 16%
---
# parseTimeStamp

ISO 8601規格の簡略化バージョンに基づいて策定された日付を含む文字列を日付型オブジェクトに変換します。

```text
parseTimeStamp (aString)
```

## パラメーター

**文字列**&#x200B;日付は、ISO 8601形式の文字列です。

## 戻り値

日付セットをパラメーターとして一致させる日付タイプオブジェクト。

## 備考

構文は以下のようになります。

```javascript
              date
              time[time-zone]
            
```

または

```javascript
              dateTtime[time-zone]
            
```

日付には次の形式が必要です。

```javascript
YYYY-MM-DD
```

互換性の理由から、次の形式も使用できます。

```javascript
YYYY/MM/DD
```

時間には次の形式が必要です。

```javascript
hh:mm:ss
hh:mm:ss.nnn
```

タイムゾーンを指定する場合は、次の形式にする必要があります。

```javascript
Z
+hh:mm
-hh:mm
+hh
-hh
```

タイムゾーンが指定されていない場合、日付は現在のタイムゾーンに変換されます（コンテキストによって異なります）。 例：

```javascript
2005-03-02 00:00:00
2005-03-02
2005-03-02T14:32:26
2005-03-02T14:32:26.0000
2005-03-02T14:32:26.0000000+01:00
2005-03-02T14:32:26+01:00
2005-03-02T14:32:26Z
2005-03-02T14:32:26.0005Z
2005/03/02 14:32:25
```

日付形式が無効な場合は、例外が発生します。

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
