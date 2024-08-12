import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export default function Footer() {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="w-6 h-6" />
            <div className="font-medium">AI SEO</div>
          </div>
          <div>
            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                About
              </a>
              <a
                href="#features"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Testimonials
              </a>
            </nav>
          </div>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <a href="https://www.instagram.com/">
              <InstaSocial className="text-white/40 hover:text-white transition" />
            </a>
            <a href="https://x.com/?lang=en">
              <XSocial className="text-white/40 hover:text-white transition" />
            </a>
            <a href="https://www.youtube.com/">
              <YTSocial className="text-white/40 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
