import { GraduationCap, School, Award, University } from "lucide-react";

const aboutCards = [
  {
    icon: School,
    title: "Schooling",
    subtitle: "Foundation",
    description:
      "I completed my Matriculation from BVS in 2023, securing 84.1%. During my school years, I developed a strong academic foundation in science and mathematics, which enhanced my logical reasoning and problem-solving abilities. This phase played a crucial role in shaping my discipline, consistency, and early interest in technology, preparing me for advanced studies in the field of computer science."
  },
  {
    icon: GraduationCap,
    title: "College",
    subtitle: "Technical Growth",
    description:
      "I completed my Intermediate education from Aga Khan Higher Secondary School between 2023 and 2025, achieving 86.9%. During this period, I strengthened my analytical thinking and gained deeper exposure to technical concepts. My college journey helped refine my understanding of logical structures, critical thinking, and academic discipline, while also reinforcing my passion for computing and software development.",
  },
  {
    icon: University,
    title: "University",
    subtitle: "Currently Enrolled",
    description:
      "I am currently pursuing a Bachelor’s degree in Computer Science (CS) from FAST University (2025–2029). My university education is focused on software engineering principles, full stack development, data structures, and modern computing technologies.",
  },
  {
    icon: Award,
    title: "Diplomas & Certifications",
    subtitle: "Professional Skills",
    description:
      "I have completed Graphic Designing and 3D Interior & Exterior Modelling courses from Arena Multimedia and am currently in my 5th semester of the Advanced Diploma in Software Engineering (ADSE) from APTECH. Alongside this, I continuously improve my coding skills through self-learning using online resources and YouTube tutorials.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 lg:px-10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-cyan-500/5" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A quick overview of my academic background, professional growth, and
            continuous learning journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="
                  group relative
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-2xl p-6
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-blue-500/10 to-cyan-500/10
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                  "
                />

                <div className="relative">
                  <div
                    className="
                      w-12 h-12 rounded-xl mb-5
                      flex items-center justify-center
                      bg-gradient-to-br from-blue-500 to-cyan-500
                      text-white
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <span className="text-cyan-400 text-xs uppercase tracking-wider">
                    {card.subtitle}
                  </span>

                  <h3 className="text-xl font-semibold text-white mt-1 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
