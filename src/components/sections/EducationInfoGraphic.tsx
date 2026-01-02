import type React from 'react';

const EducationInfoGraphic: React.FC = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="bg-[#596980] text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold uppercase mb-3">EDUCATION INFOGRAPHIC</h2>
            <p className="text-sm mb-4 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean tincidunt condimentum enim nec eleifend.
            </p>
            <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition font-medium uppercase">
              READ MORE
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-40">
              {/* Study desk with items */}
              <div className="absolute right-0 top-0">
                <div className="flex items-center">
                  <div className="text-gray-800 font-bold mr-2">ABC</div>
                  <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white">🍎</span>
                  </div>
                  <div className="text-gray-800 font-bold ml-2">1+2=3</div>
                </div>
              </div>
              {/* Stack of books */}
              <div className="absolute right-8 top-10">
                <div className="w-32 h-6 bg-green-100 border border-green-200 mb-1 rounded-sm"></div>
                <div className="w-32 h-6 bg-yellow-100 border border-yellow-200 mb-1 rounded-sm"></div>
                <div className="w-32 h-6 bg-orange-100 border border-orange-200 rounded-sm"></div>
              </div>
              {/* Desk lamp */}
              <div className="absolute left-0 top-0">
                <div className="w-6 h-16 bg-gray-700 rounded-t-sm"></div>
                <div className="w-10 h-4 bg-gray-600 -mt-2 rounded-t-md"></div>
              </div>
              {/* Coffee mug */}
              <div className="absolute right-0 bottom-0">
                <div className="w-8 h-10 bg-gray-600 rounded-md"></div>
                <div className="w-3 h-6 bg-gray-500 rounded-md ml-8 -mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationInfoGraphic; 