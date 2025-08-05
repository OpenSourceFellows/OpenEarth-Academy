export const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container grid grid-cols-1 gap-12 mx-auto text-center md:grid-cols-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-24 h-24 mb-4 bg-white border-4rounded-full">
            <img
              src="/images/tree.webp"
              alt="Water Conserved Icon"
              className="object-contain "
            />
          </div>
          <p className="mb-2 text-5xl font-bold text-green-900">20</p>
          <p className="text-gray-700">Million Liters of Water Conserved</p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="items-center justify-center w-24 h-24 mb-4 bg-white lex border-4rounded-full">
            <img
              src="/images/changing-life.webp"
              alt="Environmental Partners Icon"
              className="object-contain"
            />
          </div>
          <p className="mb-2 text-5xl font-bold text-green-900">126</p>
          <p className="text-gray-700">Environmental Partners</p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="items-center justify-center w-24 h-24 mb-4 bg-white lex border-4rounded-full">
            <img
              src="/images/partner.webp"
              alt="Industry Partners Icon"
              className="object-contain"
            />
          </div>
          <p className="mb-2 text-5xl font-bold text-green-900">22</p>
          <p className="text-gray-700">Industry Partners</p>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="items-center justify-center w-24 h-24 mb-4 bg-white lex border-4rounded-full">
            <img
              src="/images/volunteer.webp"
              alt="Volunteers Icon"
              className="object-contain"
            />
          </div>
          <p className="mb-2 text-5xl font-bold text-green-900">524</p>
          <p className="text-gray-700">Volunteers</p>
        </div>
      </div>
    </section>
  );
};
