const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// メール送信設定
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true, // SSL使用
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// ルートパスでindex.htmlを返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// お問い合わせフォーム送信API
app.post('/api/contact', async (req, res) => {
  try {
    const { companyName, name, phone, email, address, inquiry, message } = req.body;

    // バリデーション
    if (!companyName || !name || !phone || !email || !inquiry) {
      return res.status(400).json({
        success: false,
        message: '必須項目が入力されていません。'
      });
    }

    // 管理者宛メール
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'info@gunma-meo.com',
      subject: '【マップサポート群馬】新規お問い合わせ',
      text: `
新しいお問い合わせが届きました。

━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━

クリニック・医院名: ${companyName}
お名前: ${name}
電話番号: ${phone}
メールアドレス: ${email}
所在地: ${address || '未記入'}
お問い合わせ内容: ${inquiry}

メッセージ:
${message || '未記入'}

━━━━━━━━━━━━━━━━━━━━━━
送信日時: ${new Date().toLocaleString('ja-JP')}
━━━━━━━━━━━━━━━━━━━━━━
      `,
      html: `
        <div style="font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B4F72; border-bottom: 3px solid #1B4F72; padding-bottom: 10px;">
            新しいお問い合わせが届きました
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #f5f5f5;">
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd; width: 30%;">クリニック・医院名</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${companyName}</td>
            </tr>
            <tr>
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">お名前</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">電話番号</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">メールアドレス</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">所在地</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${address || '未記入'}</td>
            </tr>
            <tr>
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">お問い合わせ内容</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${inquiry}</td>
            </tr>
          </table>

          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-left: 4px solid #1B4F72;">
            <strong>メッセージ:</strong><br>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message || '未記入'}</p>
          </div>

          <p style="color: #666; font-size: 0.9em; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            送信日時: ${new Date().toLocaleString('ja-JP')}
          </p>
        </div>
      `
    };

    // 自動返信メール（お客様宛）
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: '【マップサポート群馬】お問い合わせを受け付けました',
      text: `
${name} 様

この度は、マップサポート群馬にお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━

クリニック・医院名: ${companyName}
お名前: ${name}
電話番号: ${phone}
メールアドレス: ${email}
所在地: ${address || '未記入'}
お問い合わせ内容: ${inquiry}

メッセージ:
${message || '未記入'}

━━━━━━━━━━━━━━━━━━━━━━

通常1営業日以内に担当者よりご連絡させていただきます。
今しばらくお待ちくださいませ。

※このメールは自動送信されています。
　このメールに返信いただいても対応できませんのでご了承ください。

━━━━━━━━━━━━━━━━━━━━━━
マップサポート群馬
群馬県特化型MEO代行サービス

Email: info@gunma-meo.com
Tel: 070-2350-6245
━━━━━━━━━━━━━━━━━━━━━━
      `,
      html: `
        <div style="font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B4F72; border-bottom: 3px solid #1B4F72; padding-bottom: 10px;">
            お問い合わせを受け付けました
          </h2>

          <p>${name} 様</p>

          <p>この度は、マップサポート群馬にお問い合わせいただき、誠にありがとうございます。<br>
          以下の内容でお問い合わせを受け付けました。</p>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #f5f5f5;">
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd; width: 30%;">クリニック・医院名</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${companyName}</td>
            </tr>
            <tr>
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">お名前</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">電話番号</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">メールアドレス</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">所在地</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${address || '未記入'}</td>
            </tr>
            <tr>
              <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">お問い合わせ内容</th>
              <td style="padding: 12px; border: 1px solid #ddd;">${inquiry}</td>
            </tr>
          </table>

          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-left: 4px solid #1B4F72;">
            <strong>メッセージ:</strong><br>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message || '未記入'}</p>
          </div>

          <div style="margin: 30px 0; padding: 20px; background: #fffbf0; border: 1px solid #ffd700;">
            <p style="margin: 0;">通常<strong>1営業日以内</strong>に担当者よりご連絡させていただきます。<br>
            今しばらくお待ちくださいませ。</p>
          </div>

          <p style="color: #999; font-size: 0.85em; margin-top: 30px;">
            ※このメールは自動送信されています。<br>
            このメールに返信いただいても対応できませんのでご了承ください。
          </p>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #1B4F72; color: #666; font-size: 0.9em;">
            <strong style="color: #1B4F72; font-size: 1.1em;">マップサポート群馬</strong><br>
            群馬県特化型MEO代行サービス<br><br>
            Email: info@gunma-meo.com<br>
            Tel: 070-2350-6245
          </div>
        </div>
      `
    };

    // メール送信
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.json({
      success: true,
      message: 'お問い合わせありがとうございます。内容を確認次第、担当者よりご連絡させていただきます。'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: '送信中にエラーが発生しました。お手数ですが、お電話またはメールで直接お問い合わせください。'
    });
  }
});

// ヘルスチェック用エンドポイント
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
