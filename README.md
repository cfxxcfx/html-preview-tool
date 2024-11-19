
# HTML Preview Tool - Chrome Extension

A powerful Chrome extension that provides real-time HTML code block preview with enhanced security features and CSS animation support.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.1-green.svg)

**Author**: douCi  
**Repository**: [https://github.com/cfxxcfx/html-preview-tool](https://github.com/cfxxcfx/html-preview-tool)

---

## Features

- 🔒 **Secure Preview**: Uses DOMPurify for safe HTML rendering to prevent XSS attacks.
- 🎨 **Rich Style Support**: Supports CSS animations and styling.
- 🎯 **Style Isolation**: Implements Shadow DOM for independent styling.
- 🖼️ **Interactive Controls**: Offers dynamic preview window adjustments and controls.
- 📏 **Resizable Window**: Allows free resizing of the preview window.
- 🔄 **Real-Time Monitoring**: Detects changes in HTML content and updates the preview instantly.
- ⚡ **Performance Optimization**: Optimized for speed and efficiency.
- 🛡️ **Sandboxed Environment**: Provides a secure sandbox for script execution.

---

## Installation

### Install from Chrome Web Store
1. Visit [Chrome Web Store](https://chrome.google.com/webstore) (coming soon).
2. Search for `HTML Preview Tool`.
3. Click **Add to Chrome**.

### Developer Mode Installation
1. Download or clone this repository:
   ```bash
   git clone https://github.com/cfxxcfx/html-preview-tool.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked**, and select the project directory.

---

## Usage

1. Open any webpage containing HTML code blocks.
2. The extension automatically detects HTML code blocks.
3. Look for the "Preview" button above the code block.
4. Click the button to toggle the real-time preview window.

---

## Development

### Requirements
- Google Chrome browser
- Basic knowledge of JavaScript and Chrome extension development

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/cfxxcfx/html-preview-tool.git
   ```
2. Navigate to the project directory:
   ```bash
   cd html-preview-tool
   ```
3. Load the extension:
   - Open `chrome://extensions/`.
   - Enable **Developer Mode**.
   - Click **Load unpacked** and select the project directory.

### Project Structure
```
html-preview-tool/
├── manifest.json        # Extension configuration
├── html-preview.user.js # Core functionality script
├── styles.css           # UI styles
├── lib/
│   └── purify.min.js    # DOMPurify library
└── icons/               # Extension icons
```

---

## Contributing

Contributions are welcome! Here’s how you can help:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

---

## Issues

If you encounter a problem or have suggestions:
1. Check [existing issues](../../issues).
2. Submit a new issue with the following details:
   - Problem description
   - Steps to reproduce
   - Expected behavior
   - Chrome version and OS information

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [DOMPurify](https://github.com/cure53/DOMPurify): For XSS prevention support.
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/): For helpful development guidelines.

---

## Support the Project

If you find this tool helpful, you can:
- ⭐ Star the repository.
- Share it with others.
- Submit feedback or contribute code.

---

❤️ Built with love for the web development community!
