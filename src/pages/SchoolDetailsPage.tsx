import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar, FaEnvelope, FaSchool, FaCheckCircle, FaGraduationCap, FaTimes, FaVideo, FaWhatsapp, FaImage, FaChevronUp, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';
import api from '../Api';

// Custom CSS for the horizontal scrollable menu
const styles = {
  hideScrollbar: `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `
};

// Media item interface
interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  thumbnail?: string;
}

interface schoolDetails {
  id: number;
  organization_name: string;
  city: string;
  established: string;
  students: string;
  rating: number;
  image: string;
  state: string;
  type: string;
  description: string;
  country: string;
  eligibility: string[];
  facilities: string[];
  phone: string;
  email: string;
  website: string;
  logo: string;
  banner: string;
  food_options: string;
}

interface OrganizationFacility {
  id: number;
  facility: string;
  created_at: string;
  updated_at: string;
}

interface OrganizationFacilityResponse {
  data: OrganizationFacility[];
}

interface Type {
  id: number;
  type: string;
  business_category: number;
  created_at: string; // ISO Date string
  updated_at: string; // ISO Date string
}

interface Ownership {
  id: number;
  ownership: string;
  business_category: string | null;
  created_at: string;  // ISO Date string
  updated_at: string;  // ISO Date string
}

interface EducationBoard {
  id: number;
  board: string;
  business_category: string | null; // null or string if later mapped to a category
  created_at: string;  // ISO Date string
  updated_at: string;  // ISO Date string
}

interface Affiliation {
  id: number;
  affiliation: string;
  business_category: number;
  created_at: string;   // ISO Date string
  updated_at: string;   // ISO Date string
}

interface SchoolClass {
  id: number;
  class: string;                 // e.g., "Todler"
  business_category: number | null; // If API later sends an ID, keep number | null
  created_at: string;            // ISO Date string
  updated_at: string;            // ISO Date string
}

interface EducationLevel {
  id: number;
  level_name: string;
  level_slug: string;
  short_name: string;
  short_slug: string;
  seo_name: string | null;
  seo_slug: string | null;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

interface EducationLevelResponse {
  data: EducationLevel[];
}

interface OrganizationOverview {
  id: number;
  title: string;
  description: string;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationOverviewResponse {
  data: OrganizationOverview[];
}

interface OrganizationAdmission {
  id: number;
  title: string;
  description: string;
  file_name: string | null;
  file_path: string | null;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationAdmissionResponse {
  data: OrganizationAdmission[];
}

interface OrganizationFeeStructure {
  id: number;
  class: string;
  session: string;
  admission_fee: string;
  tuition_fee: string;
  miscellaneous_fee: string;
  total_fee: string;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationFeeStructureResponse {
  data: OrganizationFeeStructure[];
}

interface OrganizationAlumni {
  id: number;
  name: string;
  batch: string;
  designation: string;
  address: string | null;
  photo_name: string | null;
  photo_path: string | null;
  quote: string;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationAlumniResponse {
  data: OrganizationAlumni[];
}

interface OrganizationNews {
  id: number;
  title: string;
  description: string;
  file_name: string | null;
  file_path: string | null;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationNewsResponse {
  data: OrganizationNews[];
}

interface OrganizationCareer {
  id: number;
  designation: string;
  slug: string;
  no_of_position: string;
  experience: string;
  location: string;
  roles: string | null;
  description: string;
  last_date: string;
  job_type: string;
  status: number;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationCareerResponse {
  data: OrganizationCareer[];
}

interface OrganizationContact {
  id: number;
  title: string | null;
  address: string;
  emails: string;
  phones: string;
  fax: string;
  website: string;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationContactResponse {
  data: OrganizationContact[];
}

interface OrganizationCurriculum {
  id: number;
  title: string;
  description: string;
  file_name: string | null;
  file_path: string | null;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationCurriculumResponse {
  data: OrganizationCurriculum[];
}

interface OrganizationPhoto {
  photo: string;
  title: string | null;
  alt_text: string | null;
}

interface OrganizationPhotoCategory {
  category_name: string;
  photos: OrganizationPhoto[];
}

interface OrganizationPhotosResponse {
  data: OrganizationPhotoCategory[];
}

interface OrganizationFeaturedPost {
  id: number;
  title: string;
  description: string;
  file_name: string | null;
  file_path: string | null;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationFeaturedPostResponse {
  data: OrganizationFeaturedPost[];
}

interface OrganizationFAQ {
  id: number;
  question: string;
  answer: string;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationFAQResponse {
  data: OrganizationFAQ[];
}

interface OrganizationVideo {
  id: number;
  organization_id: number;
  category_id: number;
  title: string;
  link: string;
  created_at: string;
  updated_at: string;
}

interface OrganizationVideosResponse {
  data: OrganizationVideo[];
}

interface OrganizationTiming {
  id: number;
  day: string;
  open_time: string | null;
  close_time: string | null;
  is_closed: number;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationTimingsResponse {
  data: OrganizationTiming[];
}

interface OrganizationFeaturedPhoto {
  id: number;
  alt_text: string;
  photo: string;
  organization_id: number;
  created_at: string;
  updated_at: string;
}

interface OrganizationFeaturedPhotosResponse {
  data: OrganizationFeaturedPhoto[];
}

interface OrganizationProgram {
  id: number;
  program_name: string;
  program_slug: string;
  application_start_date: string;
  application_end_date: string;
  entrance_exam: string;
  entrance_exam_score: string;
  eligibility: string;
  seats: string | null;
  application_fee: string | null;
  tuition_fee: number;
  total_tuition_fee: number;
  currency: string;
  duration: string;
  program_type: string;
  medium_of_instruction: string;
  brochure_path: string | null;
  fee_structure_path: string | null;
  level_id: number;
  course_category_id: number;
  specialization_id: number;
  organization_id: number;
  created_at: string;
  updated_at: string;
  level: {
    id: number;
    level_name: string;
  };
  category: {
    id: number;
    category_name: string;
  };
  specialization: {
    id: number;
    specialization_name: string;
  };
}

interface OrganizationProgramsResponse {
  data: OrganizationProgram[];
}



const SchoolDetailsPage: React.FC = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add style to head on component mount
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles.hideScrollbar;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Scroll indicator states
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  // Handle scroll indicators visibility
  const handleTabsScroll = () => {
    if (tabsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsScrollRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Handle scroll button clicks
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsScrollRef.current) {
      const scrollAmount = 200;
      tabsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Easing function for smooth animation fallback
  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  // Function to handle tab change with smooth scroll to content below menu
  const handleTabChange = (tab: string) => {
    setActiveTab(activeTab === tab ? null : tab);
    
    // Smooth scroll to the main content area below the tab menu
    setTimeout(() => {
      // Target the main content container that starts after the tab menu
      const mainContent = document.querySelector('.container.mx-auto.px-2');
      if (mainContent) {
        // Get the position of the main content relative to the viewport
        const rect = mainContent.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Account for sticky tab menu height and add small offset
        const headerOffset = window.innerWidth < 640 ? 120 : 120; // Account for sticky header + tab menu
        const targetPosition = rect.top + scrollTop - headerOffset;
        
        // Use smooth scrolling with fallback for older browsers
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({ 
            top: targetPosition, 
            behavior: 'smooth' 
          });
        } else {
          // Fallback for browsers that don't support smooth scrolling
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 500; // 500ms animation
          let start: number | null = null;
          
          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };
          
          requestAnimationFrame(animation);
        }
      } else {
        // Fallback: scroll to a position that shows the content below the tab menu
        const tabMenuHeight = 120; // Approximate height of sticky header + tab menu
        window.scrollTo({ 
          top: tabMenuHeight, 
          behavior: 'smooth' 
        });
      }
    }, 100); // Small delay to ensure tab content is rendered
  };

  useEffect(() => {
    const tabsEl = tabsScrollRef.current;
    if (tabsEl) {
      tabsEl.addEventListener('scroll', handleTabsScroll);
      // Check initial state
      handleTabsScroll();
      // Check after content might have changed
      setTimeout(handleTabsScroll, 500);
    }

    return () => {
      if (tabsEl) {
        tabsEl.removeEventListener('scroll', handleTabsScroll);
      }
    };
  }, []);

  // This would typically come from an API
  const school = {
    id: 1,
    name: 'Delhi Public School',
    location: 'Delhi',
    established: '1949',
    students: '5,000+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    board: 'CBSE',
    type: 'Private',
    description: 'Delhi Public School is one of the most prestigious schools in India, known for its academic excellence, holistic development, and world-class facilities. The school offers a nurturing environment for students from kindergarten to grade 12.\n\nFor 12th class admissions, students can choose from Science, Commerce, and Arts streams, each with specific eligibility and requirements.',
  
   // Add a hero background image
    heroBackground: 'https://edunext-main-storage-cf.edunexttechnologies.com/dpsdehradun/school___static/1690881981141_slider01.jpg?auto=format&fit=crop&w=1600&q=80'
  };

