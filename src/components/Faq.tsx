import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { questionsData } from '../Data/Questions';
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
    <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1fr gap-6 px-6 md:px-10 mb-16">
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-5xl mt-8 xl:text-[6rem]/[1.1]  uppercase">Faq</h1>
      </div>

      {/* Perguntas e Respostas */}
      <div>
        <div>
          {questionsData.map((item, index) => (
            <dl className="mb-6 md:mt-8" key={index}>
              <dt
                onClick={() => handleClick(index)}
                className="flex justify-between items-center faq-question text-lg text-brand-redSix hover:underline cursor-pointer"
              >
                {item.pergunta}
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </dt>
              <dd
                className={`${
                  activeIndex === index ? 'block' : 'hidden'
                } text-start text-brand-secondary mt-2`}
              >
                {item.resposta}
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </section>
  );
}
