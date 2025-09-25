# ZySign Website - Vercel 部署指南

## 项目概述
这是一个使用 Next.js 15 + TypeScript + Tailwind CSS + next-intl 构建的多语言标识解决方案网站。

## 功能特性
- ✅ Next.js 15 App Router
- ✅ TypeScript 支持
- ✅ 多语言支持 (7种语言：英语、阿拉伯语、法语、德语、西班牙语、意大利语、中文)
- ✅ RTL 布局支持 (阿拉伯语)
- ✅ Tailwind CSS v4 响应式设计
- ✅ SEO 优化
- ✅ Vercel 部署配置

## Vercel 部署步骤

### 1. 准备工作
确保项目根目录包含以下文件：
- `package.json`
- `next.config.ts`
- `vercel.json`
- `tsconfig.json`

### 2. 通过 Vercel CLI 部署
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 在项目目录中运行部署
vercel

# 第一次部署时，按照提示配置：
# - Link to existing project: No
# - Project name: zysign-website
# - Directory: ./
# - Build command: npm run build
# - Dev command: npm run dev
# - Install command: npm install
```

### 3. 通过 Vercel 网站部署
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub/GitLab 账号登录
3. 点击 "New Project"
4. 导入您的 Git 仓库或上传项目文件
5. 选择 Next.js 框架预设
6. 点击 "Deploy"

### 4. 环境变量设置
如果需要，可以在 Vercel 仪表板中设置以下环境变量：
- `NEXT_PUBLIC_SITE_URL`: 您的域名
- 其他 API 密钥或配置

### 5. 自定义域名
1. 在 Vercel 项目设置中
2. 进入 "Domains" 选项卡
3. 添加您的自定义域名
4. 按照 DNS 配置说明更新域名记录

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 项目结构
```
zysign-website/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Products.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── i18n/
│   │   ├── config.ts
│   │   ├── routing.ts
│   │   ├── request.ts
│   │   └── messages/
│   │       ├── en.json
│   │       ├── ar.json
│   │       ├── fr.json
│   │       ├── de.json
│   │       ├── es.json
│   │       ├── it.json
│   │       └── zh.json
│   └── middleware.ts
├── public/
├── next.config.ts
├── vercel.json
├── package.json
└── tsconfig.json
```

## 支持的语言路由
- 英语: `/` (默认)
- 阿拉伯语: `/ar`
- 法语: `/fr`
- 德语: `/de`
- 西班牙语: `/es`
- 意大利语: `/it`
- 中文: `/zh`

## 技术栈
- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **国际化**: next-intl
- **构建工具**: Turbopack
- **部署**: Vercel

## 注意事项
1. 确保所有图片都放在 `public` 目录下
2. 新增语言时需要在 `src/i18n/config.ts` 中注册
3. 修改样式时使用 Tailwind CSS 类名
4. RTL 语言支持已配置，会自动应用于阿拉伯语

## 故障排除
如果部署失败，请检查：
1. 所有依赖是否正确安装
2. TypeScript 类型错误
3. 构建命令是否成功执行
4. Vercel 配置文件是否正确