  // Media gallery data
  const mediaGallery: MediaItem[] = [
    { type: 'image', src: school.heroBackground, alt: 'School Campus' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80', alt: 'Students' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', alt: 'Campus Grounds' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', alt: 'Library' },
    { type: 'video', src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', alt: 'School Tour Video', thumbnail: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80', alt: 'Classroom' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=400&q=80', alt: 'Sports Ground' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=400&q=80', alt: 'Laboratory' },
    { type: 'video', src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4', alt: 'Student Activities', thumbnail: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80', alt: 'Auditorium' }
  ];

  // Media modal states
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Course details modal state
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Most Preferred Specialization modal state
  const [showSpecializationModal, setShowSpecializationModal] = useState(false);
  const [selectedSpecializationCourse, setSelectedSpecializationCourse] = useState<string | null>(null);

  // Generate media gallery from organization photos
  const generateMediaGallery = () => {
    const gallery: MediaItem[] = [];
    
    // Add static media items first
    gallery.push(...mediaGallery);
    
    // Add organization photos
    organizationPhotos.forEach((category) => {
      category.photos.forEach((photo) => {
        gallery.push({
          type: 'image',
          src: `https://justeducation.britannicaoverseas.com${photo.photo}`,
          alt: photo.alt_text || photo.title || category.category_name
        });
      });
    });
    
    return gallery;
  };

  // Open media modal
  const openMediaModal = (index: number) => {
    setCurrentMediaIndex(index);
    setMediaModalOpen(true);
    setIsVideoPlaying(false);
  };

  // Close media modal
  const closeMediaModal = () => {
    setMediaModalOpen(false);
    setIsVideoPlaying(false);
  };

  // Navigate to previous media
  const goToPrevious = () => {
    setCurrentMediaIndex((prev) => {
      const dynamicGallery = generateMediaGallery();
      return prev === 0 ? dynamicGallery.length - 1 : prev - 1;
    });
    setIsVideoPlaying(false);
  };

  // Navigate to next media
  const goToNext = () => {
    setCurrentMediaIndex((prev) => {
      const dynamicGallery = generateMediaGallery();
      return prev === dynamicGallery.length - 1 ? 0 : prev + 1;
    });
    setIsVideoPlaying(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mediaModalOpen) {
        switch (e.key) {
          case 'Escape':
            closeMediaModal();
            break;
          case 'ArrowLeft':
            goToPrevious();
            break;
          case 'ArrowRight':
            goToNext();
            break;
        }
      } else if (showCourseModal) {
        switch (e.key) {
          case 'Escape':
            closeCourseModal();
            break;
        }
      } else if (showSpecializationModal) {
        switch (e.key) {
          case 'Escape':
            closeSpecializationModal();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mediaModalOpen, showCourseModal, showSpecializationModal]);

  // Gallery modal state (keeping for backward compatibility)
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // State to manage expanded gallery
  const [expandedGallery, setExpandedGallery] = useState(false);

  const openGallery = (index: number) => {
    setSelectedImage(galleryImages[index]);
    setGalleryOpen(true);
  };

  // Add Admissions Section
  const [activeTab, setActiveTab] = useState<string | null>('Overview');
  const [showAllClasses, setShowAllClasses] = useState(false);
  const classes = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [applyForm, setApplyForm] = useState({ studentName: '', qualification: '', contactNumber: '', email: '' });

  // Job Application Modal State
  const [showJobApplicationModal, setShowJobApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [jobApplicationForm, setJobApplicationForm] = useState({
    name: '',
    email: '',
    contact: '',
    experience: '',
    resume: null as File | null
  });

  // Course data structure
  const courseData = {
    'B.Tech': {
      title: 'B.Tech',
      views: '7.3K',
      interest: '1188',
      courses: [
        {
          name: 'Computer Science and Engineering',
          rating: 3.8,
          reviews: 273,
          views: 670,
          fees: '₹2,42,000',
          date: '22 Aug 2025',
          code: '36886',
          exam: 'GUJCET'
        },
        {
          name: 'Aeronautical Engineering',
          rating: 3.4,
          reviews: 9,
          views: 54,
          fees: '₹1,61,000',
          date: '22 Aug 2025',
          code: '36758',
          exam: 'GUJCET'
        },
        {
          name: 'Biotechnology',
          rating: 4.3,
          reviews: 2,
          views: 79,
          fees: '₹1,61,000',
          date: '22 Aug 2025',
          code: '22853',
          exam: 'GUJCET'
        },
        {
          name: 'Artificial Intelligence & Data Science',
          rating: 3.2,
          reviews: 15,
          views: 156,
          fees: '₹1,61,000',
          date: '22 Aug 2025',
          code: '36073',
          exam: 'GUJCET'
        },
        {
          name: 'Civil Engineering',
          rating: 4.0,
          reviews: 16,
          views: 27,
          fees: '₹1,61,000',
          date: '22 Aug 2025',
          code: '36822',
          exam: 'GUJCET'
        },
        {
          name: 'Information Technology',
          rating: 2.7,
          reviews: 19,
          views: 45,
          fees: '₹1,61,000',
          date: '22 Aug 2025',
          code: '36958',
          exam: 'GUJCET'
        }
      ]
    },
    'MBA': {
      title: 'MBA',
      views: '3.0K',
      interest: '756',
      courses: [
        {
          name: 'Finance',
          rating: 4.2,
          reviews: 8,
          views: 45,
          fees: '₹2,10,000',
          date: '22 Aug 2025',
          code: '22854',
          exam: 'CAT'
        },
        {
          name: 'Marketing',
          rating: 3.9,
          reviews: 12,
          views: 67,
          fees: '₹2,10,000',
          date: '22 Aug 2025',
          code: '36074',
          exam: 'CAT'
        },
        {
          name: 'Human Resources',
          rating: 4.1,
          reviews: 6,
          views: 34,
          fees: '₹2,10,000',
          date: '22 Aug 2025',
          code: '36823',
          exam: 'CAT'
        },
        {
          name: 'Information Technology',
          rating: 3.7,
          reviews: 9,
          views: 52,
          fees: '₹2,10,000',
          date: '22 Aug 2025',
          code: '36961',
          exam: 'CAT'
        }
      ]
    },
    'B.Sc': {
      title: 'B.Sc',
      views: '1.7K',
      interest: '432',
      courses: [
        {
          name: 'Physics',
          rating: 4.0,
          reviews: 5,
          views: 28,
          fees: '₹77,800',
          date: '22 Aug 2025',
          code: '22855',
          exam: 'Direct'
        },
        {
          name: 'Chemistry',
          rating: 3.8,
          reviews: 7,
          views: 35,
          fees: '₹77,800',
          date: '22 Aug 2025',
          code: '36075',
          exam: 'Direct'
        },
        {
          name: 'Mathematics',
          rating: 4.2,
          reviews: 4,
          views: 42,
          fees: '₹77,800',
          date: '22 Aug 2025',
          code: '36824',
          exam: 'Direct'
        },
        {
          name: 'Biology',
          rating: 3.9,
          reviews: 8,
          views: 38,
          fees: '₹77,800',
          date: '22 Aug 2025',
          code: '36962',
          exam: 'Direct'
        }
      ]
    }
  };

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
    setShowCourseModal(true);
  };

  const closeCourseModal = () => {
    setShowCourseModal(false);
    setSelectedCourse(null);
  };

  // Specialization data structure  Remove static data 


  const handleCheckDetailsClick = (courseName: string) => {
    setSelectedSpecializationCourse(courseName);
    setShowSpecializationModal(true);
  };

  const closeSpecializationModal = () => {
    setShowSpecializationModal(false);
    setSelectedSpecializationCourse(null);
  };

  const handleApplyClick = (cls: string) => {
    setSelectedClass(cls);
    setShowApplyModal(true);
  };

  const handleApplyFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplyForm(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowApplyModal(false);
    setSelectedClass(null);
    setApplyForm({ studentName: '', qualification: '', contactNumber: '', email: '' });
  };

  // Job Application Handlers
  const handleJobApplicationClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowJobApplicationModal(true);
  };

  const closeJobApplicationModal = () => {
    setShowJobApplicationModal(false);
    setSelectedJob(null);
    setJobApplicationForm({
      name: '',
      email: '',
      contact: '',
      experience: '',
      resume: null
    });
  };

  const handleJobApplicationFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobApplicationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setJobApplicationForm(prev => ({ ...prev, resume: file }));
    }
  };

  const handleJobApplicationFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle job application form submission here
    console.log('Job application submitted:', { ...jobApplicationForm, job: selectedJob });
    alert('Job application submitted successfully!');
    closeJobApplicationModal();
  };


  const [reviews, setReviews] = useState<any[]>([]);
  const [reviewInput, setReviewInput] = useState<{
    name: string;
    course: string;
    title: string;
    overall: string;
    placement: number;
    infrastructure: number;
    faculty: number;
    hostel: number;
  }>({
    name: '',
    course: '',
    title: '',
    overall: '',
    placement: 0,
    infrastructure: 0,
    faculty: 0,
    hostel: 0,
  });
  const [showFullReview, setShowFullReview] = useState<{ [key: number]: boolean }>({});

  const handleReviewInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // If the field is a star rating, cast to number
    if (["placement", "infrastructure", "faculty", "hostel"].includes(name)) {
      setReviewInput(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setReviewInput(prev => ({ ...prev, [name]: value }));
    }
  };
  const handleStarClick = (field: string, value: number) => {
    setReviewInput(prev => ({ ...prev, [field]: value }));
  };
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      reviewInput.name.trim() &&
      reviewInput.course.trim() &&
      reviewInput.title.trim() &&
      reviewInput.overall.trim() &&
      reviewInput.placement &&
      reviewInput.infrastructure &&
      reviewInput.faculty &&
      reviewInput.hostel
    ) {
      setReviews([
        {
          ...reviewInput,
          date: new Date().toLocaleString(),
        },
        ...reviews,
      ]);
      setReviewInput({
        name: '',
        course: '',
        title: '',
        overall: '',
        placement: 0,
        infrastructure: 0,
        faculty: 0,
        hostel: 0,
      });
    }
  };

  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', phone: '', message: '' });

  // Visit Schedule Modal states
  const [showVisitScheduleModal, setShowVisitScheduleModal] = useState(false);
  const [visitScheduleForm, setVisitScheduleForm] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    time: ''
  });

  const handleEnquiryFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEnquiryForm(prev => ({ ...prev, [name]: value }));
  };
  const handleEnquiryFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowEnquiryModal(false);
    setEnquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  // Visit Schedule form handlers
  const handleVisitScheduleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVisitScheduleForm(prev => ({ ...prev, [name]: value }));
  };

  const handleVisitScheduleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowVisitScheduleModal(false);
    setVisitScheduleForm({ name: '', email: '', contact: '', date: '', time: '' });
  };

  const [showCompareModal, setShowCompareModal] = useState(false);
  const [searchSchoolQuery, setSearchSchoolQuery] = useState('');
  const [searchSchoolResults, setSearchSchoolResults] = useState<any[]>([]);
  const [selectedCompareSchool, setSelectedCompareSchool] = useState<any>(null);
  const mockSchools = [
  
  ];

  // State to manage visibility of fee details dropdown
  const [openFeeDetails, setOpenFeeDetails] = useState<{ [key: string]: boolean }>({});

  const toggleFeeDetails = (className: string) => {
    setOpenFeeDetails(prev => ({
      ...prev,
      [className]: !prev[className]
    }));
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownAnchor, setDropdownAnchor] = useState<{ left: number, width: number } | null>(null);

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const [schoolDetails, setSchoolDetails] = useState<schoolDetails | null>(null);
  const [organizationFacilities, setOrganizationFacilities] = useState<OrganizationFacility[]>([]);
  const [organizationFacilitiesLoading, setOrganizationFacilitiesLoading] = useState(true);
  const [types, setTypes] = useState<Type[]>([])
  const [ownership, setOwnership] = useState<Ownership[]>([])
  const [ownershipLoading, setOwnershipLoading] = useState(true)
  const [educationBoard, setEducationBoard] = useState<EducationBoard[]>([])
  const [educationBoardLoading, setEducationBoardLoading] = useState(true)
  const [affiliations, setAffiliations] = useState<Affiliation[]>([])
  const [affiliationsLoading, setAffiliationsLoading] = useState(true)
  const [schoolClasses, setSchoolClasses] = useState<SchoolClass[]>([])
  const [schoolClassesLoading, setSchoolClassesLoading] = useState(true)
  const [educationLevels, setEducationLevels] = useState<EducationLevel[]>([])
  const [educationLevelsLoading, setEducationLevelsLoading] = useState(true)
  const [organizationOverview, setOrganizationOverview] = useState<OrganizationOverview[]>([])
  const [organizationOverviewLoading, setOrganizationOverviewLoading] = useState(true)
  const [organizationAdmissions, setOrganizationAdmissions] = useState<OrganizationAdmission[]>([])
  const [organizationAdmissionsLoading, setOrganizationAdmissionsLoading] = useState(true)

  const [organizationFeeStructure, setOrganizationFeeStructure] = useState<OrganizationFeeStructure[]>([])
  const [organizationFeeStructureLoading, setOrganizationFeeStructureLoading] = useState(true)

  const [organizationAlumnis, setOrganizationAlumnis] = useState<OrganizationAlumni[]>([])
  const [organizationAlumnisLoading, setOrganizationAlumnisLoading] = useState(true)

  const [organizationNews, setOrganizationNews] = useState<OrganizationNews[]>([])
  const [organizationNewsLoading, setOrganizationNewsLoading] = useState(true)

  const [organizationCareers, setOrganizationCareers] = useState<OrganizationCareer[]>([])
  const [organizationCareersLoading, setOrganizationCareersLoading] = useState(true)

  const [organizationContacts, setOrganizationContacts] = useState<OrganizationContact[]>([])
  const [organizationContactsLoading, setOrganizationContactsLoading] = useState(true)

  const [organizationCurricula, setOrganizationCurricula] = useState<OrganizationCurriculum[]>([])
  const [organizationCurriculaLoading, setOrganizationCurriculaLoading] = useState(true)

  const [organizationPhotos, setOrganizationPhotos] = useState<OrganizationPhotoCategory[]>([])
  const [organizationPhotosLoading, setOrganizationPhotosLoading] = useState(true)

  const [organizationFeaturedPosts, setOrganizationFeaturedPosts] = useState<OrganizationFeaturedPost[]>([])
  const [organizationFeaturedPostsLoading, setOrganizationFeaturedPostsLoading] = useState(true)

  const [organizationFAQs, setOrganizationFAQs] = useState<OrganizationFAQ[]>([])
  const [organizationFAQsLoading, setOrganizationFAQsLoading] = useState(true)

  const [organizationVideos, setOrganizationVideos] = useState<OrganizationVideo[]>([])
  const [organizationVideosLoading, setOrganizationVideosLoading] = useState(true)

  const [organizationTimings, setOrganizationTimings] = useState<OrganizationTiming[]>([])
  const [organizationTimingsLoading, setOrganizationTimingsLoading] = useState(true)

