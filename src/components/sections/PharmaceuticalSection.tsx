import type React from 'react';
import { FaArrowRight, FaClinicMedical, FaPills, FaHospital, FaNotesMedical } from 'react-icons/fa';

const PharmaceuticalSection: React.FC = () => {
  // Categories for pharmaceutical services
  const categories = [
    {
      id: 1,
      title: 'Prescription Drugs',
      description: 'Access to prescription medications with expert guidance from licensed pharmacists.',
      icon: <FaPills className="text-teal-500 text-2xl" />
    },
    {
      id: 2,
      title: 'Medical Consultation',
      description: 'Connect with healthcare professionals for medical advice and consultations.',
      icon: <FaClinicMedical className="text-teal-500 text-2xl" />
    },
    {
      id: 3,
      title: 'Hospital Services',
      description: 'Find top-rated hospitals and healthcare facilities for your medical needs.',
      icon: <FaHospital className="text-teal-500 text-2xl" />
    },
    {
      id: 4,
      title: 'Healthcare Resources',
      description: 'Educational materials and resources for understanding medications and treatments.',
      icon: <FaNotesMedical className="text-teal-500 text-2xl" />
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
           Medicine Medical Care & Consultation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Feature Image */}
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden bg-teal-100 p-6 shadow-lg max-w-md">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop"
                alt="Pharmaceutical Pills"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-teal-800">Quality Healthcare Solutions</h3>
                <p className="text-teal-600 mt-2">Connecting you with trusted healthcare providers and medications</p>
              </div>
            </div>
          </div>

          {/* Right side - Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map(category => (
              <div
                key={category.id}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition flex flex-col h-full"
              >
                <div className="mb-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{category.description}</p>
                <button className="flex items-center text-teal-600 mt-4 text-sm font-medium">
                  Learn more <FaArrowRight className="ml-2" size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaceuticalSection;
