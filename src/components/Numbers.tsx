import { AiOutlinePercentage } from 'react-icons/ai';
import { HiOutlineHashtag } from 'react-icons/hi';
import { numbersData } from '../Data/NumbersData';
import { useInView } from 'react-intersection-observer';
import { useCountUpOnView } from '../hooks/useCountUpOnView';

export function Numbers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref}>
      <div className="uppercase flex items-center justify-start gap-2">
        <HiOutlineHashtag className="ml-6 w-6 h-6 md:w-10 md:h-10 text-brand-red" />
        <h1 className="text-5xl max-[320px]:text-4xl xl:text-[6rem]/[1.1]">
          Numeros
        </h1>
      </div>

      <div className="grid ml-6 md:grid-cols-2 mt-8 gap-6">
        {numbersData.map((item) => {
          const numericValue =
            typeof item.value === 'string'
              ? parseInt(item.value.replace(/,/g, ''))
              : item.value;

          const current = useCountUpOnView(numericValue, inView, 1500);

          return (
            <div
              key={item.id}
              className="flex flex-col bg-brand-white p-6 rounded-md shadow-lg w-[94%]"
            >
              <div className="flex items-center gap-2">
                {item.icon ? (
                  <item.icon
                    size={20}
                    className={item.color || 'text-brand-red'}
                  />
                ) : (
                  <AiOutlinePercentage size={20} className="text-brand-red" />
                )}
                <h1 className="text-3xl uppercase">{item.title}</h1>
              </div>
              <p className="text-4xl text-brand-red font-light mt-2">
                {current.toLocaleString('pt-BR')}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
