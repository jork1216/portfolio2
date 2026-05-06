"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slideFiles = [
  "homepage.png",
  "homepage1.png",
  "productdetail.png",
  "productdetail1.png",
  "checkout.png",
];

type ProjectSlideshowProps = {
  className?: string;
  folder?: string;
  imageClassName?: string;
  imagePositionClassName?: string;
  priority?: boolean;
  projectTitle?: string;
  sizes?: string;
};

export default function ProjectSlideshow({
  className = "relative min-h-[320px] flex-1 overflow-hidden",
  folder = "techhub",
  imageClassName = "",
  imagePositionClassName = "object-top",
  priority = false,
  projectTitle = "Project",
  sizes = "(max-width: 1024px) calc(100vw - 72px), 43vw",
}: ProjectSlideshowProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slideFiles.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={className}>
      {slideFiles.map((fileName, index) => (
        <Image
          key={`${folder}-${fileName}`}
          src={`/projects/${folder}/${fileName}`}
          alt={`${projectTitle} screenshot ${index + 1}`}
          fill
          sizes={sizes}
          className={`object-cover ${imagePositionClassName} transition-opacity duration-700 ease-in-out ${imageClassName} ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          priority={priority && index === 0}
        />
      ))}
    </div>
  );
}
