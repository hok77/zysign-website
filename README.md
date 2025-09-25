# ZySign Website | ZySign 官方网站

> A modern, multilingual signage solutions website built with Next.js 15, TypeScript, and Tailwind CSS.
> 
> 一个现代化的多语言标识解决方案网站，使用 Next.js 15 + TypeScript + Tailwind CSS 构建。

## ✨ Features | 功能特性

🌍 **Multilingual Support | 多语言支持**  
7 languages (English, Arabic, French, German, Spanish, Italian, Chinese)  
支持7种语言（英语、阿拉伯语、法语、德语、西班牙语、意大利语、中文）

🔄 **RTL Layout | RTL布局**  
Full right-to-left layout support for Arabic  
完整的从右到左布局支持（阿拉伯语）

📱 **Responsive Design | 响应式设计**  
Mobile-first design approach  
移动优先的设计理念

⚡ **High Performance | 高性能**  
Next.js 15 + Turbopack for fast development  
Next.js 15 + Turbopack 实现快速开发

🎨 **Modern UI | 现代UI**  
Tailwind CSS v4 styling system  
Tailwind CSS v4 样式系统

🔍 **SEO Optimized | SEO优化**  
Built-in metadata and structured data  
内置元数据和结构化数据

🚀 **Vercel Ready | Vercel就绪**  
One-click deployment to Vercel  
一键部署到Vercel

## 🛠️ Tech Stack | 技术栈

- **Framework | 框架**: Next.js 15 (App Router)
- **Language | 语言**: TypeScript
- **Styling | 样式**: Tailwind CSS v4
- **Internationalization | 国际化**: next-intl
- **Icons | 图标**: Lucide React
- **Build Tool | 构建工具**: Turbopack
- **Deployment | 部署**: Vercel

## 🚀 Quick Start | 快速开始

### Local Development | 本地开发

```bash
# Clone the repository | 克隆项目
git clone <your-repo-url>
cd zysign-website

# Install dependencies | 安装依赖
npm install

# Start development server | 启动开发服务器
npm run dev

# Open browser | 打开浏览器访问
# http://localhost:3000
```

### Build for Production | 构建生产版本

```bash
# Build project | 构建项目
npm run build

# Start production server | 启动生产服务器
npm start
```

## 🌐 Language Routes | 多语言路由

The website supports the following languages and routes:  
网站支持以下语言和路由：

| Language 语言 | Code 代码 | Route 路由 | Direction 方向 |
|---------------|-----------|------------|----------------|
| English 英语 | en | `/` | LTR |
| Arabic 阿拉伯语 | ar | `/ar` | RTL |
| French 法语 | fr | `/fr` | LTR |
| German 德语 | de | `/de` | LTR |
| Spanish 西班牙语 | es | `/es` | LTR |
| Italian 意大利语 | it | `/it` | LTR |
| Chinese 中文 | zh | `/zh` | LTR |

## 📁 Project Structure | 项目结构

```
src/
├── app/
│   ├── [locale]/          # Dynamic language routes | 动态语言路由
│   │   ├── layout.tsx     # Language layout | 语言布局
│   │   └── page.tsx       # Main page | 主页面
│   ├── globals.css        # Global styles | 全局样式
│   └── layout.tsx         # Root layout | 根布局
├── components/            # React components | React组件
│   ├── Header.tsx         # Navigation header | 导航头部
│   ├── Hero.tsx           # Hero section | 英雄区域
│   ├── Products.tsx       # Product showcase | 产品展示
│   ├── FAQ.tsx            # FAQ section | 常见问题
│   └── Footer.tsx         # Footer | 页脚
├── i18n/                  # Internationalization | 国际化配置
│   ├── config.ts          # Language config | 语言配置
│   ├── routing.ts         # Route config | 路由配置
│   ├── request.ts         # Request config | 请求配置
│   └── messages/          # Translation files | 翻译文件
│       ├── en.json        # English | 英语
│       ├── ar.json        # Arabic | 阿拉伯语
│       ├── fr.json        # French | 法语
│       ├── de.json        # German | 德语
│       ├── es.json        # Spanish | 西班牙语
│       ├── it.json        # Italian | 意大利语
│       └── zh.json        # Chinese | 中文
└── middleware.ts          # Internationalization middleware | 国际化中间件
```

## 🚀 Vercel Deployment | Vercel部署

### Method 1: Using Deployment Script | 方法1：使用部署脚本

