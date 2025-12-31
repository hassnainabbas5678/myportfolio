import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">
                Hasnain
                <span className="text-blue-400">Abbas</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Full Stack Developer & Designer focused on building scalable,
              high-performance web applications with clean and modern UI.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              <a
                href="https://www.linkedin.com/in/hasnain---abbas/"
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>

              <a
                href="mailto:hassnainlilani@gmail.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923352307788"
                target="_blank"
                className="p-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4">Projects</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Web Development</li>
              <li>Graphic Designing</li>
              <li>UI / UX Design</li>
              <li>Full Stack Apps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Email: hassnainlilani@gmail.com</li>
              <li>WhatsApp: +92 335 2307788</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2025 Hasnain Abbas. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Built with <span className="text-white">React</span> &{" "}
            <span className="text-white">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
