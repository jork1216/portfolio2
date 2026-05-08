"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectSlideshowProps = {
  className?: string;
  folder: string;
  imageClassName?: string;
  imagePositionClassName?: string;
  imageFiles: string[];
  priority?: boolean;
  projectTitle?: string;
  sizes?: string;
};

export default function ProjectSlideshow({
  className = "relative min-h-[320px] flex-1 overflow-hidden",
  folder,
  imageClassName = "",
  imagePositionClassName = "object-top",
  imageFiles,
  priority = false,
  projectTitle = "Project",
  sizes = "(max-width: 1024px) calc(100vw - 72px), 43vw",
}: ProjectSlideshowProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (imageFiles.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % imageFiles.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [imageFiles.length]);

  if (imageFiles.length === 0) {
    return <div className={className} />;
  }

  return (
    <div className={className}>
      {imageFiles.map((fileName, index) => (
        <Image
          key={`${folder}-${fileName}`}
          src={`/projects/${folder}/${fileName}`}
          alt={`${projectTitle} screenshot ${index + 1}`}
          fill
          sizes={sizes}
          className={`object-cover ${imagePositionClassName} transition-opacity duration-700 ease-in-out ${imageClassName} ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          loading={priority && index === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
