# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Astro 框架的多语言个人博客网站，支持中文（简体）和英文两种语言。博客集成了 Waline 评论系统，具备文章发布、影视收藏展示等功能。

## 开发命令

### 基础开发命令
- `pnpm install` - 安装依赖
- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建生产版本
- `pnpm preview` - 预览生产构建

### 包管理器
项目使用 pnpm 作为包管理器（见 pnpm-lock.yaml），构建和部署配置在 vercel.json 中指定。

## 核心架构

### 内容管理系统
项目使用 Astro Content Collections 管理内容：

- `src/content/blog/` - 博客文章（Markdown/MDX）
- `src/content/movies/` - 影视收藏（Markdown/MDX）
- `src/content.config.ts` - 内容结构定义和类型检查

### 多语言支持
- **配置**: `astro.config.mjs` 中定义 i18n 设置，默认语言为中文（zh-cn），支持英文（en）
- **翻译**: `src/lib/i18n.ts` 包含所有翻译字符串和语言切换逻辑
- **路由**: 支持 `/zh-cn/` 和 `/en/` 前缀路由，中文为默认路径（无前缀）

### 页面结构
- `src/pages/[locale]/` - 多语言页面（about, blog, index, movies）
- `src/pages/blog/[...slug].astro` - 动态博客文章页面
- `src/layouts/BlogPost.astro` - 博客文章布局模板

### 组件系统
关键组件：
- `WalineComment.astro` - 评论系统集成
- `BlogCard.astro` - 博客文章卡片
- `MovieCard.astro` - 影视作品卡片
- `AuthorSidebar.astro` - 作者信息侧边栏
- `LanguageDropdown.astro` - 语言切换下拉菜单

### 样式系统
- **Tailwind CSS**: 主要的 CSS 框架
- **全局样式**: `src/styles/global.css`
- **组件特定样式**: 评论系统有独立的主题样式文件

## 评论系统配置

使用 Waline 评论系统：
- **服务端URL**: 当前指向 `https://vercel-blog-sooty-psi.vercel.app/`
- **配置文件**: `WALINE_SETUP.md` 包含完整的部署和配置指南
- **组件**: `src/components/WalineComment.astro` 处理评论初始化

修改评论服务端URL时，需要更新 `src/components/WalineComment.astro:20` 行的 `serverURL` 配置。

## 内容创建规范

### 博客文章 Frontmatter
```yaml
title: 文章标题
description: 文章描述
pubDate: 发布日期
updatedDate: 更新日期（可选）
heroImage: 头图（可选）
tags: [标签数组]
```

### 影视收藏 Frontmatter
```yaml
title: 影视作品标题
year: 年份
myRating: 个人评分（0-10）
doubanRating: 豆瓣评分（0-10）
review: 影评
director: 导演
duration: 时长
category: 类别（Movie/TV Series/Documentary等）
poster: 海报图片
watchedDate: 观看日期
tags: [标签数组]
```

## 部署配置

### Vercel 配置 (vercel.json)
- 构建命令：`pnpm build`
- 输出目录：`dist`
- 框架：`astro`

### 站点配置
- **域名**: logyxiao.cc（在 astro.config.mjs 中配置）
- **静态输出**: 配置为静态生成模式

## 开发注意事项

### 路径别名
项目配置了 `@` 别名指向 `src` 目录，在组件中可使用 `@/components/` 等方式引用。

### Markdown 增强
配置了多个 Markdown 插件：
- `remark-gfm` - GitHub 风格 Markdown
- `rehype-slug` - 标题ID生成
- `rehype-autolink-headings` - 标题自动链接
- `rehype-external-links` - 外部链接优化

### 图片处理
使用 Astro Image 组件处理图片优化，图片资源放在 `src/assets/` 目录。