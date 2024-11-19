# HTML Preview Tool - Chrome 扩展

一个功能强大的 Chrome 扩展，支持实时预览 HTML 代码块，具有增强的安全特性和 CSS 动画支持。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.1-green.svg)

**作者**：douCi  
**仓库地址**：[https://github.com/cfxxcfx/html-preview-tool](https://github.com/cfxxcfx/html-preview-tool)

---

## 功能特点

- 🔒 **安全预览**：使用 DOMPurify 进行 HTML 净化，防止 XSS 攻击。
- 🎨 **丰富样式支持**：支持 CSS 动画和样式。
- 🎯 **样式隔离**：采用 Shadow DOM 实现独立的样式隔离。
- 🖼️ **交互式控制**：支持预览窗口的动态调整与控制。
- 📏 **可调整窗口**：自由调整预览窗口大小。
- 🔄 **实时动态监测**：检测 HTML 内容变化，实时更新预览。
- ⚡ **性能优化**：优化处理速度和性能。
- 🛡️ **沙箱环境**：通过脚本执行沙箱提升安全性。

---

## 安装方法

### 从 Chrome 网上应用店安装
1. 访问 [Chrome 网上应用店](https://chrome.google.com/webstore)（即将上线）。
2. 搜索 `HTML Preview Tool`。
3. 点击 **添加至 Chrome**。

### 开发者模式安装
1. 下载或克隆此仓库：
   ```bash
   git clone https://github.com/cfxxcfx/html-preview-tool.git
   ```
2. 打开 Chrome 浏览器，访问 `chrome://extensions/`。
3. 启用“开发者模式”。
4. 点击 **加载已解压的扩展程序**，选择项目目录。

---

## 使用方法

1. 打开任意包含 HTML 代码块的网页。
2. 扩展会自动检测 HTML 代码块。
3. 在代码块上方找到“预览”按钮。
4. 点击按钮切换至实时预览窗口。

---

## 开发信息

### 环境要求
- Google Chrome 浏览器
- JavaScript 和 Chrome 扩展开发基础知识

### 本地开发
1. 克隆仓库：
   ```bash
   git clone https://github.com/cfxxcfx/html-preview-tool.git
   ```
2. 进入项目目录：
   ```bash
   cd html-preview-tool
   ```
3. 加载扩展：
   - 打开 `chrome://extensions/`。
   - 启用开发者模式。
   - 点击“加载已解压的扩展程序”，选择扩展目录。

### 项目结构
```
html-preview-tool/
├── manifest.json        # 扩展配置文件
├── html-preview.user.js # 核心功能脚本
├── styles.css           # UI 样式表
├── lib/
│   └── purify.min.js    # DOMPurify 库
└── icons/               # 图标文件
```

---

## 参与贡献

欢迎贡献代码！步骤如下：
1. Fork 本仓库。
2. 创建特性分支：
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. 提交更改：
   ```bash
   git commit -m "添加某个特性"
   ```
4. 推送到分支：
   ```bash
   git push origin feature/AmazingFeature
   ```
5. 提交 Pull Request。

---

## 问题反馈

如果你发现问题或有改进建议：
1. 查看[现有问题](../../issues)。
2. 提交新的 issue，请附上以下信息：
   - 问题描述
   - 复现步骤
   - 期望行为
   - Chrome 版本与操作系统信息

---

## 许可证

本项目基于 MIT 许可证，详见 [LICENSE](LICENSE) 文件。

---

## 致谢

- [DOMPurify](https://github.com/cure53/DOMPurify)：XSS 防护技术支持。
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)：Chrome 扩展开发文档。

---

## 支持项目

如果你觉得本工具对你有帮助，可以：
- 为仓库点星标 ⭐。
- 分享给更多人。
- 提交问题反馈或代码贡献。

---

❤️ 用爱打造，为 Web 开发社区助力！
