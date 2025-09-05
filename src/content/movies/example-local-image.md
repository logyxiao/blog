---
title: '示例：使用本地图片的电影'
year: 2023
genre: ['剧情', '示例']
myRating: 8.5
doubanRating: 8.0
review: '这是一个展示如何使用本地图片的示例电影条目'
director: '示例导演'
duration: '120分钟'
category: 'Movie'
poster: '../../assets/blog-placeholder-1.jpg'
watchedDate: '2024-01-20'
tags: ['示例', '本地图片', '测试']
---

# 示例：使用本地图片的电影

这是一个示例电影条目，展示了如何在Astro content collections中使用本地图片。

## 如何使用本地图片

1. 将图片放在 `src/assets/movies/` 目录下
2. 在markdown文件的frontmatter中，使用相对路径引用图片：
   ```yaml
   poster: '../../assets/movies/your-image.jpg'
   ```

## 支持的图片格式

Astro的Image组件支持多种图片格式：
- JPG/JPEG
- PNG  
- WebP
- AVIF
- SVG

## 优势

使用本地图片的优势：
- 更好的性能优化（自动压缩、格式转换）
- 版本控制友好
- 离线可用
- 自动生成responsive图片
