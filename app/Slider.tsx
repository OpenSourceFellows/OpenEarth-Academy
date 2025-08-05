"use client";
import { useState } from "react";

type Slide = {
  image: string;
  imageAlt: string;
  subheader: string;
  title: string;
  text: string[];
};

interface SliderProps {
  slides?: Slide[];
}

export const Slider = ({ slides = [] }: SliderProps) => {
  const [current, setCurrent] = useState(0);

  if (!slides.length) {
    return <div>No slides to show.</div>;
  }

  const goToPrev = () =>
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const goToNext = () =>
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">
        OpenEarth Academy Supports Climate Tech Development
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col overflow-hidden shadow-lg md:flex-row">
          {/* Image - Left Half */}
          <div className="w-full md:w-1/2">
            <img
              src={slides[current].image}
              alt={slides[current].imageAlt}
              className="w-full h-full "
              style={{
                minHeight: "320px",
                maxHeight: "620px",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
          </div>

          {/* Text Content - Right Half */}
          <div className="flex flex-col justify-start w-full p-8 text-white md:w-1/2 bg-[#425b76] md:p-12">
            <p className="mb-4 text-xs font-semibold tracking-widest uppercase text-slate-300">
              {slides[current].subheader}
            </p>
            <h3 className="mb-6 text-xl font-bold leading-tight md:text-2xl">
              {slides[current].title}
            </h3>
            <div className="space-y-4 text-sm leading-relaxed md:text-base">
              {slides[current].text.map((paragraph, i) => (
                <p key={i} className="text-slate-100">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="flex items-center justify-center w-12 h-12 transition-colors border rounded-full border-slate-400 hover:bg-slate-200"
        >
          <span className="text-lg">&#8592;</span>
        </button>
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="flex items-center justify-center w-12 h-12 transition-colors border rounded-full border-slate-400 hover:bg-slate-200"
        >
          <span className="text-lg">&#8594;</span>
        </button>
      </div>
    </section>
  );
};
