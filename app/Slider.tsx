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
      <div className="flex flex-col items-center justify-center max-w-4xl gap-0 mx-auto md:flex-row md:gap-8">
        <img
          src={slides[current].image}
          alt={slides[current].imageAlt}
          className="object-cover max-w-full rounded-l-lg md:max-w-lg h-72 md:h-80"
        />
        <div className="bg-[#425b76] text-white p-6 md:p-10 flex-1 rounded-none md:rounded-r-lg w-full md:w-[440px]">
          <p className="mb-3 text-sm font-semibold tracking-widest uppercase opacity-80">
            {slides[current].subheader}
          </p>
          <h3 className="mb-4 text-lg font-bold md:text-2xl">
            {slides[current].title}
          </h3>
          {slides[current].text.map((p, i) => (
            <p className="mb-2" key={i}>
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="flex items-center justify-center w-10 h-10 transition border rounded-full border-slate-400 hover:bg-slate-200"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="flex items-center justify-center w-10 h-10 transition border rounded-full border-slate-400 hover:bg-slate-200"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};
