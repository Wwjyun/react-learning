export default function Home() {
    return (
      <div className="tab-content-enter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
                嗨，我是瑋駿是一個 <span className="text-blue-400">AI機器視覺開發者</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                我專注於創建高效、優雅且用戶友好的程式解決方案。我的作品涵蓋 Web 開發、AI串聯、機器視覺和數據分析等多個領域。
              </p>
              <div className="flex gap-4">
                <a href="/projects"
                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 transform hover:scale-105">
                  查看我的作品
                </a>
                <a href="/contact"
                   className="border border-blue-400 text-blue-400 hover:bg-blue-900/30 px-6 py-3 rounded-md font-medium transition duration-300 transform hover:scale-105">
                  聯繫我
                </a>
              </div>
            </div>
  
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl floating"></div>
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-10 blur-lg floating" style={{animationDelay:"1s"}}></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="code-bg rounded-2xl p-6 w-full h-full flex flex-col justify-center glow-box">
                    <div className="terminal">
                      <div className="terminal-header">
                        <div className="terminal-btn red"></div>
                        <div className="terminal-btn yellow"></div>
                        <div className="terminal-btn green"></div>
                      </div>
                      <div className="mt-8">
                        <p className="text-green-400">$ <span className="text-white">whoami</span></p>
                        <p className="text-blue-300 mt-2">AI-AOI-developer</p>
                        <p className="text-green-400 mt-4">$ <span className="text-white">skills --show</span></p>
                        <p className="text-blue-300 mt-2">JavaScript, Python, React, Node.js, R-CNN, YOLO, OpenCV</p>
                        <p className="text-green-400 mt-4">$ <span className="text-white">projects --count</span></p>
                        <p className="text-blue-300 mt-2">12+ completed</p>
                        <p className="text-green-400 mt-4">$ <span className="cursor">_</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* 數字卡片 */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {icon:"fa-code", n:"12+", t:"完成項目"},
              {icon:"fa-users", n:"8+", t:"流程開發"},
              {icon:"fa-star", n:"2", t:"年經驗"},
              {icon:"fa-award", n:"1", t:"專利發明"},
            ].map((x,i)=>(
              <div key={i} className="code-bg rounded-xl p-6 text-center glow-box transition-all">
                <div className="text-blue-400 text-3xl mb-3">
                  <i className={`fas ${x.icon}`}></i>
                </div>
                <h3 className="font-bold text-lg mb-2">{x.n}</h3>
                <p className="text-gray-300 text-sm">{x.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  