  const [organizationFeaturedPhotos, setOrganizationFeaturedPhotos] = useState<OrganizationFeaturedPhoto[]>([])
  const [organizationFeaturedPhotosLoading, setOrganizationFeaturedPhotosLoading] = useState(true)

  const [organizationPrograms, setOrganizationPrograms] = useState<OrganizationProgram[]>([])
  const [organizationProgramsLoading, setOrganizationProgramsLoading] = useState(true)

  // Generate gallery images from API data
  const galleryImages = React.useMemo(() => {
    const images = [];
    
    // Add main school image if available
    if (schoolDetails?.image) {
      images.push(schoolDetails.image);
    }
    
    // Add featured photos from API
    if (organizationFeaturedPhotos.length > 0) {
      organizationFeaturedPhotos.forEach(photo => {
        // Construct full URL for the photo
        const fullPhotoUrl = photo.photo.startsWith('http') 
          ? photo.photo 
          : `https://justeducation.britannicaoverseas.com${photo.photo}`;
        images.push(fullPhotoUrl);
      });
    }
    
    return images;
  }, [schoolDetails?.image, organizationFeaturedPhotos]);

  // Download popup form state
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [downloadType, setDownloadType] = useState<'brochure' | 'fees' | null>(null);
  const [downloadForm, setDownloadForm] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    nationality: '',
    qualification: '',
    courseCategory: '',
    captcha: '',
    termsAccepted: false
  });
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 10, num2: 3 });

  // Download popup handlers
  const openDownloadPopup = (type: 'brochure' | 'fees') => {
    setDownloadType(type);
    setShowDownloadPopup(true);
    // Generate new captcha
    setCaptchaQuestion({ num1: Math.floor(Math.random() * 10) + 1, num2: Math.floor(Math.random() * 10) + 1 });
  };

  const closeDownloadPopup = () => {
    setShowDownloadPopup(false);
    setDownloadType(null);
    setDownloadForm({
      fullName: '',
      email: '',
      countryCode: '+91',
      mobile: '',
      nationality: '',
      qualification: '',
      courseCategory: '',
      captcha: '',
      termsAccepted: false
    });
  };

  const handleDownloadFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setDownloadForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setDownloadForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDownloadFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswer = captchaQuestion.num1 + captchaQuestion.num2;
    if (parseInt(downloadForm.captcha) !== correctAnswer) {
      alert('Please enter the correct captcha answer');
      return;
    }
    if (!downloadForm.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Download form submitted:', { type: downloadType, form: downloadForm });
    
    // Simulate download
    alert(`Thank you! Your ${downloadType} download will start shortly.`);
    closeDownloadPopup();
  };

  const refreshCaptcha = () => {
    setCaptchaQuestion({ num1: Math.floor(Math.random() * 10) + 1, num2: Math.floor(Math.random() * 10) + 1 });
    setDownloadForm(prev => ({ ...prev, captcha: '' }));
  };

  // Helper function to format time
  const formatTime = (timeString: string | null) => {
    if (!timeString) return 'Closed';
    try {
      const time = new Date(`2000-01-01T${timeString}`);
      return time.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    } catch {
      return timeString;
    }
  };

  interface ApiResponse<T> {
    data: T;
  }

  useEffect(() => {
    // Fetch school details using the slug
    const fetchSchoolDetails = async () => {
      try {
        const response = await api.get<ApiResponse<schoolDetails>>(`/organization-details-by-slug/${slug}`);
        console.log(response.data.data);
        setSchoolDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching school details:', error);
      }
    };

    fetchSchoolDetails();
  }, [slug]);


  useEffect(() => {
    // Fetch types
    const fetchTypes = async () => {
      try {
        const res = await api.get<ApiResponse<Type[]>>('/types')
        console.log(res.data.data)
        setTypes(res.data.data)
        console.log(types)
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    };

    fetchTypes();
  }, []);

  useEffect(() => {
    // Fetch ownership
    const fetchOwnership = async () => {
      try {
        setOwnershipLoading(true);
        const res = await api.get<ApiResponse<Ownership[]>>('/ownerships')
        console.log(res.data.data)
        setOwnership(res.data.data)
        console.log(ownership)
      } catch (error) {
        console.error('Error fetching ownership:', error);
        // Set default ownership data if API fails
        setOwnership([{ id: 1, ownership: 'Private Institution', business_category: null, created_at: '', updated_at: '' }]);
      } finally {
        setOwnershipLoading(false);
      }
    };

    fetchOwnership();
  }, []);

  useEffect(() => {
    // Fetch education boards
    const fetchEducationBoard = async () => {
      try {
        setEducationBoardLoading(true);
        const res = await api.get<ApiResponse<EducationBoard[]>>('/education-boards')
        console.log(res.data.data)
        setEducationBoard(res.data.data)
        console.log(educationBoard)
      } catch (error) {
        console.error('Error fetching education boards:', error);
        // Set default education board data if API fails
        setEducationBoard([{ id: 1, board: 'CBSE', business_category: null, created_at: '', updated_at: '' }]);
      } finally {
        setEducationBoardLoading(false);
      }
    };

    fetchEducationBoard();
  }, []);

  useEffect(() => {
    // Fetch affiliations
    const fetchAffiliations = async () => {
      try {
        setAffiliationsLoading(true);
        const res = await api.get<ApiResponse<Affiliation[]>>('/affiliations')
        console.log(res.data.data)
        setAffiliations(res.data.data)
        console.log(affiliations)
      } catch (error) {
        console.error('Error fetching affiliations:', error);
        // Set default affiliation data if API fails
        setAffiliations([{ id: 1, affiliation: 'Default Affiliation', business_category: 1, created_at: '', updated_at: '' }]);
      } finally {
        setAffiliationsLoading(false);
      }
    };

    fetchAffiliations();
  }, []);

  useEffect(() => {
    // Fetch school classes
    const fetchSchoolClasses = async () => {
      try {
        setSchoolClassesLoading(true);
        const res = await api.get<ApiResponse<SchoolClass[]>>('/school-classes')
        console.log(res.data.data)
        setSchoolClasses(res.data.data)
        console.log(schoolClasses)
      } catch (error) {
        console.error('Error fetching school classes:', error);
        // Set default school class data if API fails
        setSchoolClasses([{ id: 1, class: 'Toddler', business_category: null, created_at: '', updated_at: '' }]);
      } finally {
        setSchoolClassesLoading(false);
      }
    };

    fetchSchoolClasses();
  }, []);

  useEffect(() => {
    // Fetch education levels
    const fetchEducationLevels = async () => {
      try {
        setEducationLevelsLoading(true);
        const res = await api.get<EducationLevelResponse>('/education-levels')
        console.log(res.data.data)
        setEducationLevels(res.data.data)
        console.log(educationLevels)
      } catch (error) {
        console.error('Error fetching education levels:', error);
        // Set default education level data if API fails
        setEducationLevels([{ 
          id: 1, 
          level_name: 'Primary', 
          level_slug: 'primary', 
          short_name: 'Primary', 
          short_slug: 'primary', 
          seo_name: 'Primary Education', 
          seo_slug: 'primary-education', 
          created_at: '', 
          updated_at: '' 
        }]);
      } finally {
        setEducationLevelsLoading(false);
      }
    };

    fetchEducationLevels();
  }, []);

  useEffect(() => {
    // Fetch organization overview
    const fetchOrganizationOverview = async () => {
      try {
        setOrganizationOverviewLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationOverviewResponse>(`/organization-overviews/${schoolDetails.id}`);
          console.log('Organization Overview:', res.data.data);
          setOrganizationOverview(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization overview:', error);
        // Set empty array if API fails
        setOrganizationOverview([]);
      } finally {
        setOrganizationOverviewLoading(false);
      }
    };

    // Only fetch when schoolDetails is available
    if (schoolDetails?.id) {
      fetchOrganizationOverview();
    }
  }, [schoolDetails?.id]);

  useEffect(() => {
    // Fetch organization admissions
    const fetchOrganizationAdmissions = async () => {
      try {
        setOrganizationAdmissionsLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationAdmissionResponse>(`/organization-admissions/${schoolDetails.id}`);
          console.log('Organization Admissions:', res.data.data);
          setOrganizationAdmissions(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization admissions:', error);
        // Set empty array if API fails
        setOrganizationAdmissions([]);
      } finally {
        setOrganizationAdmissionsLoading(false);
      }
    };

    // Only fetch when schoolDetails is available
    if (schoolDetails?.id) {
      fetchOrganizationAdmissions();
    }
  }, [schoolDetails?.id]);

  useEffect(() => {
    // Fetch organization fee structure
    const fetchOrganizationFeeStructure = async () => {
      try {
        setOrganizationFeeStructureLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationFeeStructureResponse>(`/organization-fee-structure/${schoolDetails.id}`);
          console.log('Organization Fee Structure:', res.data.data);
          setOrganizationFeeStructure(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization fee structure:', error);
        // Set empty array if API fails
        setOrganizationFeeStructure([]);
      } finally {
        setOrganizationFeeStructureLoading(false);
      }
    };

    const fetchOrganizationAlumnis = async () => {
      try {
        setOrganizationAlumnisLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationAlumniResponse>(`/organization-alumnis/${schoolDetails.id}`);
          console.log('Organization Alumnis:', res.data.data);
          setOrganizationAlumnis(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization alumnis:', error);
        // Set empty array if API fails
        setOrganizationAlumnis([]);
      } finally {
        setOrganizationAlumnisLoading(false);
      }
    };

    const fetchOrganizationNews = async () => {
      try {
        setOrganizationNewsLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationNewsResponse>(`/organization-news/${schoolDetails.id}`);
          console.log('Organization News:', res.data.data);
          setOrganizationNews(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization news:', error);
        // Set empty array if API fails
        setOrganizationNews([]);
      } finally {
        setOrganizationNewsLoading(false);
      }
    };

    const fetchOrganizationCareers = async () => {
      try {
        setOrganizationCareersLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationCareerResponse>(`/organization-careers/${schoolDetails.id}`);
          console.log('Organization Careers:', res.data.data);
          setOrganizationCareers(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization careers:', error);
        // Set empty array if API fails
        setOrganizationCareers([]);
      } finally {
        setOrganizationCareersLoading(false);
      }
    };

    const fetchOrganizationContacts = async () => {
      try {
        setOrganizationContactsLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationContactResponse>(`/organization-contacts/${schoolDetails.id}`);
          console.log('Organization Contacts:', res.data.data);
          setOrganizationContacts(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization contacts:', error);
        // Set empty array if API fails
        setOrganizationContacts([]);
      } finally {
        setOrganizationContactsLoading(false);
      }
    };

    const fetchOrganizationCurricula = async () => {
      try {
        setOrganizationCurriculaLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationCurriculumResponse>(`/organization-curricula/${schoolDetails.id}`);
          console.log('Organization Curricula:', res.data.data);
          setOrganizationCurricula(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization curricula:', error);
        // Set empty array if API fails
        setOrganizationCurricula([]);
      } finally {
        setOrganizationCurriculaLoading(false);
      }
    };

    const fetchOrganizationPhotos = async () => {
      try {
        setOrganizationPhotosLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationPhotosResponse>(`/organization-photos/${schoolDetails.id}`);
          console.log('Organization Photos:', res.data.data);
          setOrganizationPhotos(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization photos:', error);
        // Set empty array if API fails
        setOrganizationPhotos([]);
      } finally {
        setOrganizationPhotosLoading(false);
      }
    };

    const fetchOrganizationFeaturedPosts = async () => {
      try {
        setOrganizationFeaturedPostsLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationFeaturedPostResponse>(`/organization-featured-posts/${schoolDetails.id}`);
          console.log('Organization Featured Posts:', res.data.data);
          setOrganizationFeaturedPosts(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization featured posts:', error);
        // Set empty array if API fails
        setOrganizationFeaturedPosts([]);
      } finally {
        setOrganizationFeaturedPostsLoading(false);
      }
    };

    const fetchOrganizationFAQs = async () => {
      try {
        setOrganizationFAQsLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationFAQResponse>(`/organization-faqs/${schoolDetails.id}`);
          console.log('Organization FAQs:', res.data.data);
          setOrganizationFAQs(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization FAQs:', error);
        // Set empty array if API fails
        setOrganizationFAQs([]);
      } finally {
        setOrganizationFAQsLoading(false);
      }
    };

    const fetchOrganizationFacilities = async () => {
      try {
        setOrganizationFacilitiesLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationFacilityResponse>(`/organization-facilities/${schoolDetails.id}`);
          console.log('Organization Facilities:', res.data.data);
          setOrganizationFacilities(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization facilities:', error);
        // Set empty array if API fails
        setOrganizationFacilities([]);
      } finally {
        setOrganizationFacilitiesLoading(false);
      }
    };

    const fetchOrganizationVideos = async () => {
      try {
        setOrganizationVideosLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationVideosResponse>(`/organization-videos/${schoolDetails.id}`);
          console.log('Organization Videos:', res.data.data);
          setOrganizationVideos(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization videos:', error);
        // Set empty array if API fails
        setOrganizationVideos([]);
      } finally {
        setOrganizationVideosLoading(false);
      }
    };

    const fetchOrganizationTimings = async () => {
      try {
        setOrganizationTimingsLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationTimingsResponse>(`/organization-timings/${schoolDetails.id}`);
          console.log('Organization Timings:', res.data.data);
          setOrganizationTimings(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization timings:', error);
        // Set empty array if API fails
        setOrganizationTimings([]);
      } finally {
        setOrganizationTimingsLoading(false);
      }
    };

    const fetchOrganizationFeaturedPhotos = async () => {
      try {
        setOrganizationFeaturedPhotosLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationFeaturedPhotosResponse>(`/organization-featured-photos/${schoolDetails.id}`);
          console.log('Organization Featured Photos:', res.data.data);
          setOrganizationFeaturedPhotos(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization featured photos:', error);
        // Set empty array if API fails
        setOrganizationFeaturedPhotos([]);
      } finally {
        setOrganizationFeaturedPhotosLoading(false);
      }
    };

    const fetchOrganizationPrograms = async () => {
      try {
        setOrganizationProgramsLoading(true);
        if (schoolDetails?.id) {
          const res = await api.get<OrganizationProgramsResponse>(`/organization-programs/${schoolDetails.id}`);
          console.log('Organization Programs:', res.data.data);
          setOrganizationPrograms(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching organization programs:', error);
        // Set empty array if API fails
        setOrganizationPrograms([]);
      } finally {
        setOrganizationProgramsLoading(false);
      }
    };

    // Only fetch when schoolDetails is available
    if (schoolDetails?.id) {
      fetchOrganizationFeeStructure();
      fetchOrganizationAlumnis();
      fetchOrganizationNews();
      fetchOrganizationCareers();
      fetchOrganizationContacts();
      fetchOrganizationCurricula();
      fetchOrganizationPhotos();
      fetchOrganizationVideos();
      fetchOrganizationFeaturedPosts();
      fetchOrganizationFAQs();
      fetchOrganizationFacilities();
      fetchOrganizationTimings();
      fetchOrganizationFeaturedPhotos();
      fetchOrganizationPrograms();
    }
  }, [schoolDetails?.id]);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section - University Profile Style */}
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Layout: University Profile Style */}
            <div className="lg:hidden">
              {/* Header Section: Logo, Name, and Location - Above Image */}
              <div className="flex items-start gap-4 mb-6">
                {/* Circular Logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center flex-shrink-0">
                  {schoolDetails?.logo ? (
                    <img src={schoolDetails.logo} alt="School Logo" className="w-12 h-12 object-cover rounded-full" />
                  ) : (
                    <div className="text-white font-bold text-sm">
                      {schoolDetails?.organization_name ? schoolDetails.organization_name.substring(0, 3).toUpperCase() : 'SCH'}
                    </div>
                  )}
                </div>

                {/* School Information */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-xl font-bold text-gray-800 mb-2">
                    {schoolDetails?.organization_name || 'School Name'}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-gray-500" />
                    <span>{schoolDetails?.city}, {schoolDetails?.country || 'India'}</span>
                  </div>
                </div>
              </div>

              {/* Top Section: Full Width Image */}
              <div className="relative w-full h-64 mb-6">
                <img
                  src={schoolDetails?.banner || school.heroBackground}
                  alt="School Campus"
                  className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openMediaModal(0)}
                />
                <button
                  className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => openMediaModal(0)}
                >
                  View Photos
                </button>
              </div>

              {/* School Details */}
              <div className="flex flex-col items-center text-center mb-6">
                {/* Type and Get Direction */}
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center gap-2">
                   <span className="text-gray-700 font-medium">Type:</span>
             <span className="bg-blue-600 text-white font-semibold px-3 py-1 rounded-full text-sm">
               {ownership && ownership.length > 0 ? ownership[0].ownership : 'Private Institution'}
             </span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Get Direction
                  </button>
                </div>

                {/* SETARA Ranking */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
                  <span className="font-semibold">SETARA Ranking:</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className={`w-4 h-4 ${star <= 3 ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>

                {/* Featured & Approval */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="flex items-center text-blue-600 font-medium text-sm">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Featured
                  </span>
                  <span className="text-sm text-gray-600">Approved By: {educationBoard.length > 0 ? educationBoard[0].board : 'CBSE'}</span>
                </div>

                {/* Key Information Tags */}
                <div className="grid grid-cols-2 gap-3 mb-4 w-full">
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                    <FaSchool className="text-blue-600" />
                    <span className="text-sm">Estd. {schoolDetails?.established || school.established}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                    <FaGraduationCap className="text-blue-600" />
                    <span className="text-sm">Scholarship: Yes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                    <FaImage className="text-blue-600" />
                    <span className="text-sm">View: 416</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                    <FaUser className="text-blue-600" />
                    <span className="text-sm">Courses: 40</span>
                  </div>
                </div>

                {/* Study Options */}
                <div className="flex flex-wrap justify-center items-center gap-4 mb-4 w-full">
                {types.map((item) => (
        <span
          key={item.id}
          className="flex items-center gap-2 text-green-600 font-medium"
        >
          <FaCheckCircle className="text-green-600" />
          {item.type}
        </span>
      ))}
                </div>


                {/* Rankings */}
                <div className="flex flex-wrap justify-center items-center gap-4 mb-6 w-full">
                  <div className="text-lg font-bold text-gray-800">
                    #457 in World
                  </div>
                  <div className="text-base font-bold text-gray-800">
                    #4 in India
                  </div>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
                    View ranking details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
                  <button 
                    onClick={() => openDownloadPopup('brochure')}
                    className="bg-white border border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Brochure
                  </button>
                  <button 
                    onClick={() => openDownloadPopup('fees')}
                    className="bg-white border border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Fees Structure
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout: Original Design */}
            <div className="hidden lg:block">
              {/* Top Section: Logo, Name, and Basic Info */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                {/* Left: Logo and School Info */}
                <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                  {/* Circular Logo */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center flex-shrink-0">
                    <img src={schoolDetails?.logo || ''} alt="School Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full" />
                  </div>

                  {/* School Information */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                        {schoolDetails?.organization_name}
                      </h1>
                        <span className="bg-blue-600 text-white font-semibold px-3 py-1 rounded-full text-sm">
                         {ownership && ownership.length > 0 ? ownership[0].ownership : 'Private Institution'}
                        </span>
                      <span className="flex items-center text-blue-600 font-medium text-sm">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        Featured
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center text-base gap-2">
                        <FaMapMarkerAlt className="text-gray-500" />
                        <span>{schoolDetails?.city}, {schoolDetails?.country || "----"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">SETARA Ranking:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <span>Approved By: {educationBoard.length > 0 ? educationBoard[0].board : 'CBSE'}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Get Direction Button */}
                <div className="flex-shrink-0">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Get Direction
                  </button>
                </div>
              </div>

              {/* Image Gallery Section */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                {/* Main Large Image */}
                <div className="lg:col-span-2 relative">
                  <img
                    src={schoolDetails?.banner || school.heroBackground}
                    alt="School Campus"
                    className="w-full h-[100%] lg:h-[100%] object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openMediaModal(0)}
                  />
                  <button
                    className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => openMediaModal(0)}
                  >
                    View Photos
                  </button>
                </div>

                {/* Smaller Images Grid */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
                    alt="Students"
                    className="w-full h-32 lg:h-40 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openMediaModal(1)}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                    alt="Campus Grounds"
                    className="w-full h-32 lg:h-40 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openMediaModal(2)}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                    alt="Library"
                    className="w-full h-32 lg:h-40 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openMediaModal(3)}
                  />
                  <div className="relative cursor-pointer" onClick={() => openMediaModal(4)}>
                    <img
                      src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
                      alt="Classroom"
                      className="w-full h-32 lg:h-40 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                      <div className="bg-white rounded-full p-3">
                        <FaVideo className="text-blue-600 text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Facts and Rankings Section */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left: Key Facts and Study Options */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="font-semibold">Estd.</span>
                      <span>{schoolDetails?.established || school.established}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaGraduationCap className="text-blue-600" />
                      <span>Scholarship: Yes</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaImage className="text-blue-600" />
                      <span>View: 416</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaUser className="text-blue-600" />
                      <span>Courses: 40</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                  {types.map((item) => (
        <span
          key={item.id}
          className="flex items-center gap-2 text-green-600 font-medium"
        >
          <FaCheckCircle className="text-green-600" />
          {item.type}
        </span>
      ))}
                  </div>


                  {/* Rankings - Horizontal Row */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-xl font-bold text-gray-800">
                      #457 in World
                    </div>
                    <span className="text-gray-400">•</span>
                    <div className="text-lg font-bold text-gray-800">
                      #4 in India
                    </div>
                    <a href="#" className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
                      View ranking details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Download Buttons */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => openDownloadPopup('brochure')}
                      className="bg-white border border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Brochure
                    </button>
                    <button 
                      onClick={() => openDownloadPopup('fees')}
                      className="bg-white border border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Fees Structure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Tab Navigation - Sticky */}
        <div className="sticky top-[76px] z-50 bg-white border-b shadow-sm">
          <div className="relative w-full">
            {/* Left Scroll Button */}
            {showLeftScroll && (
              <button
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-r-md h-8 w-8 flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}

            <div className="flex overflow-x-auto pb-2 pt-2 px-6 hide-scrollbar" ref={tabsScrollRef}>
              <div className="flex gap-2 whitespace-nowrap mx-auto">
                {[
                  "Overview", 'Course & Fees', 'Admissions', 'Fee Structure', 'Photos', 'Video', 'Reviews', 'Featured Post', 'Alumni', 'News', 'Career', 'Contact', 'Curriculum'
                ].map(tab => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-md transition-all duration-200 ${activeTab === tab
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 font-medium hover:text-gray-800'
                      } text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 relative group flex-shrink-0`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Scroll Button */}
            {showRightScroll && (
              <button
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-l-md h-8 w-8 flex items-center justify-center border border-gray-200 hover:bg-gray-50"
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6">

            {/* Admissions Section */}
            <div className="">
              {/* Tab Content */}
              {activeTab === 'Overview' && (
                <div className="bg-white rounded-lg sm:p-6 mb-4">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Overview</h2>
                  {organizationOverviewLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  ) : organizationOverview.length > 0 ? (
                    <div className="space-y-6">
                      {organizationOverview.map((overview) => (
                        <div key={overview.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">{overview.title}</h3>
                          <div 
                            className="text-gray-600 text-sm sm:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: overview.description }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No overview information available at the moment.</p>
                    </div>
                  )}
                </div>
              )}


              {activeTab === 'Course & Fees' && (
                <div className="bg-white rounded-lg ">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Programs & Courses</h2>
                  {organizationProgramsLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  ) : organizationPrograms.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Program</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Fees</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Eligibility</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Application Date</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {organizationPrograms.map((program) => (
                            <tr key={program.id} className="border-b hover:bg-gray-50">
                              <td className="px-4 py-3">
                                <div>
                                  <div className="font-medium text-gray-900">{program.program_name}</div>
                                  <div className="text-sm text-gray-600">
                                    {program.level.level_name} - {program.category.category_name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {program.specialization.specialization_name}
                                  </div>
                                  <div className="flex items-center mt-1">
                                    <span className="text-gray-500 text-sm">
                                      {program.duration} • {program.program_type}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <div>
                                  <div className="text-gray-900">
                                    {program.currency} {program.tuition_fee?.toLocaleString()} 
                                    {program.total_tuition_fee && program.total_tuition_fee !== program.tuition_fee && 
                                      ` - ${program.total_tuition_fee.toLocaleString()}`
                                    }
                                  </div>
                                  {program.application_fee && (
                                    <div className="text-sm text-gray-600">
                                      Application Fee: {program.currency} {program.application_fee}
                                    </div>
                                  )}
                                  <div className="text-sm text-gray-500">
                                    {program.medium_of_instruction}
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-gray-700">
                                <div className="text-sm">
                                  {program.eligibility}
                                </div>
                                {program.entrance_exam && (
                                  <div className="text-xs text-gray-500 mt-1">
                                    Entrance: {program.entrance_exam}
                                    {program.entrance_exam_score && ` (${program.entrance_exam_score})`}
                                  </div>
                                )}
                              </td>
                              <td className="px-4 py-3 text-gray-700">
                                <div className="text-sm">
                                  {program.application_start_date && (
                                    <div>Start: {new Date(program.application_start_date).toLocaleDateString()}</div>
                                  )}
                                  {program.application_end_date && (
                                    <div>End: {new Date(program.application_end_date).toLocaleDateString()}</div>
                                  )}
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <button
                                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                                  onClick={() => handleApplyClick(program.program_name)}
                                >
                                  Apply
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No programs available at the moment.</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'Admissions' && (
                <div className="bg-white rounded-lg sm:p-6 mb-4">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Admission Information</h2>
                  {organizationAdmissionsLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  ) : organizationAdmissions.length > 0 ? (
                    <div className="space-y-6">
                      {organizationAdmissions.map((admission) => (
                        <div key={admission.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">{admission.title}</h3>
                          <div 
                            className="text-gray-600 text-sm sm:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: admission.description }}
                          />
                          {admission.file_path && (
                            <div className="mt-4">
                              <a 
                                href={admission.file_path} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download {admission.file_name || 'Document'}
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No admission information available at the moment.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Fee Structure Section */}
            {activeTab === 'Fee Structure' && (
              <div>
                <div className="mb-4">
                  <select className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>2025-2026</option>
                  </select>
                </div>
                
                {organizationFeeStructureLoading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-2 text-gray-600">Loading fee structure...</span>
                  </div>
                ) : organizationFeeStructure.length > 0 ? (
                  <div className="space-y-2">
                    {organizationFeeStructure.map((item) => (
                      <div key={item.id} className="bg-white border rounded px-4 py-3 text-sm font-medium shadow-sm">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFeeDetails(item.class)}>
                          <div>
                            <span>{item.class} Fee structure</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span className="text-gray-500">{item.session}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-800">₹{parseInt(item.total_fee).toLocaleString('en-IN')}</span>
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`text-gray-400 transition-transform duration-200 ${openFeeDetails[item.class] ? 'rotate-180' : ''}`}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                        {openFeeDetails[item.class] && (
                          <div className="mt-3 pt-3 border-t border-gray-200 text-gray-700 space-y-1 text-xs">
                            <div>Admission Fee: ₹{parseInt(item.admission_fee).toLocaleString('en-IN')}</div>
                            <div>Tuition Fee: ₹{parseInt(item.tuition_fee).toLocaleString('en-IN')}</div>
                            <div>Miscellaneous: ₹{parseInt(item.miscellaneous_fee).toLocaleString('en-IN')}</div>
                            <div className="font-bold">Total: ₹{parseInt(item.total_fee).toLocaleString('en-IN')}</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-4 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>No fee structure information available at the moment.</p>
                  </div>
                )}
                
                
              </div>
            )}

            {/* Alumni Section */}
            {activeTab === 'Alumni' && (
              <div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Top Our Alumni</h3>
                  <p className="text-sm font-bold text-black-600">Meet our successful graduates who are making a difference in their fields.</p>
                </div>
                
                {organizationAlumnisLoading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-2 text-gray-600">Loading alumni...</span>
                  </div>
                ) : organizationAlumnis.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {organizationAlumnis.map((alumni) => (
                      <div key={alumni.id} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col items-center text-center">
                          {/* Alumni Photo */}
                          <div className="mb-4">
                            {alumni.photo_path ? (
                              <img 
                                src={`https://justeducation.britannicaoverseas.com${alumni.photo_path}`}
                                alt={alumni.name}
                                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://via.placeholder.com/80x80/cccccc/666666?text=' + alumni.name.charAt(0);
                                }}
                              />
                            ) : (
                              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                                <span className="text-2xl font-semibold text-gray-600">
                                  {alumni.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Alumni Details */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900 text-lg">{alumni.name}</h4>
                            <p className="text-blue-600 font-medium">{alumni.designation}</p>
                            <p className="text-sm text-gray-600">Batch: {alumni.batch}</p>
                            
                            {/* Quote */}
                            {alumni.quote && (
                              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-700 italic">"{alumni.quote}"</p>
                              </div>
                            )}
                            
                            {/* Address */}
                            {alumni.address && (
                              <p className="text-xs text-gray-500 mt-2">
                                <svg className="inline w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {alumni.address}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto mb-4 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <p>No alumni information available at the moment.</p>
                  </div>
                )}
              </div>
            )}

            {/* Photos Section */}
            {activeTab === 'Photos' && (
              <div className="space-y-4">
                {organizationPhotosLoading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-2 text-gray-600">Loading photos...</span>
                  </div>
                ) : organizationPhotos.length > 0 ? (
                  organizationPhotos.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-white border rounded p-3">
                      <div className="font-semibold mb-1">{category.category_name}</div>
                      {category.photos.length > 0 ? (
                        <div className="flex overflow-x-auto gap-2 pb-1 mt-1">
                          {category.photos.map((photo, photoIndex) => (
                            <img
                              key={photoIndex}
                              src={`https://justeducation.britannicaoverseas.com${photo.photo}`}
                              alt={photo.alt_text || photo.title || category.category_name}
                              className="rounded h-20 sm:h-24 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                              onClick={() => openMediaModal(categoryIndex * 100 + photoIndex)}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://via.placeholder.com/96x96/cccccc/666666?text=Photo';
                              }}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4 text-gray-500">
                          <FaImage className="mx-auto mb-2 text-gray-400" size={24} />
                          <p className="text-sm">No photos available for this category</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FaImage className="mx-auto mb-4 text-gray-400" size={48} />
                    <p>No photos available at the moment.</p>
                  </div>
                )}
              </div>
            )}

            {/* Video Section */}
            {activeTab === 'Video' && (
              <div className="space-y-4">
                {organizationVideosLoading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-2 text-gray-600">Loading videos...</span>
                  </div>
                ) : organizationVideos.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {organizationVideos.map((video, index) => (
                      <div key={video.id} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                          {video.link.includes('youtube.com') || video.link.includes('youtu.be') ? (
                            <iframe
                              src={video.link.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                              title={video.title}
                              className="w-full h-full rounded-lg"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <div className="text-center">
                                <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                </svg>
                                <p className="text-sm text-gray-500">Video Preview</p>
                              </div>
                            </div>
                          )}
                        </div>
                        <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Video {index + 1}</span>
                          <span>{new Date(video.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    <p>No videos available at the moment.</p>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Section */}
            {activeTab === 'Reviews' && (
              <div className="flex flex-col items-center justify-center py-6">
                {/* Review Form */}
                <form onSubmit={handleReviewSubmit} className="w-full bg-white rounded shadow p-6 mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-gray-700 font-semibold mb-1">Name</label>
                      <input name="name" value={reviewInput.name} onChange={handleReviewInput} className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700 font-semibold mb-1">Course/Batch</label>
                      <input name="course" value={reviewInput.course} onChange={handleReviewInput} className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Review Title</label>
                    <input name="title" value={reviewInput.title} onChange={handleReviewInput} className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-1">Overall Review</label>
                    <textarea name="overall" value={reviewInput.overall} onChange={handleReviewInput} className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px] resize-y" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {[{ key: 'placement', label: 'Academics' }, { key: 'infrastructure', label: 'Infrastructure' }, { key: 'faculty', label: 'Faculty' }, { key: 'hostel', label: 'Campus Life' }].map(({ key, label }) => (
                      <div key={key} className="">
                        <label className="block text-gray-700 font-semibold mb-1">{label}</label>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map(star => (
                            <button type="button" key={star} onClick={() => handleStarClick(key, star)} className="focus:outline-none">
                              <FaStar className={Number(reviewInput[key as keyof typeof reviewInput]) >= star ? 'text-orange-400' : 'text-gray-300'} />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 flex justify-center">
                    <button type="submit" className="mt-3 bg-blue-600 text-white px-8 py-2 rounded font-semibold hover:bg-blue-700 transition text-sm">Submit</button>
                  </div>
                </form>
                {/* Review List */}
                <div className="w-full space-y-8">
                  {reviews.length === 0 ? (
                    <div className="text-gray-500 text-sm">No reviews yet. Be the first to write one!</div>
                  ) : (
                    reviews.map((review, idx) => (
                      <div key={idx} className="bg-white border rounded-lg shadow p-6 flex flex-col relative">
                        {/* Rating badge */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-orange-400 text-white font-bold text-lg px-6 py-2 rounded text-center">{(
                            (review.placement + review.infrastructure + review.faculty + review.hostel) / 4
                          ).toFixed(0)}</div>
                        </div>
                        {/* Avatar and header */}
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white">
                            {review.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="text-xl font-bold text-gray-800 mb-1">{review.title}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-2">
                              <span>By {review.name} | {review.course}</span>
                              <span className="mx-1">|</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                        {/* Review content */}
                        <div className="mt-2">
                          <div className="mb-2"><span className="font-bold">Overall:</span> <span className="text-gray-800">{review.overall}</span></div>
                        </div>
                        {/* Ratings */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                          {[
                            { label: 'Academics', value: review.placement },
                            { label: 'Infrastructure', value: review.infrastructure },
                            { label: 'Faculty', value: review.faculty },
                            { label: 'Campus Life', value: review.hostel },
                          ].map(r => (
                            <div key={r.label} className="">
                              <div className="font-bold text-gray-800 mb-1">{r.label}</div>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <FaStar key={star} className={Number(r.value) >= star ? 'text-orange-400' : 'text-gray-300'} />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}



            {/* Featured Post Section */}
            {activeTab === 'Featured Post' && (
              <div className="mt-4 sm:mt-6">
                {organizationFeaturedPostsLoading ? (
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Loading featured posts...</span>
                    </div>
                  </div>
                ) : organizationFeaturedPosts.length > 0 ? (
                  <div className="space-y-6">
                    {organizationFeaturedPosts.map((post) => (
                      <div key={post.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                          <div 
                            className="text-gray-600 prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.description }}
                          />
                        </div>
                        
                        {post.file_name && post.file_path && (
                          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <span className="text-blue-600 text-lg">📄</span>
                              <span className="text-sm text-gray-700">{post.file_name}</span>
                              <a 
                                href={post.file_path} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>Posted: {new Date(post.created_at).toLocaleDateString()}</span>
                            <span>Updated: {new Date(post.updated_at).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-4xl mb-4">📝</div>
                      <h3 className="text-lg font-medium text-gray-600 mb-2">No Featured Posts Available</h3>
                      <p className="text-gray-500">There are currently no featured posts for this organization.</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Career Section */}
            {activeTab === 'Career' && (
              <div className="mt-4 sm:mt-6">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  {/* Header */}
                  <div className="text-center mb-8 bg-green-600 text-white py-4 rounded-lg">
                    <h2 className="text-3xl font-bold mb-2">CAREER OPPORTUNITIES</h2>
                    <h3 className="text-xl font-semibold text-white-300">Join Our Team</h3>
                  </div>

                  {/* Loading State */}
                  {organizationCareersLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-3 text-gray-600">Loading career opportunities...</span>
                    </div>
                  ) : organizationCareers.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-gray-500 text-lg mb-4">No career opportunities available at the moment.</div>
                      <p className="text-gray-400">Please check back later for new openings.</p>
                    </div>
                  ) : (
                    <>
                      {/* Career Opportunities List */}
                      <div className="space-y-6 mb-8">
                        {organizationCareers.map((career, index) => (
                          <div key={career.id} className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-shadow border border-green-100">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                  <span className="font-bold text-green-800 min-w-[30px]">{index + 1}.</span>
                                  <h3 className="text-xl font-bold text-gray-800">{career.designation}</h3>
                                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {career.job_type}
                                  </span>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                  <div className="flex items-center gap-2">
                                    <FaUser className="text-green-600" />
                                    <span className="text-sm text-gray-600">
                                      <span className="font-semibold">Positions:</span> {career.no_of_position}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <FaGraduationCap className="text-green-600" />
                                    <span className="text-sm text-gray-600">
                                      <span className="font-semibold">Experience:</span> {career.experience} years
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-green-600" />
                                    <span className="text-sm text-gray-600">
                                      <span className="font-semibold">Location:</span> {career.location}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-green-600" />
                                    <span className="text-sm text-gray-600">
                                      <span className="font-semibold">Last Date:</span> {new Date(career.last_date).toLocaleDateString()}
                                    </span>
                                  </div>
                                </div>

                                {/* Description */}
                                {career.description && (
                                  <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Job Description:</h4>
                                    <div 
                                      className="text-gray-700 text-justify leading-relaxed prose prose-sm max-w-none"
                                      dangerouslySetInnerHTML={{ __html: career.description }}
                                    />
                                  </div>
                                )}

                                {/* Roles */}
                                {career.roles && (
                                  <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Roles & Responsibilities:</h4>
                                    <div className="text-gray-700 text-justify leading-relaxed">
                                      {career.roles}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Apply Button */}
                            <div className="flex justify-center mt-4 pt-4 border-t border-green-200">
                              <button 
                                onClick={() => handleJobApplicationClick(career.designation)}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                              >
                                <FaEnvelope className="text-sm" />
                                Apply Now
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Application Instructions */}
                      <div className="bg-blue-50 p-6 rounded-lg mb-8">
                        <h3 className="text-lg font-bold text-blue-800 mb-3">How to Apply</h3>
                        <p className="text-gray-700 mb-3 text-justify">
                          Interested candidates can send their application
                          <a href="mailto:justeducation@.in" className="text-blue-600 hover:underline font-semibold">  justeducation@.in</a>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Contact Section */}
            {activeTab === 'Contact' && (
              <div className="mt-4 sm:mt-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h2>
                  {organizationContactsLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Loading contact information...</span>
                    </div>
                  ) : organizationContacts.length > 0 ? (
                    <div className="space-y-6">
                      {organizationContacts.map((contact, index) => (
                        <div key={contact.id} className={`p-6 rounded-lg ${index % 2 === 0 ? 'bg-blue-50' : 'bg-gray-50'}`}>
                          {contact.title && (
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{contact.title}</h3>
                          )}
                          <div className="mb-4">
                            <p className="text-gray-700">{contact.address}</p>
                          </div>
                          <div className="space-y-2">
                            {contact.phones && (
                              <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-24">Phone:</span>
                                <span className="text-gray-700">{contact.phones}</span>
                              </div>
                            )}
                            {contact.fax && (
                              <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-24">Fax:</span>
                                <span className="text-gray-700">{contact.fax}</span>
                              </div>
                            )}
                            {contact.emails && (
                              <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-24">Email ID:</span>
                                <span className="text-blue-600 hover:underline">{contact.emails}</span>
                              </div>
                            )}
                            {contact.website && (
                              <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-24">Website:</span>
                                <span className="text-blue-600 hover:underline">{contact.website}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Map */}
                      <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.8044444444444!2d78.04!3d30.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIwJzI0LjAiTiA3OMKwMDInMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          title="School Location"
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No contact information available.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* News Section */}
            {activeTab === 'News' && (
              <div className="mt-4 sm:mt-6">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Latest News & Updates</h2>

                  {organizationNewsLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                      <span className="ml-2 text-gray-600">Loading news...</span>
                    </div>
                  ) : organizationNews.length > 0 ? (
                    <div className="space-y-6">
                      {organizationNews.map((news, index) => {
                        const colors = ['green', 'blue', 'yellow', 'red', 'purple', 'indigo'];
                        const colorClass = colors[index % colors.length];
                        const date = new Date(news.created_at).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        });

                        return (
                          <div key={news.id} className={`bg-${colorClass}-50 rounded-lg p-6`}>
                            <div className="flex items-start justify-between mb-3">
                              <h3 className={`text-lg font-bold text-${colorClass}-800`}>{news.title}</h3>
                              <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{date}</span>
                            </div>
                            <div 
                              className="text-sm text-gray-700 space-y-3"
                              dangerouslySetInnerHTML={{ __html: news.description }}
                            />
                            {news.file_path && (
                              <div className="mt-4">
                                <a 
                                  href={`https://justeducation.britannicaoverseas.com${news.file_path}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`text-${colorClass}-700 font-medium text-sm hover:underline`}
                                >
                                  View Document
                                </a>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No news available at the moment.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Curriculum Details Section */}
            {activeTab === 'Curriculum Details' && (
              <div className="mt-4 sm:mt-6">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-6">Curriculum Details</h2>

                  {organizationCurriculaLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                      <span className="ml-2 text-gray-600">Loading curriculum details...</span>
                    </div>
                  ) : organizationCurricula.length > 0 ? (
                    <div className="space-y-6">
                      {organizationCurricula.map((curriculum) => (
                        <div key={curriculum.id} className="bg-blue-50 p-6 rounded-lg">
                          <h3 className="text-lg font-bold text-blue-800 mb-4">{curriculum.title}</h3>
                          <div 
                            className="text-gray-700 prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: curriculum.description }}
                          />
                          {curriculum.file_path && (
                            <div className="mt-4">
                              <a 
                                href={curriculum.file_path} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Curriculum
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-gray-500 text-lg mb-2">No curriculum details available</div>
                      <p className="text-gray-400 text-sm">Curriculum information will be updated soon.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Combined Curriculum Section */}
            {activeTab === 'Curriculum' && (
              <div className="mt-4 sm:mt-6 space-y-8">
                {/* Curriculum Details Section */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-6">Curriculum Details</h2>

                  {organizationCurriculaLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Loading curriculum details...</span>
                    </div>
                  ) : organizationCurricula.length > 0 ? (
                    <div className="space-y-6">
                      {organizationCurricula.map((curriculum) => (
                        <div key={curriculum.id} className="bg-blue-50 p-6 rounded-lg">
                          <h3 className="text-lg font-bold text-blue-800 mb-4">{curriculum.title}</h3>
                          <div 
                            className="text-gray-700 prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: curriculum.description }}
                          />
                          {curriculum.file_path && (
                            <div className="mt-4">
                              <a 
                                href={curriculum.file_path} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Curriculum
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-gray-500 text-lg mb-2">No curriculum details available</div>
                      <p className="text-gray-400 text-sm">Curriculum information will be updated soon.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Alumni Section */}
            {activeTab === 'Alumni' && (
              <div className="mt-4 sm:mt-6">
                {/* Success Rates / Previous Year Results Section */}
                <div className="mb-8">
                  <h2 className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">Success Rates / Previous Year Results</h2>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Our students consistently deliver outstanding results across boards and competitive exams. Here's a quick snapshot from the previous year.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {/* Board Exam Pass Rate */}
                    <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                      <div className="text-gray-700 font-medium">Board Exam Pass Rate</div>
                    </div>

                    {/* Top Univ/Institute Selections */}
                    <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">120+</div>
                      <div className="text-gray-700 font-medium">Top Univ/Institute Selections</div>
                    </div>

                    {/* Merit Scholarships Awarded */}
                    <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">75</div>
                      <div className="text-gray-700 font-medium">Merit Scholarships Awarded</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Quick Facts (moved to bottom) */}
            <div className="mb-4">
              <div className="bg-white rounded-lg shadow-md border p-3 sm:p-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Quick Facts</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-2 items-stretch">
                  {/* Board Box */}
                  <div className="p-2 sm:p-3 flex flex-col border rounded-lg shadow-sm">
                    <span className="text-gray-500 text-xs">Board</span>
                    <span className="font-bold text-base text-gray-900">CBSE</span>
                  </div>
                  {/* Gender Box */}
                  <div className="p-2 sm:p-3 flex flex-col border rounded-lg shadow-sm justify-center">
                    <span className="text-gray-500 text-xs">Gender</span>
                    <span className="font-bold text-base text-gray-900">Coed</span>
                  </div>
                  {/* Fact Items */}
                  <div className="p-2 sm:p-3 flex flex-col border rounded-lg shadow-sm">
                    <span className="text-gray-500 text-xs">Classes</span>
                    <span className="font-bold text-sm">Pre Nursery - 12 Class</span>
                  </div>
                  <div className="p-2 sm:p-3 flex flex-col border rounded-lg shadow-sm">
                    <span className="text-gray-500 text-xs">Academic Session</span>
                    <span className="font-bold text-sm">April to March</span>
                  </div>
                  <div className="p-2 sm:p-3 flex flex-col border rounded-lg shadow-sm">
                    <span className="text-gray-500 text-xs">Medium</span>
                    <span className="font-bold text-sm">English</span>
                  </div>
                  <div className="p-2 sm:p-3 flex flex-col border rounded-lg shadow-sm">
                    <span className="text-gray-500 text-xs">Day/Boarding</span>
                    <span className="font-bold text-base text-gray-900">Day School</span>
                  </div>
                  <div className="p-2 sm:p-3 flex flex-col border rounded-lg shadow-sm">
                    <span className="text-gray-500 text-xs">Campus Size</span>
                    <span className="font-bold text-sm">10 Acres</span>
                  </div>
                  <div className="p-2 sm:p-3 flex flex-col border rounded-lg shadow-sm">
                    <span className="text-gray-500 text-xs">Student Teacher Ratio</span>
                    <span className="font-bold text-sm">20:1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-4">
              <div className="bg-white rounded-lg shadow-md border p-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
                  <p className="text-gray-600">Everything you need to know about Institution.</p>
                </div>

                <div className="space-y-0">
                  {organizationFAQsLoading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  ) : organizationFAQs.length > 0 ? (
                    organizationFAQs.map((faq, index) => (
                      <div key={faq.id} className="border-b border-gray-200">
                        <button
                          className="w-full flex items-center justify-between py-4 text-left"
                          onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        >
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                          <span className="text-gray-500 text-xl">
                            {openFAQ === index ? '−' : '+'}
                          </span>
                        </button>
                        {openFAQ === index && (
                          <div className="pb-4 text-gray-700">
                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No frequently asked questions available at the moment.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 mt-4 lg:mt-0">
            {/* Contact Now Section */}
            <div className="bg-blue-900 text-white rounded-lg shadow-md p-4 w-full">
              <h3 className="text-lg font-bold mb-3">Contact Now</h3>
              <div className="flex gap-3 mb-3">
                <button
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold py-2 rounded-md shadow-sm hover:bg-gray-100 transition"
                  onClick={() => setShowVisitScheduleModal(true)}
                >
                  <FaCalendarAlt /> Visit Schedule
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2 rounded-md shadow-sm hover:bg-green-600 transition">
                  <FaWhatsapp /> WhatsApp
                </button>
              </div>
              <div className="flex gap-3 mb-3">
                <button className="flex-1 bg-orange-500 text-white font-semibold py-2 rounded-md shadow-sm hover:bg-orange-600 transition" onClick={() => setShowEnquiryModal(true)}>
                  Enquire Now
                </button>
                <button className="flex-1 bg-white text-blue-700 font-semibold py-2 rounded-md shadow-sm hover:bg-gray-100 transition">
                  <div className="text-center">
                    <div>Call  XXXXX-3210</div>
                    {/* <div className="text-sm">XXXXXX-3210</div> */}
                  </div>
                </button>
              </div>
              <div className="text-center text-gray-300 text-sm mt-3">
                <span className="bg-blue-800 px-2 py-1 rounded mr-1 text-white font-semibold">12 people</span> recently enquired
              </div>
            </div>

            {/* School Gallery Section */}
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center">
                <FaImage className="mr-2 text-blue-600" />
                Gallery
              </h2>
              {organizationFeaturedPhotosLoading ? (
                <div className="grid grid-cols-2 gap-3 mb-2">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-sm border bg-gray-200 animate-pulse"
                    >
                      <div className="w-full h-32 sm:h-36 bg-gray-300"></div>
                    </div>
                  ))}
                </div>
              ) : galleryImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 mb-2">
                  {galleryImages.slice(0, expandedGallery ? galleryImages.length : Math.min(4, galleryImages.length)).map((image, index) => {
                    const isMainImage = index === 0 && schoolDetails?.image;
                    const altText = isMainImage 
                      ? schoolDetails?.organization_name || 'School Main Image'
                      : `Gallery Image ${index + 1}`;
                    
                    if (!expandedGallery && index === 3 && galleryImages.length > 4) {
                      // Show "+" overlay on the 4th image if there are more images and gallery is not expanded
                      return (
                        <div
                          key={index}
                          className="relative rounded-lg overflow-hidden cursor-pointer shadow-sm border"
                          onClick={() => setExpandedGallery(true)}
                        >
                          <img
                            src={image}
                            alt={altText}
                            className="w-full h-32 sm:h-36 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">+{galleryImages.length - 3}</span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden cursor-pointer shadow-sm border"
                        onClick={() => openGallery(index)}
                      >
                        <img
                          src={image}
                          alt={altText}
                          className="w-full h-32 sm:h-36 object-cover hover:opacity-90 transition"
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FaImage className="mx-auto text-4xl mb-2 text-gray-300" />
                  <p>No gallery images available at the moment.</p>
                </div>
              )}
              {expandedGallery && galleryImages.length > 4 && (
                <div className="text-center mt-3">
                  <button
                    className="text-blue-600 text-sm font-medium hover:underline flex items-center justify-center mx-auto"
                    onClick={() => setExpandedGallery(false)}
                  >
                    <FaChevronUp className="mr-1" /> Show Less
                  </button>
                </div>
              )}
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Facilities</h2>
              <div className="space-y-4">
                {organizationFacilitiesLoading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : organizationFacilities.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {organizationFacilities.map((facility) => (
                      <div key={facility.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{facility.facility}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No facilities information available</p>
                  </div>
                )}
              </div>
            </div>
            {/* School Timings (Day Wise) */}
            <div className="bg-white rounded-lg shadow p-3 sm:p-4 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Time of Institution Open (Day Wise)</h2>
              {organizationTimingsLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : organizationTimings.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs sm:text-sm border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-50 text-gray-700">
                        <th className="px-2 sm:px-3 py-2 font-bold text-left">Day</th>
                        <th className="px-2 sm:px-3 py-2 font-bold text-left">Open Time</th>
                        <th className="px-2 sm:px-3 py-2 font-bold text-left">Close Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {organizationTimings.map((timing, index) => (
                        <tr 
                          key={timing.id} 
                          className={`border-b hover:bg-blue-50 transition ${
                            index % 2 === 1 ? 'bg-gray-50' : ''
                          }`}
                        >
                          <td className={`px-2 sm:px-3 py-2 font-medium ${
                            timing.is_closed ? 'text-red-500' : ''
                          }`}>
                            {timing.day}
                          </td>
                          <td className={`px-2 sm:px-3 py-2 ${
                            timing.is_closed ? 'text-red-300 italic' : ''
                          }`}>
                            {timing.is_closed ? 'Closed' : formatTime(timing.open_time)}
                          </td>
                          <td className={`px-2 sm:px-3 py-2 ${
                            timing.is_closed ? 'text-red-300 italic' : ''
                          }`}>
                            {timing.is_closed ? 'Closed' : formatTime(timing.close_time)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No timing information available at the moment.</p>
                </div>
              )}
            </div>
            {/* Languages Taught */}
            <div className="bg-white rounded-lg shadow p-3 sm:p-4 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Languages Taught</h2>
              <div className="flex flex-wrap gap-6 sm:gap-10 items-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold mb-1">A</div>
                  <span className="text-base font-medium text-gray-700">English</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold mb-1">अ</div>
                  <span className="text-base font-medium text-gray-700">Hindi</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white text-2xl font-bold mb-1">Ê</div>
                  <span className="text-base font-medium text-gray-700">French</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white text-2xl font-bold mb-1">सं</div>
                  <span className="text-base font-medium text-gray-700">Sanskrit</span>
                </div>
              </div>
            </div>
            {/* Food Details */}
            <div className="bg-white rounded-lg shadow p-3 sm:p-4 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Food Details</h2>
              <div className="flex flex-wrap gap-8 items-center mb-4">
                {/* Vegetarian */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                    <img src="https://img.icons8.com/color/48/000000/salad.png" alt="Vegetarian" className="w-10 h-10" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Vegetarian</span>
                  <span className="text-green-700 text-sm font-medium">(Available)</span>
                </div>
                {/* Non Vegetarian */}
                <div className="flex flex-col items-center opacity-60">
                  <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-2">
                    <img src="https://img.icons8.com/ios-filled/50/cccccc/steak.png" alt="Non Vegetarian" className="w-10 h-10" />
                  </div>
                  <span className="text-lg font-semibold text-gray-500">Non Vegetarian</span>
                  <span className="text-gray-400 text-sm font-medium">(Not Available)</span>
                </div>
              </div>
              <div className="text-gray-500 text-sm mt-2">
                Student menu is designed in consultation with the nutritionist and dining hall committee, which consist of students and staff as well. We serve five meals a day which includes breakfast, the juice break, lunch, teatime snack, dinner, as well as milk and cookies before bed.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {galleryOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-2xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
              onClick={() => setGalleryOpen(false)}
            >
              <span style={{ fontSize: 24, fontWeight: 'bold' }}>&times;</span>
            </button>
            <img
              src={selectedImage}
              alt="School Large Preview"
              className="rounded-lg max-h-[80vh] w-auto object-contain border shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-3 rounded-md max-w-xs w-full relative" style={{ minWidth: 0 }}>
            <button
              className="absolute top-2 right-2 text-gray-700 p-1 rounded-full hover:bg-gray-200 transition"
              onClick={() => { setShowApplyModal(false); setSelectedClass(null); }}
            >
              <span style={{ fontSize: 18, fontWeight: 'bold' }}>&times;</span>
            </button>
            <div className="text-center mb-3">
              <h2 className="text-base font-bold mb-1"><span className="text-blue-600">Just</span><span className="text-orange-600">Education</span></h2>
              <p className="text-sm font-semibold text-gray-800">Apply for Admission</p>
            </div>
            <form onSubmit={handleApplyFormSubmit} className="space-y-3">
              {/* Student Name */}
              <div className="relative">
                <input
                  type="text"
                  id="apply-student"
                  name="studentName"
                  value={applyForm.studentName}
                  onChange={handleApplyFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="apply-student"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Student Name
                </label>
              </div>
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="apply-email"
                  name="email"
                  value={applyForm.email}
                  onChange={handleApplyFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="apply-email"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Email
                </label>
              </div>
              {/* Qualification */}
              <div className="relative">
                <select
                  id="apply-qualification"
                  name="qualification"
                  value={applyForm.qualification}
                  onChange={handleApplyFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                >
                  <option value="">Select Qualification</option>
                  <option value="Below-10th">Below-10th</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Diploma">Diploma</option>
                </select>
                <label
                  htmlFor="apply-qualification"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Qualification
                </label>
              </div>
              {/* Class (auto-filled) */}
              <div className="relative">
                <input
                  type="text"
                  id="apply-class"
                  name="class"
                  value={selectedClass === null ? '' : selectedClass}
                  readOnly
                  className="block w-full px-3 py-2 text-gray-600 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                  tabIndex={-1}
                />
                <label
                  htmlFor="apply-class"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Class
                </label>
              </div>
              {/* Contact Number */}
              <div className="relative">
                <input
                  type="tel"
                  id="apply-contact"
                  name="contactNumber"
                  value={applyForm.contactNumber}
                  onChange={handleApplyFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="apply-contact"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Contact Number
                </label>
              </div>
              <div className="pt-2 flex justify-center">
                <button type="submit" className="bg-blue-600 text-white py-2 px-8 rounded font-semibold hover:bg-blue-700 transition text-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-700 p-1 rounded-full hover:bg-gray-200 transition"
              onClick={() => setShowEnquiryModal(false)}
            >
              <span style={{ fontSize: 18, fontWeight: 'bold' }}>&times;</span>
            </button>
            <div className="text-center mb-3">
              <h2 className="text-base font-bold mb-1"><span className="text-blue-600">Just</span><span className="text-orange-600">Education</span></h2>
              <p className="text-sm font-semibold text-gray-800">School Enquiry</p>
            </div>
            <form onSubmit={handleEnquiryFormSubmit} className="space-y-3">
              {/* School Name (auto-filled) */}
              <div className="relative">
                <input
                  type="text"
                  id="enquiry-school"
                  name="schoolName"
                  value={school.name}
                  readOnly
                  className="block w-full px-3 py-2 text-gray-600 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                  tabIndex={-1}
                />
                <label
                  htmlFor="enquiry-school"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  School Name
                </label>
              </div>
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="enquiry-name"
                  name="name"
                  value={enquiryForm.name}
                  onChange={handleEnquiryFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="enquiry-name"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Name
                </label>
              </div>
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="enquiry-email"
                  name="email"
                  value={enquiryForm.email}
                  onChange={handleEnquiryFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="enquiry-email"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Email
                </label>
              </div>
              {/* Phone */}
              <div className="relative">
                <input
                  type="text"
                  id="enquiry-phone"
                  name="phone"
                  value={enquiryForm.phone}
                  onChange={handleEnquiryFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="enquiry-phone"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Phone
                </label>
              </div>
              {/* Message */}
              <div className="relative">
                <textarea
                  id="enquiry-message"
                  name="message"
                  value={enquiryForm.message}
                  onChange={handleEnquiryFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm min-h-[80px] resize-y"
                  placeholder=" "
                />
                <label
                  htmlFor="enquiry-message"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Message
                </label>
              </div>
              <div className="pt-2 flex justify-center">
                <button type="submit" className="bg-blue-600 text-white py-2 px-8 rounded font-semibold hover:bg-blue-700 transition text-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Visit Schedule Modal */}
      {showVisitScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-700 p-1 rounded-full hover:bg-gray-200 transition"
              onClick={() => setShowVisitScheduleModal(false)}
            >
              <span style={{ fontSize: 18, fontWeight: 'bold' }}>&times;</span>
            </button>
            <div className="text-center mb-3">
              <h2 className="text-base font-bold mb-1"><span className="text-blue-600">Just</span><span className="text-orange-600">Education</span></h2>
              <p className="text-sm font-semibold text-gray-800">Schedule School Visit</p>
            </div>
            <form onSubmit={handleVisitScheduleFormSubmit} className="space-y-3">
              {/* School Name (auto-filled) */}
              <div className="relative">
                <input
                  type="text"
                  id="visit-school"
                  name="schoolName"
                  value={school.name}
                  readOnly
                  className="block w-full px-3 py-2 text-gray-600 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                  tabIndex={-1}
                />
                <label
                  htmlFor="visit-school"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  School Name
                </label>
              </div>
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="visit-name"
                  name="name"
                  value={visitScheduleForm.name}
                  onChange={handleVisitScheduleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="visit-name"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Name
                </label>
              </div>
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="visit-email"
                  name="email"
                  value={visitScheduleForm.email}
                  onChange={handleVisitScheduleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="visit-email"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Email
                </label>
              </div>
              {/* Contact */}
              <div className="relative">
                <input
                  type="tel"
                  id="visit-contact"
                  name="contact"
                  value={visitScheduleForm.contact}
                  onChange={handleVisitScheduleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="visit-contact"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Contact Number
                </label>
              </div>
              {/* Date */}
              <div className="relative">
                <input
                  type="date"
                  id="visit-date"
                  name="date"
                  value={visitScheduleForm.date}
                  onChange={handleVisitScheduleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="visit-date"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Preferred Date
                </label>
              </div>
              {/* Time */}
              <div className="relative">
                <input
                  type="time"
                  id="visit-time"
                  name="time"
                  value={visitScheduleForm.time}
                  onChange={handleVisitScheduleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 peer text-sm"
                  placeholder=" "
                />
                <label
                  htmlFor="visit-time"
                  className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-1 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2 text-xs"
                >
                  Preferred Time
                </label>
              </div>
              <div className="pt-2 flex justify-center">
                <button type="submit" className="bg-blue-600 text-white py-2 px-8 rounded font-semibold hover:bg-blue-700 transition text-sm">
                  Schedule Visit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* School Compare Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-xl max-w-2xl w-[90%] relative shadow-2xl border border-gray-100">
            <button onClick={() => setShowCompareModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">Compare Schools</h2>
            <div className="max-h-[70vh] overflow-y-auto px-1">
              {/* School Selection Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Current School */}
                <div className="border rounded-lg p-3 shadow-sm bg-blue-50">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border shadow-sm mr-3">
                      <FaSchool className="text-2xl text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{school.name}</h3>
                      <p className="text-gray-500 text-xs flex items-center">
                        <FaMapMarkerAlt className="mr-1" size={10} />
                        {school.location}
                      </p>
                    </div>
                  </div>
                  {selectedCompareSchool && (
                    <div className="mt-3 space-y-2 text-xs border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Established:</span>
                        <span className="font-medium">{school.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Board:</span>
                        <span className="font-medium">{school.board}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes:</span>
                        <span className="font-medium">1 - 12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-medium flex items-center">
                          {school.rating}/5
                          <FaStar className="text-yellow-400 ml-1" size={10} />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                {/* Second School Selection */}
                {!selectedCompareSchool ? (
                  <div className="border rounded-lg p-3 shadow-sm bg-gray-50 cursor-pointer flex items-center" onClick={() => setSearchSchoolQuery(' ')}>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <FaSchool className="text-2xl text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Select School</h3>
                      <p className="text-gray-500 text-xs">Click to search and select</p>
                    </div>
                  </div>
                ) : (
                  <div className="border rounded-lg p-3 shadow-sm bg-green-50">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center border shadow-sm mr-3">
                        <FaSchool className="text-2xl text-green-500" />
                        <button onClick={() => setSelectedCompareSchool(null)} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                          <FaTimes size={10} />
                        </button>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{selectedCompareSchool.name}</h3>
                        <p className="text-gray-500 text-xs flex items-center">
                          <FaMapMarkerAlt className="mr-1" size={10} />
                          {selectedCompareSchool.location}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2 text-xs border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Established:</span>
                        <span className="font-medium">{selectedCompareSchool.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Board:</span>
                        <span className="font-medium">{selectedCompareSchool.board}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Classes:</span>
                        <span className="font-medium">{selectedCompareSchool.classes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-medium flex items-center">
                          {selectedCompareSchool.rating}/5
                          <FaStar className="text-yellow-400 ml-1" size={10} />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    {/* Course Details Modal Delete if anyone iwant to show- reove comment */}

    {/* Course Details Modal */}
      {showCourseModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{courseData[selectedCourse as keyof typeof courseData]?.title}</h2>
                <div className="flex items-center mt-1">
                  <span className="text-gray-600 text-sm">(Based on {courseData[selectedCourse as keyof typeof courseData]?.views} views last year)</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm">{courseData[selectedCourse as keyof typeof courseData]?.interest} Students have shown interest in the last 30 days</p>
              </div>
              <button
                onClick={closeCourseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Course List */}
            <div className="overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700 border-b">{selectedCourse} Courses</th>
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700 border-b">Fees</th>
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700 border-b">Application Date</th>
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700 border-b">Cutoff (Rank)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courseData[selectedCourse as keyof typeof courseData]?.courses.map((course, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="px-3 py-2">
                            <div>
                              <div className="font-medium text-gray-900">{course.name}</div>
                              <div className="flex items-center mt-1">
                                <span className="font-semibold text-gray-900">{course.rating}</span>
                                <span className="text-yellow-400 ml-1">⭐</span>
                                <span className="text-gray-600 ml-1">({course.reviews} Reviews)</span>
                              </div>
                              <div className="text-gray-600 text-sm">{course.views} Viewed</div>
                            </div>
                          </td>
                          <td className="px-3 py-2">
                            <div className="text-green-600 font-semibold">{course.fees}</div>
                            <div className="text-gray-500 text-sm">1st Yr Fees</div>
                          </td>
                          <td className="px-3 py-2 text-gray-700">{course.date}</td>
                          <td className="px-3 py-2 text-gray-700">{course.code} {course.exam}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Modal */}
      {mediaModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeMediaModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Media Content */}
            <div className="flex items-center justify-center h-full">
              {(() => {
                const dynamicGallery = generateMediaGallery();
                return dynamicGallery[currentMediaIndex]?.type === 'video' ? (
                  <div className="relative w-full max-w-4xl">
                    <video
                      src={dynamicGallery[currentMediaIndex].src}
                      controls
                      autoPlay={isVideoPlaying}
                      className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      Video {currentMediaIndex + 1} of {dynamicGallery.length}
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full max-w-4xl">
                    <img
                      src={dynamicGallery[currentMediaIndex]?.src}
                      alt={dynamicGallery[currentMediaIndex]?.alt || 'Gallery Image'}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Available';
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      Image {currentMediaIndex + 1} of {dynamicGallery.length}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2 overflow-x-auto max-w-4xl px-4">
                {(() => {
                  const dynamicGallery = generateMediaGallery();
                  return dynamicGallery.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setCurrentMediaIndex(index);
                        setIsVideoPlaying(false);
                      }}
                      className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentMediaIndex
                          ? 'border-blue-500 scale-110'
                          : 'border-transparent hover:border-gray-300'
                        }`}
                    >
                      {item.type === 'video' ? (
                        <div className="relative">
                          <img
                            src={item.thumbnail || item.src}
                            alt={item.alt || 'Video thumbnail'}
                            className="w-16 h-12 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <FaPlay className="text-white text-sm" />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt || 'Gallery thumbnail'}
                          className="w-16 h-12 object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/64x48/cccccc/666666?text=Photo';
                          }}
                        />
                      )}
                    </div>
                  ));
                })()}
              </div>
            </div>

            {/* Media Info */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
              <h3 className="text-white text-lg font-semibold mb-2">
                {(() => {
                  const dynamicGallery = generateMediaGallery();
                  return dynamicGallery[currentMediaIndex]?.alt;
                })()}
              </h3>
              <p className="text-gray-300 text-sm">
                {(() => {
                  const dynamicGallery = generateMediaGallery();
                  return `${dynamicGallery[currentMediaIndex]?.type === 'video' ? 'Video' : 'Image'} ${currentMediaIndex + 1} of ${dynamicGallery.length}`;
                })()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Download Popup Modal */}
      {showDownloadPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h2 className="text-xl font-bold text-blue-600 mb-1">
                    Download {downloadType === 'brochure' ? 'Brochure' : 'Fees Structure'}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {schoolDetails?.organization_name || 'School Name'}
                  </p>
                </div>
                <button
                  onClick={closeDownloadPopup}
                  className="text-gray-400 hover:text-gray-600 transition-colors ml-4"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleDownloadFormSubmit} className="p-6">
              <div className="space-y-4">
                {/* Full Name and Email Row */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="fullName"
                    value={downloadForm.fullName}
                    onChange={handleDownloadFormChange}
                    placeholder="Full Name*"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={downloadForm.email}
                    onChange={handleDownloadFormChange}
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Country Code and Mobile Row */}
                <div className="grid grid-cols-2 gap-3">
                  <select
                    name="countryCode"
                    value={downloadForm.countryCode}
                    onChange={handleDownloadFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>
                  <input
                    type="tel"
                    name="mobile"
                    value={downloadForm.mobile}
                    onChange={handleDownloadFormChange}
                    placeholder="Mobile/WhatsApp No*"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Nationality and Qualification Row */}
                <div className="grid grid-cols-2 gap-3">
                  <select
                    name="nationality"
                    value={downloadForm.nationality}
                    onChange={handleDownloadFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">Nationality</option>
                    <option value="Indian">Indian</option>
                    <option value="NRI">NRI</option>
                    <option value="International">International</option>
                  </select>
                  <select
                    name="qualification"
                    value={downloadForm.qualification}
                    onChange={handleDownloadFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">Your Highest Qualification Level</option>
                    <option value="10th">10th Standard</option>
                    <option value="12th">12th Standard</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>
                </div>

                {/* Course Category */}
                <select
                  name="courseCategory"
                  value={downloadForm.courseCategory}
                  onChange={handleDownloadFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="">Interested Course Category</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Business">Business</option>
                  <option value="Arts">Arts</option>
                  <option value="Science">Science</option>
                </select>

                {/* Captcha */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    Captcha: {captchaQuestion.num1} + {captchaQuestion.num2} =
                  </span>
                  <input
                    type="number"
                    name="captcha"
                    value={downloadForm.captcha}
                    onChange={handleDownloadFormChange}
                    placeholder="Enter Captcha Value"
                    required
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>

                {/* Terms and Conditions */}
                <div className="text-xs text-gray-600">
                  By Submitting This Form, You Accept And Agree To Our{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">
                    Terms Of Use.
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Job Application Modal */}
      {showJobApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[100vh] overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h2 className="text-xl font-bold text-blue-600 mb-1">
                    Job Application
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Apply for {selectedJob} Position
                  </p>
                </div>
                <button
                  onClick={closeJobApplicationModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors ml-4"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleJobApplicationFormSubmit} className="p-4">
              <div className="space-y-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="job-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="job-name"
                    name="name"
                    value={jobApplicationForm.name}
                    onChange={handleJobApplicationFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="job-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="job-email"
                    name="email"
                    value={jobApplicationForm.email}
                    onChange={handleJobApplicationFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="job-contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="job-contact"
                    name="contact"
                    value={jobApplicationForm.contact}
                    onChange={handleJobApplicationFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Enter your contact number"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="job-experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience *
                  </label>
                  <select
                    id="job-experience"
                    name="experience"
                    value={jobApplicationForm.experience}
                    onChange={handleJobApplicationFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years (Fresher)</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="job-resume" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume *
                  </label>
                  <div className="relative">
                    <div className="flex items-center border border-gray-300 rounded-lg bg-white h-10">
                      
                      {/* File Input */}
                      <div className="flex-1 flex items-center px-3">
                        <input
                          id="job-resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleResumeUpload}
                          className="sr-only"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => document.getElementById('job-resume')?.click()}
                          className="bg-gray-100 border border-gray-300 text-gray-700 px-2 py-1 rounded-lg text-xs hover:bg-gray-200 transition-colors"
                        >
                          Choose file
                        </button>
                        <span className="ml-2 text-xs text-gray-500">
                          {jobApplicationForm.resume ? jobApplicationForm.resume.name : "No file chosen"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </MainLayout>
  );
};

export default SchoolDetailsPage;