import type React from 'react';
import { Link } from 'react-router-dom';

const colleges = [
  {
    id: 1,
    name: "St. Xavier College",
    image: "https://www.sxuk.edu.in/img/SXUK-Crest.jpg"
  },
  {
    id: 2,
    name: "Loyola College",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIbeO8BygwjhSSLvsOWNebbKCuF-r8PiWMQ&s"
  },
  {
    id: 3,
    name: "Presidency College",
    image: "https://cdn.universitykart.com//Content/upload/admin/noi543jn.zpm.png"
  },
  {
    id: 4,
    name: "Fergusson College",
    image: "https://png.pngtree.com/png-vector/20201116/ourmid/pngtree-college-icon-design-png-image_2457887.jpg"
  },
  {
    id: 5,
    name: "DPS College",
    image: "https://img.favpng.com/22/23/18/delhi-public-school-r-k-puram-delhi-public-school-society-central-board-of-secondary-education-delhi-public-school-gandhinagar-png-favpng-4gEEhNzdbrMPrVxVmruUS1vW1.jpg"
  },
  {
    id: 6,
    name: "DAV College",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuss-7D7Hycmy_2KwQfW0KcAEWP0-opbbVeg&s"
  }
];

const Colleges: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Top-Ranked Colleges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {colleges.map(college => (
            <Link
              to={`/college/${college.id}`}
              key={college.id}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all cursor-pointer">
              <div className="w-20 h-20 mb-3 overflow-hidden rounded-full border-2 border-gray-50 shadow-inner">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-center text-base font-semibold text-gray-800">{college.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colleges; 