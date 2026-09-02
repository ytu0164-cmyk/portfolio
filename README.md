# 涂叶个人网站

一页式响应式个人网站，围绕“国际商务 × 数据分析 × 用户运营”建立个人叙事。

## 本地预览

直接打开 `index.html` 即可浏览。为获得完整的下载与复制体验，建议在本目录启动静态服务器：

```powershell
python -m http.server 4173
```

然后访问 `http://127.0.0.1:4173`。

## 文件结构

- `index.html`：页面内容与语义结构
- `styles.css`：响应式布局、主题和动效
- `app.js`：滚动入场、深浅色切换、复制邮箱与进度条
- `assets/portrait-professional.jpg`：首屏职业头像
- `assets/life-salt-lake.jpg`、`assets/life-mountain.jpg`：个人照片叙事
- `assets/涂叶-个人简历.pdf`：下载版完整简历

## 发布

仓库已包含 GitHub Pages 自动部署工作流。推送到 `main` 后会自动发布，无需构建步骤。
