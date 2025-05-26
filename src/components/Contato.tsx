import {
  MdMailOutline,
  MdMap,
  MdLocationPin,
  MdOutlinePhone,
} from 'react-icons/md';

export function Contato() {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 md:mt-20 sm:mt-8 mb-12 sm:mb-16">
        <div className="uppercase flex items-center justify-start gap-2 mb-8 sm:mb-12">
          <h1 className="text-5xl xl:text-[6rem]/[1.1]">Contato</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d238.6816242885247!2d-49.222588347808696!3d-16.83101930509077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efd0bf3ccf921%3A0x40c0901bf2bc7be0!2sAdicontec%20Ingredientes!5e0!3m2!1sen!2sbr!4v1739886749115!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <MdMailOutline className="bg-brand-cardBackground w-12 h-12 text-brand-white p-2 rounded" />
                <p className="text-xl">parceriasnyx@gmail.com</p>
              </li>
              <li className="flex items-center gap-4">
                <MdOutlinePhone className="bg-brand-cardBackground w-12 h-12 text-brand-white p-2 rounded" />
                <p className="text-xl">(62) 99237-3284</p>
              </li>
              <li className="flex items-center gap-4">
                <MdLocationPin className="bg-brand-cardBackground w-12 h-12 text-brand-white p-2 rounded" />
                <p className="text-xl">Rua Fictícia, n°23</p>
              </li>
              <li className="flex items-center gap-4">
                <MdMap className="bg-brand-cardBackground w-12 h-12 text-brand-white p-2 rounded" />
                <p className="text-xl">Goiania, Goias</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
