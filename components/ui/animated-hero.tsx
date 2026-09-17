import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";

function HandwrittenUnderline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8.5C20 3.5 60 2 100 5.5C140 9 180 7 198 4"
        stroke="#29ABE2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["iconic", "unstoppable", "magnetic", "unforgettable", "smarter"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 -z-10">
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse blur-sm"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-1/6 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-0 right-1/6 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse blur-sm" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex gap-6 md:gap-8 py-16 md:py-20 lg:py-40 items-center justify-center flex-col">
         
          <div className="flex gap-4 flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-black font-[800] ">Make your business</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 md:pb-4 pt-1 md:pt-1 text-4xl sm:text-4xl md:text-5xl lg:text-7xl">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-[#29ABE2]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4">
            Marketing that connects, brands people remember, websites that convert, and AI that actually works.<br className="md:hidden" /> Crafted by real humans,{" "}
            <span className="relative inline-block">
              <span className="font-semibold text-gray-900">not AI slop.</span>
              <HandwrittenUnderline className="absolute -bottom-1 left-0 w-full h-3" />
            </span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 w-full max-w-md px-4 mt-8 md:mt-0">
            <a href="#services" className="md:hidden">
              <Button size="lg" variant="outline" className="rounded-full border-2 border-[#0071BC] text-[#0071BC] hover:bg-[#0071BC]/5">
                Explore our services
              </Button>
            </a>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ01oD-PXnxFpUPT2V5HC9Zt_zVJVOrjrISIUFOJnTj12lIWoUAI7gRwzY7f8FEpnCcVdpXweDU8" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-4 bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-white text-xl rounded-full" >
                Get a free consultation <PhoneCall className="w-4 h-4" />
              </Button>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };