import Button from "@/components/Button";
import starBg from "@/assets/stars.png";

export default function Hero() {
  return (
    <section
      className="h-[492px] flex items-center"
      style={{ backgroundImage: `url(${starBg.src})` }}
    >
      <div className="container">
        <h1
          className="text-8xl font-semibold tracking-tighter bg-white bg-clip-text text-transparent
         bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgb(74,32,138,0.5))] text-center"
        >
          AI SASS
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          AI SaaS (Software as a Service) refers to cloud-based applications
          that utilize artificial intelligence to provide services such as data
          analysis, automation, and machine learning.
        </p>

        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
}
