import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  /* ------------------ Typing Effect ------------------ */
  const roles = ["Full Stack Developer", "Graphic Designer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* ------------------ Mouse Glow (Optimized) ------------------ */
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const loop = () => {
      frameRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    loop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  /* ------------------ Typing Logic (Smooth) ------------------ */
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 120);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 60);
    } else if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
      pt-5 sm:pt-5 lg:pt-20
      px-6 sm:px-10 lg:px-16 xl:px-24"
    >
      {/* Mouse Gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(
            600px circle at ${mouseRef.current.x}px ${mouseRef.current.y}px,
            rgba(59,130,246,0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Ambient Blobs */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center text-center lg:text-left">
          
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">
                Full Stack Developer & Designer
              </span>
            </div>

            <h1
              className="font-semibold mb-8 leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="block text-white mb-4">
                Hi, I’m Hasnain
              </span>

              <span className="text-blue-400">
                I’m a{" "}
                <span
                  className="relative text-cyan-400 border-r-2 border-cyan-400 pr-1 whitespace-nowrap
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                >
                  {text}
                </span>
              </span>
            </h1>

            <p
              className="text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0
              text-sm sm:text-base md:text-lg"
            >
              I build scalable web applications and design visually compelling
              digital experiences that blend performance with creativity.
            </p>

            <button
              className="relative px-10 py-4 rounded-lg font-semibold text-white
              bg-gradient-to-r from-blue-500 to-cyan-500
              transition-all duration-300
              hover:shadow-[0_0_35px_rgba(59,130,246,0.9)]"
            >
              Download CV
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-full
                bg-gradient-to-r from-blue-500 to-cyan-500
                blur-2xl opacity-40
                group-hover:opacity-90 transition duration-500"
              />

              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72
                rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-xl"
              >
                <img
                  src="/pfp.webp"
                  alt="Hasnain Abbas"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
