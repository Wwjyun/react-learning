import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const data = [
      {
        title: "Visual Search Analysis System(VSA)",
        badge: "Python",
        desc: "點對點數據可視化、損耗率、直通率分析系統。",
        tags: ["Python", "OpenCV", "Pillow","JavaScript", "Flask","plotly","Dash"],
        coverClass: "from-blue-500 to-purple-600",
        demo: "#", 
        code: "#",
        readmePath: "/projects/vsa/README.md"
      },
      {
        title: "Database Management System(DMS)",
        badge: "Python",
        desc: "DATABASE後台繪圖分析監測系統",
        tags: ["Python", "PYQT6","Flask",],
        coverClass: "from-purple-500 to-pink-600",
        demo: "#", 
        code: "#",
        readmePath: "/projects/dms/README.md"
      },
      {
        title: "OpenCV-Based(CUDA) Image Processing System(OCIP)",
        badge: "Python",
        desc: "整合運動數據、飲食記錄與健康指標。",
        tags: ["Python", "OpenCV", "Pillow","PyQT6", "CUDA",],
        coverClass: "from-purple-500 to-pink-600",
        demo: "#", 
        code: "#",
        readmePath: "/projects/ocip/README.md"
      },
      {
        title: "AI Training System + AI Inference System",
        badge: "Python",
        desc: "客製化高速物件瑕疵分類系統",
        tags: ["R-CNN","PyTorch","CUDA","PyQT6","ONNX Runtime"],
        coverClass: "from-purple-500 to-pink-600",
        demo: "#", 
        code: "#",
        readmePath: "/projects/ai-classification/README.md"
      },
      {
        title: "AI Training System + AI Inference System",
        badge: "Python",
        desc: "客製化高速物件瑕疵偵測系統",
        tags: ["YOLOV8","PyTorch","CUDA","PyQT6","ONNX Runtime"],
        coverClass: "from-purple-500 to-pink-600",
        demo: "#", 
        code: "#",
        readmePath: "/projects/ai-detection/README.md"
      },
      {
        title: "Depth From Focus System(DFFS)",
        badge: "Python",
        desc: "Line scan高速深度分析系統",
        tags: ["Python","PyQT6","OpenCV","CUDA"],
        coverClass: "from-purple-500 to-pink-600",
        demo: "#", 
        code: "#",
        readmePath: "/projects/dffs/README.md"
      },
      
    ];
  
    return (
      <div className="tab-content-enter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 glow-text">我的<span className="text-blue-400">作品集</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">以下是近期代表性項目。</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((p,i)=>(
              <div 
                key={i} 
                className="project-card code-bg rounded-xl overflow-hidden glow-box cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleProjectClick(p)}
              >
                <div className={`h-48 bg-gradient-to-r ${p.coverClass} flex items-center justify-center`}>
                  <i className="fas fa-laptop-code text-6xl text-white/80"></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl">{p.title}</h3>
                    <span className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded">{p.badge}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t,j)=>(
                      <span key={j} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <a href={p.demo} className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <i className="fas fa-external-link-alt"></i> 查看
                    </a>
                    <a href={p.code} className="text-gray-400 hover:text-gray-300 flex items-center gap-1">
                      <i className="fab fa-github"></i> 代碼
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
        
        {/* Project Modal */}
        <ProjectModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      </div>
    );
  }
  