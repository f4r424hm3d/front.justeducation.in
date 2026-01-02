import type React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const UniversityPage: React.FC = () => {
    const navigate = useNavigate();
    const prefetchedRef = useRef(false);
    
    // Function to handle prefetching when user hovers
    const handlePrefetch = useCallback(() => {
        if (!prefetchedRef.current) {
            prefetchedRef.current = true;
            console.log("Prefetching university details data");
        }
    }, []);
    
    // Function to handle direct navigation without waiting
    const handleViewDetails = useCallback((e: React.MouseEvent, id: number) => {
        e.preventDefault();
        navigate(`/university/${id}`);
    }, [navigate]);

    // Sample university data with detailed information
    const universities = [
        {
            id: 1,
            name: 'Delhi University',
            shortName: 'DU',
            location: 'Delhi',
            established: '1922',
            students: '400,000+',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            information: 'Delhi University is one of the premier universities in India, established in 1922. Known for its academic excellence and diverse range of undergraduate and postgraduate courses, DU offers programs in Arts, Science, Commerce, Law, and Management. The university has numerous affiliated colleges spread across Delhi and is recognized for its vibrant campus life, distinguished faculty, and strong alumni network. With over 400,000 students, DU continues to be a preferred destination for higher education in India.'
        },
        {
            id: 2,
            name: 'Jawaharlal University',
            shortName: 'JNU',
            location: 'New Delhi',
            established: '1969',
            students: '8,000+',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            information: 'Jawaharlal Nehru University (JNU) is a public central university located in New Delhi, established in 1969. JNU is known for its research-oriented approach and excellence in social sciences, languages, and international studies. The university offers undergraduate, postgraduate, and doctoral programs across various disciplines. JNU has been consistently ranked among the top universities in India and is renowned for its vibrant academic environment, diverse student community, and active participation in national and international academic discourse.'
        },
        {
            id: 3,
            name: 'Banaras Hindu Uni.',
            shortName: 'BHU',
            location: 'Varanasi',
            established: '1916',
            students: '30,000+',
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            information: 'Banaras Hindu University (BHU) is a prestigious central university located in Varanasi, Uttar Pradesh, established in 1916. BHU is one of the largest residential universities in Asia and offers a wide range of courses in Arts, Science, Commerce, Engineering, Medical Sciences, Agriculture, and many other fields. The university is known for its rich cultural heritage, magnificent architecture, and excellent academic standards. With a sprawling campus spread over 1300 acres, BHU provides world-class facilities and has produced numerous distinguished alumni.'
        },
        {
            id: 4,
            name: 'IIT Mumbai',
            shortName: 'IITB',
            location: 'Mumbai',
            established: '1958',
            students: '10,000+',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            information: 'Indian Institute of Technology Bombay (IIT Bombay) is one of the premier engineering institutions in India, established in 1958. Located in Powai, Mumbai, IITB is known for its excellence in engineering, technology, and scientific research. The institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, sciences, design, and management. IIT Bombay has consistently been ranked among the top engineering colleges in India and has a strong industry connection with excellent placement records.'
        },
        {
            id: 5,
            name: 'Anna University',
            shortName: 'AU',
            location: 'Chennai',
            established: '1978',
            students: '20,000+',
            rating: 4.4,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            information: 'Anna University is a public state university located in Chennai, Tamil Nadu, established in 1978. Named after former Chief Minister C. N. Annadurai, the university is primarily focused on engineering and technology education. Anna University offers undergraduate, postgraduate, and doctoral programs in engineering, technology, architecture, and applied sciences. The university is known for its research activities, industry collaborations, and has multiple campuses across Tamil Nadu. It plays a crucial role in technical education in South India.'
        },
        {
            id: 6,
            name: 'Osmania University',
            shortName: 'OU',
            location: 'Hyderabad',
            established: '1918',
            students: '30,000+',
            rating: 4.3,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            information: 'Osmania University is a public state university located in Hyderabad, Telangana, established in 1918. It is one of the oldest modern universities in India and was the first to have Urdu as a medium of instruction. The university offers courses in Arts, Science, Commerce, Law, Engineering, Medicine, and many other disciplines. Osmania University has a historic campus with beautiful architecture and has been a center of higher education in the Deccan region. The university is known for its diverse academic programs and cultural heritage.'
        },
        {
            id: 7,
            name: 'Jadavpur University',
            shortName: 'JU',
            location: 'Kolkata',
            established: '1955',
            students: '12,000+',
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            information: 'Jadavpur University is a public state university located in Kolkata, West Bengal, established in 1955. The university is well-known for its engineering, arts, and science programs. JU has consistently been ranked among the top universities in India and is particularly renowned for its engineering and technology courses. The university has a strong research culture and offers undergraduate, postgraduate, and doctoral programs across various disciplines. Jadavpur University is known for its academic excellence, vibrant campus life, and notable alumni in various fields.'
        },
        {
            id: 8,
            name: 'Panjab University',
            shortName: 'PU',
            location: 'Chandigarh',
            established: '1947',
            students: '15,000+',
            rating: 4.1,
            image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            information: 'Panjab University is a public collegiate university located in Chandigarh, established in 1947. The university was originally located in Lahore but was re-established in Chandigarh after partition. PU offers a wide range of undergraduate, postgraduate, and doctoral programs in various fields including Arts, Science, Commerce, Law, Engineering, and Medicine. The university has a beautiful campus designed by Pierre Jeanneret and is known for its academic excellence, research activities, and cultural programs. It serves as an important center of higher education in North India.'
        }
    ];

    // Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const universitiesPerPage = 8;
    
    // Filter universities based on search
    const filteredUniversities = universities.filter(uni =>
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const totalPages = Math.ceil(filteredUniversities.length / universitiesPerPage);
    const startIdx = (currentPage - 1) * universitiesPerPage;
    const endIdx = startIdx + universitiesPerPage;
    const currentUniversities = filteredUniversities.slice(startIdx, endIdx);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    // Function to truncate text to 3 lines
    const truncateText = (text: string, maxLength: number = 105) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section with Background Image */}
                <div 
                    className="relative  text-white py-12"
                    style={{
                        backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20240707/pngtree-blue-red-banner-on-black-background-image_15990916.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Find Your Perfect University</h1>
                        <p className="text-lg md:text-xl mb-6">Discover top universities across India and make an informed decision for your future</p>

                        {/* Search Bar */}
                        <div className="max-w-2xl">
                            <div className="flex items-center bg-white rounded-lg shadow-lg p-1">
                                <input
                                    type="text"
                                    placeholder="Search universities by name or location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="flex-1 px-3 py-2 text-gray-800 focus:outline-none text-sm"
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="container mx-auto px-4 py-6">
                    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Location</option>
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="chennai">Chennai</option>
                                <option value="kolkata">Kolkata</option>
                            </select>
                            <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Course Type</option>
                                <option value="engineering">Engineering</option>
                                <option value="medical">Medical</option>
                                <option value="arts">Arts</option>
                                <option value="science">Science</option>
                                <option value="commerce">Commerce</option>
                            </select>
                            <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">University Type</option>
                                <option value="central">Central</option>
                                <option value="state">State</option>
                                <option value="private">Private</option>
                                <option value="deemed">Deemed</option>
                            </select>
                            <select className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Sort By</option>
                                <option value="rating">Rating</option>
                                <option value="students">Students</option>
                                <option value="established">Established</option>
                            </select>
                        </div>
                    </div>

                    {/* Universities Grid */}
                    <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 md:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {currentUniversities.map(university => (
                                <div
                                    key={university.id}
                                    className="relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition group flex flex-col"
                                >
                                    {/* Top Rated Badge */}
                                    {university.rating >= 4.7 && (
                                        <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:bg-blue-600 transition">Top Rated</span>
                                    )}
                                    <div className="h-32 bg-gray-200 relative">
                                        <img
                                            src={university.image}
                                            alt={university.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1">
                                            {university.shortName}
                                        </div>
                                    </div>
                                    <div className="p-3 flex flex-col flex-grow">
                                        <h3 className="text-base font-semibold mb-2 text-gray-800">{university.name}</h3>
                                        
                                        {/* Location, Rating, Established in one line */}
                                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                                            <div className="flex items-center">
                                                <FaMapMarkerAlt className="mr-1 text-gray-500" />
                                                <span>{university.location}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaStar className="mr-1 text-yellow-400" size={10} />
                                                <span>{university.rating}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaCalendarAlt className="mr-1 text-gray-500" />
                                                <span>Est. {university.established}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Information Section */}
                                        <div className="mb-3 flex-grow">
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                {truncateText(university.information)}
                                                {university.information.length > 155 && (
                                                    <button
                                                        onClick={(e) => handleViewDetails(e, university.id)}
                                                        onMouseEnter={handlePrefetch}
                                                        className="text-blue-600 text-xs font-medium ml-1 hover:text-blue-700 transition inline"
                                                    >
                                                        More
                                                    </button>
                                                )}
                                            </p>
                                        </div>
                                        
                                        <button
                                            onClick={(e) => handleViewDetails(e, university.id)}
                                            onMouseEnter={handlePrefetch}
                                            className="block w-full py-1.5 bg-blue-600 text-white rounded text-center font-medium text-xs hover:bg-blue-700 transition mt-auto"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-6">
                                <nav className="inline-flex items-center space-x-1">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`px-2 py-1 rounded text-xs border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-600'}`}
                                    >
                                        Previous
                                    </button>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => handlePageChange(i + 1)}
                                            className={`px-2 py-1 rounded text-xs border ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className={`px-2 py-1 rounded text-xs border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-600'}`}
                                    >
                                        Next
                                    </button>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default UniversityPage; 