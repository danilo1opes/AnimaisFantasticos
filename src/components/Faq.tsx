import { questionsData } from '../Data/Questions';
export function Faq() {
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
              <dt className=" flex justify-between items-center faq-question text-lg text-brand-redSix hover:underline cursor-pointer">
                {item.pergunta}
              </dt>
              <dd className="text-start text-brand-secondary">
                {item.resposta}
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </section>
  );
}
