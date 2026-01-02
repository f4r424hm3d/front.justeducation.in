import type React from 'react';
import { Link } from 'react-router-dom';

const NationalImportance: React.FC = () => {
  const institutes = [
    {
      id: 1,
      name: "IIT",
      count: 23,
      bgColor: "bg-blue-600"
    },
    {
      id: 2,
      name: "IIMs",
      count: 21,
      bgColor: "bg-orange-500"
    },
    {
      id: 3,
      name: "AIIMS",
      count: 26,
      bgColor: "bg-blue-600"
    },
    {
      id: 4,
      name: "NITs",
      count: 31,
      bgColor: "bg-orange-500"
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8"> National Institute </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {institutes.map(institute => (
            <Link
              to="#"
              key={institute.id}
              className={`${institute.bgColor} text-white p-6 rounded-lg hover:opacity-90 transition flex flex-col items-center justify-center`}
            >
              <h3 className="text-xl font-semibold text-center mb-2">
                {institute.name}
              </h3>
              <p className="text-center text-lg">{institute.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationalImportance;
