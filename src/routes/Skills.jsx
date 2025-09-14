export default function Skills() {
    const skills = [
      { name:"Python", p:100 },
      { name:"OpenCV", p:100 },
      { name:"Pillow", p:95 }, 
      { name:"ResNext101", p:95 },
      { name:"YOLOV8", p:95 },
      { name:"TensorFlow", p:95 },
      { name:"PyTorch", p:95 },
      { name:"JavaScript", p:90 },
      { name:"CUDA", p:90 },
      { name:"C#", p:85 },
      { name:"CMAKE", p:85 },
      { name:"React", p:80 },
      { name:"Node.js", p:80 },
      { name:"MCP", p:70 },
    ];
    return (
      <div className="tab-content-enter">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 glow-text">技能</h2>
          <div className="space-y-6">
            {skills.map((s,i)=>(
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span>{s.name}</span><span className="text-blue-300">{s.p}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: `${s.p}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  