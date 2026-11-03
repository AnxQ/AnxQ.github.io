# Xiaoqi An · 学术个人主页

无需安装依赖或编译，使用原生 HTML、CSS 和 JavaScript。双击 `index.html` 即可预览。支持手机和电脑，论文筛选与搜索，照片占位，以及关闭 JavaScript 时阅读正文。

## 发布至 GitHub Pages

1. 在自己的 GitHub 账号下创建名为 `AnxQ.github.io` 的仓库。如果已有该仓库，先备份旧文件。
2. 把本文件夹内的文件上传至仓库根目录，确保 `index.html` 位于根目录。
3. 在仓库的 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，文件夹选择 `/ (root)`，保存。
4. 等待 GitHub 部署完成，访问 `https://AnxQ.github.io/`。

也可上传至普通项目仓库；页面使用相对路径，兼容项目页面。

## 日常维护

- 个人信息、简介、论文、动态：编辑 `index.html`。
- 配色、字号和布局：编辑 `style.css` 顶部变量及样式。
- 添加照片：将照片保存为 `assets/portrait.jpg`，把 `index.html` 内 `<div class="portrait">` 的内部内容替换为 `<img src="assets/portrait.jpg" alt="个人照片" width="176" height="207">`。
- 新增论文：复制一个 `<article class="pub">`，修改标题、作者、链接及 `data-category`（`first-author` 或 `co-author`），同步修改初始论文数量。
- 新增动态：复制一条 `.news-row`，修改日期及内容。

主页地址：https://anxq.github.io/

仓库：https://github.com/AnxQ/AnxQ.github.io

## 资料核对

资料来源及论文状态修订记录见 `CONTENT-NOTES.md`。未提供的中文姓名、学历和荣誉未作推测。
