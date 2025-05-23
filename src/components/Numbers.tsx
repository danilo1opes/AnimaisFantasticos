import { AiOutlinePercentage } from 'react-icons/ai';
import { HiOutlineHashtag } from 'react-icons/hi';
import { numbersData } from '@/data/NumbersData';

export function Numbers() {
  return (
    <>
      <section>
        <div className="uppercase flex items-center justify-start gap-2">
          <HiOutlineHashtag className="ml-6 w-6 h-6 md:w-10 md:h-10 text-brand-red" />
          <h1 className="text-5xl xl:text-[6rem]/[1.1]">Numeros</h1>
        </div>

        <div className="grid ml-6 md:grid-cols-2 mt-8 gap-6">
          {numbersData.map((item) => (
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
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
