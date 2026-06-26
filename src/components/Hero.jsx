import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import bg1 from "../assets/le-bg1.jpeg";
import bg2 from "../assets/le-bg2.jpeg";


const backgrounds = [bg1, bg2];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section
      className="relative min-h-[500px] flex items-center bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgrounds[current]})`,
      }}
    >
      {/* Dark Overlay */}
      {/* Content */}
      
      <div className="absolute inset-0 bg-black/50" />
    </section>

  );
}