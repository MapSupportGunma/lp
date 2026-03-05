# マップサポート群馬 - ランディングページ

群馬県特化型MEO代行サービスの公式ランディングページ

## 🌟 特徴

- 明朝体ベースの洗練されたデザイン
- 完全レスポンシブ対応
- メール送信機能付きお問い合わせフォーム
- 固定ヘッダーとスムーススクロール
- 管理者・顧客双方への自動メール送信

## 📁 ファイル構成

```
meo_lp/
├── index.html          # フロントエンド（LP本体）
├── server.js           # バックエンド（Express + Nodemailer）
├── package.json        # Node.js依存関係
├── .env.example        # 環境変数のサンプル
├── .gitignore          # Git除外設定
├── DEPLOYMENT.md       # デプロイ手順書
└── README.md           # このファイル
```

## 🚀 クイックスタート

### ローカル環境での起動

1. **依存パッケージのインストール**
   ```bash
   npm install
   ```

2. **環境変数の設定**
   ```bash
   copy .env.example .env
   ```

   `.env`ファイルを編集して以下を設定：
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ADMIN_EMAIL=info@gunma-meo.com
   ```

3. **サーバー起動**
   ```bash
   npm start
   ```

4. **ブラウザでアクセス**
   ```
   http://localhost:3000
   ```

## 📧 メール送信の設定

### Gmailを使用する場合

1. Googleアカウントで2段階認証を有効化
2. アプリパスワードを生成
   - [https://myaccount.google.com/security](https://myaccount.google.com/security)
   - 「アプリパスワード」で16桁のパスワードを生成
3. `.env`ファイルに設定

### 送信されるメール

**管理者宛（info@gunma-meo.com）:**
- お問い合わせ内容の詳細
- 顧客情報（医院名、名前、電話、メール等）

**顧客宛（自動返信）:**
- お問い合わせ受付完了の通知
- 入力内容の確認
- 1営業日以内の返信案内

## 🌐 Render.comへのデプロイ

詳細は [DEPLOYMENT.md](DEPLOYMENT.md) を参照してください。

### 簡単な手順

1. GitHubにプッシュ
2. Render.comでWeb Service作成
3. 環境変数を設定
4. 自動デプロイ完了

## 🛠 技術スタック

**フロントエンド:**
- HTML5
- CSS3（カスタムデザイン）
- Vanilla JavaScript
- Google Fonts（Noto Serif JP / Noto Sans JP）

**バックエンド:**
- Node.js 18+
- Express.js
- Nodemailer
- dotenv

**ホスティング:**
- Render.com（推奨）

## 📱 レスポンシブ対応

- デスクトップ（960px以上）
- タブレット（768px - 959px）
- モバイル（767px以下）
- ハンバーガーメニュー（モバイル時）

## 🎨 デザイン仕様

- **メインフォント:** Noto Serif JP（明朝体）
- **サブフォント:** Noto Sans JP（ゴシック体）
- **カラースキーム:**
  - プライマリ: #1B4F72（ネイビー）
  - テキスト: #2c2c2c（ダークグレー）
  - 背景: #ffffff / #fafafa

## 📋 主要セクション

1. ヒーローセクション
2. 課題提起（4つのお悩み）
3. サービス内容（3本柱）
4. 他社との比較
5. 料金プラン
6. ご利用の流れ
7. よくある質問（FAQ）
8. お問い合わせフォーム

## 🔒 セキュリティ

- `.env`ファイルはGit管理外（.gitignoreに含む）
- アプリパスワード使用（平文パスワード非使用）
- CORS設定済み
- 入力バリデーション実装

## 📝 ライセンス

MIT License

## 📞 お問い合わせ

**マップサポート群馬**
- Email: info@gunma-meo.com
- Tel: 070-2350-6245
- 対応エリア: 群馬県全域（高崎・前橋を中心に）

---

**バージョン:** 1.0.0
**最終更新:** 2026年3月5日
