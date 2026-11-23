---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '368'
ht-degree: 74%
---
# セッション

アプリケーションサーバーへのセッション

## メソッド

| メソッド | 説明 |
| --- | --- |
| [ApplyDuplicateRules](sm-session-applyduplicaterules.md) | 複製設定 (デフォルト値を含む) を指定のドキュメントに適用します |
| [BearerTokenLogon](sm-session-bearertokenlogon.md) | 接続トークン |
| [ChangePassword](sm-session-changepassword.md) | 現在のパスワードを変更 |
| [DeleteCollection](sm-session-deletecollection.md) | 条件に基づいてエンティティのリストを削除 |
| [差分](sm-session-diff.md) | ドキュメントの現在のバージョンと最初のバージョンを返します。 |
| [複製](sm-session-duplicate.md) | ソースドキュメントから新しいドキュメントを作成します |
| [DuplicateTo](sm-session-duplicateto.md) | ソースドキュメントから指定のフォルダーに新規ドキュメントを複製 |
| [DuplicateWithMappingId](sm-session-duplicatewithmappingid.md) | ID マッピングを使用してソースドキュメントから新しいドキュメントを複製します |
| [暗号化](sm-session-encrypt.md) | インスタンスキーを使用して文字列を暗号化します。 |
| [EncryptServerPassword](sm-session-encryptserverpassword.md) | サーバーキーを使用して文字列を暗号化します。 |
| [FormatDataPolicy](sm-session-formatdatapolicy.md) | パラメーターとして渡されたデータポリシーに従って、文字列に変換を適用します。 失敗した場合、文字列は変更されません。 |
| [GetActiveApplicationMenus](sm-session-getactiveapplicationmenus.md) | 現在のログインについて有効なアプリケーションのメニューを含むドキュメントを返します |
| [GetCnxInfo](sm-session-getcnxinfo.md) | 現在の接続から情報を復元します。 |
| [GetDefaultEntity](sm-session-getdefaultentity.md) | デフォルト値を持つ空のエンティティを含むドキュメントを返します |
| [GetDirtyCacheEntities](sm-session-getdirtycacheentities.md) | ダーティキャッシュされたエンティティを返します |
| [GetEntityIfMoreRecent](sm-session-getentityifmorerecent.md) | エンティティの MD5 キーがパラメーターとして指定された MD5 キーと異なる場合に、そのエンティティを読み込みます |
| [GetImages](sm-session-getimages.md) | 画像のリストを読み込む |
| [GetNewIds](sm-session-getnewids.md) | データベースの内部キー識別子のリストを収集します。 |
| [GetNewIdsEx](sm-session-getnewidsex.md) | シーケンス名を指定した場合、データベースから一意の識別子のリストを取得します。 |
| [GetOption](sm-session-getoption.md) | データベースに保存されたオプションの値を返します。 |
| [GetPkList](sm-session-getpklist.md) | インスタンス識別子のリストを取得 |
| [GetServerTime](sm-session-getservertime.md) | サーバーの日時を返す |
| [GetUserInfo](sm-session-getuserinfo.md) | 現在のオペレーターについての情報 |
| [HashPassword](sm-session-hashpassword.md) | サーバーキーを使用してパスワードをハッシュ化します。 |
| [ImportCollection](sm-session-importcollection.md) | インポートを使用して、エンティティのリストを更新 |
| [KillSession](sm-session-killsession.md) | 指定されたセッションを閉じます |
| [読み込み](sm-session-load.md) | エンティティを読み込む |
| [LoadAsText](sm-session-loadastext.md) | エンティティのコンテンツをテキストとして取得します |
| [LoadIfExists](sm-session-loadifexists.md) | 存在する場合にエンティティを読み込み |
| [&#x200B; ログオフ &#x200B;](sm-session-logoff.md) | 現在のセッションを閉じる |
| [&#x200B; ログオン &#x200B;](sm-session-logon.md) | セッションを開始します |
| [NewInstance](sm-session-newinstance.md) | 新しいドキュメントの作成 (事前に初期化済み、未保存) |
| [削除](sm-session-remove.md) | エンティティを削除 |
| [ServerShutdown](sm-session-servershutdown.md) | サーバーのシャットダウンをリクエスト |
| [SetDefaultValues](sm-session-setdefaultvalues.md) | xpath に基づいてデフォルトで値を固定 |
| [SetDefaults](sm-session-setdefaults.md) | デフォルト値を設定 |
| [TestCnx](sm-session-testcnx.md) | 接続をテストします。 |
| [Write](sm-session-write.md) | エンティティを更新 |
| [WriteCollection](sm-session-writecollection.md) | エンティティのリストを更新 |

## 汎用メソッド

| メソッド | 説明 |
| --- | --- |
| [作成](f-create.md) | 特定のスキーマに対応する新しいエンティティを作成します。 |
| [load](f-load.md) | 特定のスキーマとキーに対応するエンティティを読み込んで返します。 |
| [保存](m-entity-save.md) | データベースにエンティティを保存します。 |
