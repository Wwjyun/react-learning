export default function Skills() {
    const skills = [
      { name:"React", p:90 },
      { name:"Python", p:85 },
      { name:"Node.js", p:80 },
      { name:"Tailwind CSS", p:85 },
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
  