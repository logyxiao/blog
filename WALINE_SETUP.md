# Waline 服务端部署指南

## 1. 一键部署到Vercel（推荐）

1. 访问 [Waline 官方部署链接](https://github.com/walinejs/waline/tree/main/example)
2. 点击 "Deploy with Vercel" 按钮
3. 登录Vercel账号，授权GitHub
4. 填写仓库名称（如：waline-server）
5. 配置环境变量：
   - `LEAN_ID`: LeanCloud应用ID
   - `LEAN_KEY`: LeanCloud应用Key
   - `LEAN_MASTER_KEY`: LeanCloud主密钥

## 2. 使用LeanCloud数据库（免费）

1. 访问 [LeanCloud国际版](https://console.leancloud.app/)
2. 注册账号并创建应用
3. 在应用设置→应用凭证中获取：
   - App ID
   - App Key  
   - Master Key
4. 在数据存储→结构化数据→创建Class中：
   - 创建名为 `Comment` 的Class

## 3. 配置Vercel环境变量

在Vercel项目的Settings → Environment Variables中添加：
- `LEAN_ID`: 你的LeanCloud App ID
- `LEAN_KEY`: 你的LeanCloud App Key
- `LEAN_MASTER_KEY`: 你的LeanCloud Master Key

## 4. 更新博客配置

部署成功后，复制Vercel提供的URL（如：https://your-waline.vercel.app），
然后在 `src/components/WalineComment.astro` 中更新：

```javascript
serverURL: 'https://your-waline.vercel.app', // 替换为你的Waline服务端URL
```

## 5. 管理界面

访问 `https://your-waline.vercel.app/ui` 可以登录管理界面，管理评论。

## 6. 可选配置

### 邮件通知
在环境变量中添加：
- `SMTP_SERVICE`: 邮件服务商（如QQ、Gmail）
- `SMTP_USER`: 邮箱账号
- `SMTP_PASS`: 邮箱密码或授权码
- `SITE_NAME`: 网站名称
- `SITE_URL`: 网站地址

### 安全配置
- `SECURE_DOMAINS`: 允许的域名（多个用逗号分隔）
- `DISABLE_USERAGENT`: 禁用UA显示

### 社交登录
- `GITHUB_ID` + `GITHUB_SECRET`: GitHub登录
- `GOOGLE_ID` + `GOOGLE_SECRET`: Google登录

更多配置请参考：https://waline.js.org/guide/server/intro.html
