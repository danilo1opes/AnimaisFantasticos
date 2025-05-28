import { useState, useMemo, useCallback } from 'react';
import { animaisData } from '../Data/AnimalsParagraphs';
import type { FaqProps } from '../interfaces/types';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

export function Introduction({ id }: FaqProps) {
  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState(0);
  const { ref, inFadeIn } = useScrollFadeIn<HTMLDivElement>();

  const animalImages = useMemo(
    () => [
      '/img/bear.jpg',
      '/img/fox.jpg',
      '/img/lion.jpg',
      '/img/monkey.jpg',
      '/img/squirrel.jpg',
      '/img/wolf.jpg',
    ],
    []
  );

  const handleAnimalClick = useCallback((e: React.MouseEvent) => {
    const li = (e.target as HTMLElement).closest('li');
    if (li) {
      const index = Array.from(li.parentElement?.children || []).indexOf(li);
      setSelectedAnimalIndex(index);
    }
  }, []);

  const selectedAnimalData = useMemo(
    () => animaisData[selectedAnimalIndex],
    [selectedAnimalIndex]
  );

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-opacity duration-700 ease-in-out transform ${
        inFadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_2fr] gap-6 px-6 md:px-10 mb-16">
        {/* Título */}
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-5xl max-[320px]:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] mt-8 leading-tight uppercase">
            <span>Animais</span>
            <br />
            <span>Fantásticos</span>
          </h1>
        </div>

        {/* Lista de animais */}
        <div className="md:col-span-2 xl:col-span-1">
          <ul
            className="h-[370px] max-h-[300px] md:max-h-[370px] overflow-auto cursor-pointer border border-brand-cardBorder rounded-lg p-2"
            onClick={handleAnimalClick}
          >
            {animalImages.map((imageSrc, index) => (
              <li
                key={`animal-${index}`}
                className={`flex items-center gap-2 p-2 transition-all rounded-lg ${
                  selectedAnimalIndex === index
                    ? 'bg-brand-cardBorder'
                    : 'hover:bg-brand-surfaceLight'
                }`}
              >
                {/* Lazy loading das imagens */}
                <img
                  className="w-16 h-16 object-cover rounded-lg"
                  src={imageSrc}
                  alt={`${animaisData[index].nome}`}
                  loading="lazy"
                  decoding="async"
                  style={{
                    willChange:
                      selectedAnimalIndex === index ? 'auto' : 'unset',
                  }}
                />
                <span className="text-lg font-semibold capitalize">
                  {animaisData[index].nome}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Descrição do animal */}
        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <section className="bg-brand-gray p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-3 border-b pb-2">
              {selectedAnimalData.nome}
            </h2>
            {selectedAnimalData.descricao.map(
              (paragrafo: string, index: number) => (
                <p
                  key={`paragraph-${index}`}
                  className="text-base leading-relaxed mb-3"
                >
                  {paragrafo}
                </p>
              )
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
