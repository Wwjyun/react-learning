export default function About() {
  return (
    <div className="tab-content-enter">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 glow-text">關於我</h2>
        <p className="text-gray-300 leading-8 mb-6">
          嗨！我是 <span className="text-blue-400 font-semibold">王瑋駿</span>，
          來自高雄的程式開發者與工程師。我專注於
          <span className="text-blue-300">電腦視覺、AI 模型應用、資料分析</span>，
          曾在工作中參與 AOI（自動光學檢測）與影像演算法的研發，包含
          亞像素邊緣定位、缺陷分類、ROI 精度優化等應用，協助提升產線良率。
        </p>
        <p className="text-gray-300 leading-8 mb-6">
          除了影像處理領域，我也熱衷於
          <span className="text-blue-300">自動化交易系統</span>與
          <span className="text-blue-300">後端開發</span>。我曾利用 Python、Freqtrade 與
          CCXT 建立自動交易機器人，並搭配 GUI 介面、資料庫及通知系統，提升策略可控性與操作便利性。
        </p>
        <p className="text-gray-300 leading-8 mb-6">
          在工具開發方面，我熟悉 <span className="text-blue-300">Python GUI（PySide6、Tkinter）</span>、
          <span className="text-blue-300">C++</span> 與 <span className="text-blue-300">React</span>，
          具備將演算法整合到應用程式的經驗，能快速從概念到產品化。
          我也會利用 Docker、ONNX Runtime 與 PyTorch 進行模型部署，確保跨平台與效能優化。
        </p>
        <p className="text-gray-300 leading-8">
          我喜歡探索新技術並把想法轉換為具體的工具或產品，從
          AI、影像辨識到 Web 前端，都持續學習與實作中。
          未來希望能在更大的舞台上，將技術應用到產業與生活的各個面向。
        </p>
      </div>
    </div>
  );
}
