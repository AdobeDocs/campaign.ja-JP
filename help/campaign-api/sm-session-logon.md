---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '173'
ht-degree: 3%
---
# ログオン

セッションを開始します

```text
[ String sessionToken, sessionInfo sessionInfo, String securityToken ] = Logon ( String login, String password, XML parameters )
```

## パラメーター

**ログイン** ユーザーアカウント

**password** ユーザーログインに関連付けられたパスワード

**パラメーター**&#x200B;接続設定

## 戻り値

**sessionToken** セッショントークン

**sessionInfo** セッション パラメーター

**securityToken** セキュリティトークン

## アカウント ロックアウト メカニズムの設定

アカウントのロックアウトメカニズムは、logon （） API内で使用できます。 指定された時間枠内に一定数の連続したログイン試行が失敗した後にログインが試行されるのを防ぎます。

ロックアウトメカニズムを設定するには、次の4つのオプションを使用できます。

* **XtkSecurity\_max\_Unsuccessul\_Attempts\_Allowed**：指定された期間内にキーをブロックしようとしましたが、失敗に成功しました。 デフォルト値は3です。
* **XtkSecurity\_Initial\_Ban\_Duration**：初めて禁止されるキーの期間。 デフォルトの期間は5分です。
* **XtkSecurity\_Max\_Ban\_Duration**: キーを禁止できる最大期間。
* **XtkSecurity\_Examine\_Window**：無効なキーを禁止するために失敗したログイン試行回数を追跡する時間ウィンドウ。 デフォルトの期間は10分です。

例えば、誰かが10分間に3回の試行を失敗した場合、そのキーは5分間ブロックされます。

## 機能

**スキーマ：** [xtk:session](s-xtk-session.md)

**静的：**

はい
