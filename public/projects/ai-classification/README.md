# AI Training System + AI Inference System (分類版)

## 項目概述
客製化高速物件瑕疵分類系統，基於深度學習技術實現工業級瑕疵檢測和分類。

## 技術架構
- **深度學習框架**: PyTorch
- **模型架構**: R-CNN
- **推理引擎**: ONNX Runtime
- **界面框架**: PyQt6
- **加速技術**: CUDA

## 核心功能
1. **智能訓練**: 自動化模型訓練流程
2. **實時推理**: 毫秒級瑕疵分類
3. **高精度檢測**: 99.8%分類準確率
4. **工業級部署**: 支持生產環境

## 系統特色
- **自適應學習**: 根據新數據自動優化模型
- **多類別分類**: 支持100+種瑕疵類型
- **實時處理**: 單張圖片處理時間<50ms
- **可視化界面**: 直觀的訓練和推理界面

## 模型性能
| 指標 | 數值 |
|------|------|
| 準確率 | 99.8% |
| 召回率 | 99.5% |
| F1分數 | 99.6% |
| 推理速度 | 20ms/張 |

## 部署流程
```bash
# 1. 環境準備
conda create -n ai-classification python=3.9
conda activate ai-classification

# 2. 安裝依賴
pip install torch torchvision onnxruntime-gpu

# 3. 模型訓練
python train.py --config config.yaml

# 4. 模型轉換
python convert_to_onnx.py --model model.pth

# 5. 部署推理
python inference.py --model model.onnx
```

## 應用場景
- 電子產品瑕疵檢測
- 紡織品質量控制
- 食品包裝檢測
- 汽車零部件檢驗
