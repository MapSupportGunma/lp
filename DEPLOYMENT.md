# Render.comへのデプロイ手順

## 事前準備

### 1. Gmailアプリパスワードの取得

メール送信にGmailを使用する場合、アプリパスワードが必要です。

1. Googleアカウントにログイン
2. [https://myaccount.google.com/security](https://myaccount.google.com/security) にアクセス
3. 「2段階認証プロセス」を有効化（まだの場合）
4. 「アプリパスワード」を検索して設定
5. 「メール」「その他（カスタム名）」を選択
6. 「マップサポート群馬」などの名前を入力
7. 生成された16桁のパスワードをメモ

### 2. GitHubリポジトリの準備

```bash
cd c:\Users\rui\Downloads\meo_lp
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/meo-lp.git
git push -u origin main
```

## Render.comへのデプロイ

### 1. Render.comアカウント作成

[https://render.com/](https://render.com/) でアカウント作成（GitHubアカウント連携推奨）

### 2. 新しいWeb Serviceを作成

1. ダッシュボードで「New +」→「Web Service」をクリック
2. GitHubリポジトリを接続
3. 以下の設定を入力：

**基本設定:**
- **Name:** `map-support-gunma`
- **Region:** `Singapore` または `Oregon`（日本から最も近い）
- **Branch:** `main`
- **Root Directory:** （空欄のまま）
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

**プラン:**
- **Instance Type:** `Free` （無料プラン）

### 3. 環境変数の設定

「Environment」セクションで以下の環境変数を追加：

| Key | Value | 説明 |
|-----|-------|------|
| `SMTP_HOST` | `smtp.gmail.com` | SMTPサーバー |
| `SMTP_PORT` | `587` | SMTPポート |
| `SMTP_USER` | `your-email@gmail.com` | Gmailアドレス |
| `SMTP_PASS` | `xxxx xxxx xxxx xxxx` | Gmailアプリパスワード |
| `ADMIN_EMAIL` | `info@gunma-meo.com` | 受信用メールアドレス |
| `NODE_VERSION` | `18.18.0` | Node.jsバージョン |

### 4. デプロイ

「Create Web Service」ボタンをクリックすると、自動的にデプロイが開始されます。

デプロイ完了後、`https://YOUR-APP-NAME.onrender.com` でアクセス可能になります。

## ローカルでのテスト

デプロイ前にローカルでテストすることをおすすめします。

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env`ファイルを作成（`.env.example`をコピー）：

```bash
copy .env.example .env
```

`.env`ファイルを編集して、実際の値を設定：

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=info@gunma-meo.com
PORT=3000
```

### 3. サーバー起動

```bash
npm start
```

ブラウザで `http://localhost:3000` にアクセスして動作確認。

### 4. フォームのテスト

お問い合わせフォームから送信して、以下を確認：

- ✅ 管理者メールアドレスにメールが届く
- ✅ お客様に自動返信メールが送信される
- ✅ フォーム送信後に成功メッセージが表示される

## トラブルシューティング

### メールが送信されない場合

**Gmail利用時の確認事項:**
1. 2段階認証が有効になっているか
2. アプリパスワードが正しく設定されているか
3. 「安全性の低いアプリのアクセス」が許可されているか
4. Render.comの環境変数が正しく設定されているか

**ログの確認:**
Render.comのダッシュボードで「Logs」タブを開き、エラーメッセージを確認

### デプロイエラーの場合

1. `package.json`の`engines`フィールドを確認
2. `npm install`がローカルで正常に動作するか確認
3. Render.comのビルドログを確認

### 無料プランの制限

- **自動スリープ:** 15分間アクセスがないとスリープモードに入ります
- **起動時間:** スリープ状態から起動に30秒程度かかる場合があります
- **月間使用時間:** 750時間/月（約31日）まで無料

## カスタムドメインの設定（オプション）

独自ドメインを使用する場合：

1. Render.comのダッシュボードで「Settings」→「Custom Domain」
2. ドメインを入力（例: `meo.gunma-example.com`）
3. DNSレコードを設定：
   - タイプ: `CNAME`
   - 名前: `meo`
   - 値: `YOUR-APP-NAME.onrender.com`

## メンテナンス

### コードの更新

```bash
git add .
git commit -m "Update message"
git push origin main
```

Render.comが自動的に再デプロイを開始します。

### 環境変数の変更

Render.comのダッシュボードで環境変数を更新後、手動で再デプロイが必要です。

## セキュリティ

- `.env`ファイルは**絶対にGitにコミットしない**
- アプリパスワードは定期的に再生成することを推奨
- 管理者メールアドレスは定期的に確認

## サポート

問題が発生した場合は、以下を確認してください：

1. Render.comのログ
2. ブラウザのコンソール（F12キー）
3. メールサーバーの設定

---

**作成日:** 2026年3月5日
**対象サービス:** マップサポート群馬 ランディングページ
