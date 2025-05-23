import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { questionsData } from '@/Data/Questions';

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleClick(index: number) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 md:mt-20 sm:mt-8 mb-12 sm:mb-16">
      {/* Título */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-5xl mt-12 sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] leading-tight uppercase">
          Faq
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {questionsData.map((item, index) => (
          <div
            key={index}
            className="border-b border-brand-surfaceLight pb-4 sm:pb-6 last:border-b-0"
          >
            {/* Pergunta */}
            <button
              onClick={() => handleClick(index)}
              className="w-full flex justify-between items-center gap-4 text-left faq-question text-lg sm:text-lg md:text-xl text-brand-redSix hover:underline cursor-pointer transition-colors duration-200"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="pr-4 flex-1">{item.pergunta}</span>
              <FaChevronDown
                className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-1 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Resposta */}
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? 'max-h-96 opacity-100 mt-3 sm:mt-4'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-base sm:text-base md:text-lg text-brand-secondary leading-relaxed pl-0 sm:pl-2">
                {item.resposta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
