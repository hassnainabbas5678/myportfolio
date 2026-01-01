import { useEffect, useRef, useState } from "react";

const skills = {
  frontend: [
    { name: "HTML5", level: 100, color: "from-orange-400 to-orange-600" },
    { name: "CSS3", level: 100, color: "from-blue-400 to-blue-600" },
    { name: "Bootstrap", level: 100, color: "from-purple-400 to-purple-600" },
    { name: "Tailwind CSS", level: 85, color: "from-cyan-400 to-cyan-600" },
    { name: "JavaScript", level: 90, color: "from-yellow-300 to-yellow-500" },
    { name: "TypeScript", level: 10, color: "from-blue-500 to-blue-700" },
    { name: "React.js", level: 80, color: "from-sky-400 to-sky-600" },
    { name: "Next.js", level: 75, color: "from-gray-500 to-gray-600" },
  ],
  backend: [
    { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
    { name: "Express.js", level: 70, color: "from-gray-300 to-gray-500" },
    { name: "MongoDB", level: 95, color: "from-green-500 to-green-700" },
  ],
  tools: [
    { name: "Git", level: 100, color: "from-orange-400 to-orange-600" },
    { name: "WordPress", level: 0, color: "from-blue-400 to-blue-600" },
    { name: "Figma", level: 100, color: "from-pink-400 to-pink-600" },
    { name: "Netlify", level: 100, color: "from-teal-400 to-teal-600" },
    { name: "Database Design", level: 90, color: "from-sky-400 to-sky-600" },
  ],
};

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400">
            My Skills
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A visual overview of my proficiency across technologies and tools.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCard title="Frontend Development" data={skills.frontend} animate={animate} />
          <SkillCard title="Backend Development" data={skills.backend} animate={animate} />
          <SkillCard title="Tools & Others" data={skills.tools} animate={animate} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, data, animate }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>

      <div className="space-y-5">
        {data.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-300">{skill.name}</span>
              <span className="text-sm text-gray-400">
                {animate ? skill.level : 0}%
              </span>
            </div>

            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full 
                transition-all duration-1000 ease-out`}
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                  boxShadow: animate
                    ? "0 0 12px rgba(59,130,246,0.8), 0 0 24px rgba(34,211,238,0.4)"
                    : "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
