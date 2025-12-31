import { useState } from "react";
import { ExternalLink, Code, Palette } from "lucide-react";

const webProjects = [
  {
    title: "Software House Website",
    description:
      "Software house website built using html,css,javascript, and bootstrap",
    image: "/web-1.webp",
    liveUrl: "https://fasttechcom.netlify.app/",
  },
  {
    title: "Business Landing Page",
    description: "Responsive landing page for a startup.",
    image: "/projects/landing.png",
    liveUrl: "",
  },
  {
    title: "Dashboard Application",
    description: "Admin dashboard with authentication and charts.",
    image: "/projects/dashboard.png",
    liveUrl: "",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="projects" className="relative py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              My
            </span>{" "}
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A showcase of my work in web development and graphic designing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-5 py-2 rounded-full flex items-center gap-2 font-medium transition ${
              activeTab === "web"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            <Code size={18} />
            Web Development
          </button>

          <button
            onClick={() => setActiveTab("graphic")}
            className={`px-5 py-2 rounded-full flex items-center gap-2 font-medium transition ${
              activeTab === "graphic"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            <Palette size={18} />
            Graphic Designing
          </button>
        </div>

        {/* WEB DEVELOPMENT PROJECTS */}
        {activeTab === "web" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <div
                key={index}
                className="
                  group relative
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-2xl overflow-hidden
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)]
                "
              >
                {/* Image */}
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Action (Desktop) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
        flex items-center gap-2
        px-4 py-2 rounded-lg
        bg-gradient-to-r from-blue-500 to-cyan-500
        text-white font-semibold
        scale-90 opacity-0
        group-hover:scale-100 group-hover:opacity-100
        transition-all duration-300
      "
                    >
                      Open Live
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Mobile Hint */}
                <div className="block sm:hidden text-center text-xs text-cyan-400 py-2">
                  Tap image to open live website
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GRAPHIC DESIGNING — WORK IN PROGRESS */}
        {activeTab === "graphic" && (
          <div className="flex justify-center">
            <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Work in Progress
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                I am currently curating and refining my graphic designing
                projects. This section will be updated soon with selected works
                showcasing branding, creative design, and 3D modeling.
              </p>
            </div>

            {/*
            // Graphic Designing cards will be added here later
            */}
          </div>
        )}
      </div>
    </section>
  );
}
