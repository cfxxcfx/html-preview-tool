// Add debug logging
console.log('HTML Preview Extension loaded');

// Initialize DOMPurify
const purify = DOMPurify;

// Initialize function
function initialize() {
    console.log('Initializing HTML Preview...');
    
    // 扩展选择器以匹配更多类型的代码块
    const codeBlocks = document.querySelectorAll('pre, pre code, .highlight, .code-block');
    console.log('Found code blocks:', codeBlocks.length);
    
    codeBlocks.forEach((codeBlock) => {
        // 获取实际的代码块元素
        const targetBlock = codeBlock.tagName.toLowerCase() === 'code' ? codeBlock : codeBlock.querySelector('code') || codeBlock;
        const container = targetBlock.closest('pre') || targetBlock.parentElement;
        
        // 检查是否已经添加了预览按钮
        if (container.querySelector('.preview-button')) {
            return;
        }
        
        // 只为包含 HTML 的代码块添加预览按钮
        const codeText = targetBlock.textContent.trim().toLowerCase();
        if (!codeText.includes('<') || !codeText.includes('>')) {
            return;
        }

        // 创建预览按钮
        const previewButton = document.createElement('button');
        previewButton.className = 'preview-button';
        previewButton.textContent = 'Preview';
        
        // 设置容器样式并添加按钮
        container.style.position = 'relative';
        container.appendChild(previewButton);
        
        // 预览功能
        previewButton.addEventListener('click', () => {
            const code = targetBlock.textContent;
            const sanitizedCode = purify.sanitize(code);
            
            // 创建预览容器
            const previewContainer = document.createElement('div');
            previewContainer.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                height: 80%;
                background: white;
                border: 1px solid #ccc;
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
                z-index: 1000;
                overflow: auto;
                padding: 20px;
            `;

            // 创建 shadow DOM
            const shadow = previewContainer.attachShadow({ mode: 'open' });
            shadow.innerHTML = sanitizedCode;

            // 关闭按钮
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.style.cssText = `
                position: absolute;
                right: 10px;
                top: 10px;
                padding: 5px 10px;
                background: #ff4444;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            `;

            previewContainer.appendChild(closeButton);
            document.body.appendChild(previewContainer);

            closeButton.addEventListener('click', () => {
                document.body.removeChild(previewContainer);
            });
        });
    });
}

// 初始化时机的处理
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

// 监听动态内容
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
            initialize();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
}); 