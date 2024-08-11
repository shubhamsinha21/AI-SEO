import Button from "@/components/Button";
import starBg from "@/assets/stars.png";

export default function Hero() {
  return (
    <section
      className="h-[492px]  md:h-[700px] flex items-center overflow-hidden relative 
      [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starBg.src})` }}
    >
      {/* overlay */}
      <div
        className="absolute inset-0 
bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"
      ></div>

      {/* planet */}
      <div
        className="absolute h-64 w-64 md:w-96 md:h-96 bg-purple-500 rounded-full border
      border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-[radial-gradient(50%_50%_at_16.8%_18.3%,_white,_rgb(184,148,255)_37.7%,_rgb(24,0,66))]
      shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"
      ></div>

      {/* 1st rings  */}
      <div
        className="absolute h-[344px] w-[344px] md:w-[580px] md:h-[580px] border border-white 
        rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      >
        <div
          className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 
        -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 
        -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2
        -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center"
        >
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* 2nd ring */}
      <div
        className="absolute h-[444px] w-[444px] md:w-[780px] md:h-[780px] rounded-full border border-white/20
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></div>

      {/* 3rd ring */}
      <div
        className="absolute w-[544px] h-[544px] md:w-[980px] md:h-[980px] rounded-full border border-white top-1/2
      left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      >
        <div
          className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 
        -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2
        -translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>

      {/* container */}
      <div className="container relative mt-16">
        <h1
          className="text-8xl md:text-[168px] md:leading-none
           font-semibold tracking-tighter bg-white bg-clip-text text-transparent
         bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgb(74,32,138,0.5))]
        text-center"
        >
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
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