```bash
# For Windows users | Windows用户
./deploy.bat

# Or manually | 或手动执行
npm install -g vercel
vercel login
vercel
```

### Method 2: GitHub Integration | 方法2：GitHub集成

1. Push code to GitHub repository | 将代码推送到GitHub仓库
2. Import project in [Vercel](https://vercel.com) | 在Vercel中导入项目
3. Select Next.js preset | 选择Next.js预设
4. Click Deploy | 点击Deploy

### Environment Variables (Optional) | 环境变量（可选）

Set in Vercel dashboard | 在Vercel仪表板中设置：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📝 Configuration | 配置说明

### Adding New Languages | 添加新语言

1. Add language code in `src/i18n/config.ts` | 在配置文件中添加语言代码
2. Create translation file `src/i18n/messages/{locale}.json` | 创建对应的翻译文件
3. Specify direction for RTL languages | 为RTL语言指定方向

### Modifying Styles | 修改样式

- Use Tailwind CSS classes | 使用Tailwind CSS类名
- Custom styles in `src/app/globals.css` | 自定义样式在全局CSS文件中
- RTL styles automatically applied for Arabic | RTL样式自动应用于阿拉伯语

### SEO Optimization | SEO优化

- Metadata configured in `src/app/[locale]/layout.tsx` | 元数据在布局文件中配置
- Supports independent SEO settings for each language | 支持每个语言的独立SEO设置

## 🔧 Development Commands | 开发命令

```bash
# Development mode | 开发模式
npm run dev

# Build project | 构建项目
npm run build

# Start production server | 启动生产服务器
npm start

# Code linting | 代码检查
npm run lint
```

## 📞 Technical Support | 技术支持

If you encounter issues, please check | 如果遇到问题，请检查：

1. Node.js version >= 18 | Node.js版本 >= 18
2. All dependencies installed correctly | 所有依赖是否正确安装
3. Translation file format is correct | 翻译文件格式是否正确
4. Vercel configuration is complete | Vercel配置是否完整

For detailed deployment instructions, see `DEPLOYMENT.md`.  
详细部署说明请参考 `DEPLOYMENT.md`。

## 📄 License | 许可证

MIT License

---

**Built with ❤️ for ZySign - Premium Signage Solutions**  
**为 ZySign 精心打造 - 高端标识解决方案**
1. Push code to GitHub repository | 将代码推送到GitHub仓库
2. Import project in [Vercel](https://vercel.com) | 在Vercel中导入项目
3. Select Next.js preset | 选择Next.js预设
4. Click Deploy | 点击Deploy

### Environment Variables (Optional) | 环境变量（可选）

Set in Vercel dashboard | 在Vercel仪表板中设置：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📝 Configuration | 配置说明

### Adding New Languages | 添加新语言

1. Add language code in `src/i18n/config.ts` | 在配置文件中添加语言代码
2. Create translation file `src/i18n/messages/{locale}.json` | 创建对应的翻译文件
3. Specify direction for RTL languages | 为RTL语言指定方向

### Modifying Styles | 修改样式

- Use Tailwind CSS classes | 使用Tailwind CSS类名
- Custom styles in `src/app/globals.css` | 自定义样式在全局CSS文件中
- RTL styles automatically applied for Arabic | RTL样式自动应用于阿拉伯语

### SEO Optimization | SEO优化

- Metadata configured in `src/app/[locale]/layout.tsx` | 元数据在布局文件中配置
- Supports independent SEO settings for each language | 支持每个语言的独立SEO设置

## 🔧 Development Commands | 开发命令

```bash
# Development mode | 开发模式
npm run dev

# Build project | 构建项目
npm run build

# Start production server | 启动生产服务器
npm start

# Code linting | 代码检查
npm run lint
```

## 📞 Technical Support | 技术支持

If you encounter issues, please check | 如果遇到问题，请检查：

1. Node.js version >= 18 | Node.js版本 >= 18
2. All dependencies installed correctly | 所有依赖是否正确安装
3. Translation file format is correct | 翻译文件格式是否正确
4. Vercel configuration is complete | Vercel配置是否完整

For detailed deployment instructions, see `DEPLOYMENT.md`.  
详细部署说明请参考 `DEPLOYMENT.md`。

## 📄 License | 许可证

MIT License

---

**Built with ❤️ for ZySign - Premium Signage Solutions**  
**为 ZySign 精心打造 - 高端标识解决方案**
