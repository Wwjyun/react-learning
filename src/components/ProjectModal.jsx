import { useState, useEffect } from 'react';

// 改進的Markdown解析函數
const parseMarkdown = (text) => {
  if (!text) return '';
  
  let html = text;
  
  // 處理代碼塊（優先處理，避免被其他規則影響）
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-700 text-gray-200 p-4 rounded-lg my-4 overflow-x-auto"><code>$1</code></pre>');
  
  // 處理行內代碼
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-700 text-blue-300 px-2 py-1 rounded text-sm">$1</code>');
  
  // 處理標題
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-white mb-2 mt-4">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold text-white mb-3 mt-6">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-white mb-4 mt-8">$1</h1>');
  
  // 處理粗體
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
  
  // 處理表格
  const lines = html.split('\n');
  let inTable = false;
  let tableRows = [];
  let processedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('|') && line.trim().length > 0) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell.length > 0);
      if (cells.length > 0) {
        tableRows.push(cells);
      }
    } else {
      if (inTable && tableRows.length > 0) {
        // 處理表格
        const tableHtml = `<table class="w-full border-collapse border border-gray-600 my-4">
          <thead>
            <tr class="bg-gray-700">
              ${tableRows[0].map(cell => `<th class="border border-gray-600 px-3 py-2 text-left text-white font-semibold">${cell}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${tableRows.slice(1).map(row => 
              `<tr>${row.map(cell => `<td class="border border-gray-600 px-3 py-2 text-gray-300">${cell}</td>`).join('')}</tr>`
            ).join('')}
          </tbody>
        </table>`;
        processedLines.push(tableHtml);
        tableRows = [];
        inTable = false;
      }
      processedLines.push(line);
    }
  }
  
  // 處理最後的表格
  if (inTable && tableRows.length > 0) {
    const tableHtml = `<table class="w-full border-collapse border border-gray-600 my-4">
      <thead>
        <tr class="bg-gray-700">
          ${tableRows[0].map(cell => `<th class="border border-gray-600 px-3 py-2 text-left text-white font-semibold">${cell}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${tableRows.slice(1).map(row => 
          `<tr>${row.map(cell => `<td class="border border-gray-600 px-3 py-2 text-gray-300">${cell}</td>`).join('')}</tr>`
        ).join('')}
      </tbody>
    </table>`;
    processedLines.push(tableHtml);
  }
  
  html = processedLines.join('\n');
  
  // 處理列表
  html = html.replace(/^[\s]*[-*] (.*$)/gim, '<li class="text-gray-300 mb-1 ml-4">• $1</li>');
  
  // 將連續的列表項包裝在ul中
  html = html.replace(/(<li class="text-gray-300 mb-1 ml-4">.*<\/li>)(\s*<li class="text-gray-300 mb-1 ml-4">.*<\/li>)*/g, (match) => {
    return `<ul class="list-none space-y-1 my-4">${match}</ul>`;
  });
  
  // 處理段落（將連續的非標題、非列表、非代碼塊的行合併為段落）
  html = html.replace(/([^<\n])(\n)([^<\n#\-\*`])/g, '$1<br>$3');
  
  // 處理空行
  html = html.replace(/\n\s*\n/g, '<br><br>');
  
  return html;
};

export default function ProjectModal({ isOpen, onClose, project }) {
  const [readmeContent, setReadmeContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && project) {
      loadReadme();
    }
  }, [isOpen, project]);

  const loadReadme = async () => {
    setLoading(true);
    try {
      // 使用項目指定的README路徑，如果沒有則使用默認路徑
      const readmePath = project.readmePath || '/README.md';
      const response = await fetch(readmePath);
      if (response.ok) {
        const content = await response.text();
        setReadmeContent(content);
      } else {
        setReadmeContent('暫無詳細介紹');
      }
    } catch (error) {
      console.error('讀取README.md失敗:', error);
      setReadmeContent('暫無詳細介紹');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal內容 */}
      <div className="relative bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* 標題欄 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* 內容區域 */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* 項目基本信息 */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-900/50 text-blue-300 text-sm px-3 py-1 rounded-full">
                {project.badge}
              </span>
              <div className="flex gap-4 text-sm">
                <a href={project.demo} className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  <i className="fas fa-external-link-alt"></i> 查看演示
                </a>
                <a href={project.code} className="text-gray-400 hover:text-gray-300 flex items-center gap-1">
                  <i className="fab fa-github"></i> 查看代碼
                </a>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-4">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 分隔線 */}
          <div className="border-t border-gray-700 mb-6"></div>

          {/* README內容 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <i className="fas fa-file-alt text-blue-400"></i>
              項目詳情
            </h3>
            
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                <span className="ml-3 text-gray-300">載入中...</span>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-6">
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(readmeContent) }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
