import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

// Page imports
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import LeadsPage from './pages/LeadsPage';
import UniversityPage from './pages/UniversityPage';
import FreeListingPage from './pages/FreeListingPage';
import SchoolPage from './pages/SchoolPage';
import ReligiousSchoolPage from './pages/ReligiousSchoolPage';
import SchoolDetailsPage from './pages/SchoolDetailsPage';
import SchoolDisabilitiesPage from './pages/SchoolDisabilitiesPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import CollegePage from './pages/CollegePage';
import CityDetailsPage from './pages/CityDetailsPage';
import CoachingPage from './pages/CoachingPage';
import ITIPage from './pages/ITIPage';
import VocationalPage from './pages/VocationalPage';
import StreamDetailsPage from './pages/StreamDetailsPage';
import PlaySchoolPage from './pages/PlaySchoolPage';
import StudyAbroadPage from './pages/StudyAbroadPage';
import EducationLoanPage from './pages/EducationLoanPage';
import EduTechOnlinePage from './pages/EduTechOnlinePage';
import TrainingCertificationPage from './pages/TrainingCertificationPage';
import SkillDevelopmentPage from './pages/SkillDevelopmentPage';
import MBBSAbroadConsultantPage from './pages/MBBSAbroadConsultantPage';
import EducationConsultantPage from './pages/EducationConsultantPage';
import ClassesPage from './pages/ClassesPage';
import ClassResourceDetailsPage from './pages/ClassResourceDetailsPage';
import ExamPage from './pages/ExamPage';
import ExamDetailsPage from './pages/ExamDetailsPage';
import TuitionsPage from './pages/TuitionsPage';
import BookstoresLibrariesPage from './pages/BookstoresLibrariesPage';
import NGOPage from './pages/NGOPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import AddSchoolPage from './pages/AddSchoolPage';
import AddCollegePage from './pages/AddCollegePage';
import AddUniversityPage from './pages/AddUniversityPage';
import AddVocationalPage from './pages/AddVocationalpage';
import AddItiPage from './pages/AddItiPage';
import ListingPage from './pages/ListingPage';
import AddStudyAbroadPage from './pages/AddStudyAbroad';
import AddLibrariesPage from './pages/AddLibrariesPage';
import AddNgoPage from './pages/AddNgoPage';
import FillCoachingPage from './pages/fillCoachingPage';
import AddMbbsAbroadConsultantPage from './pages/AddMbbsAbroadConsultantPage';

function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/universities" element={<UniversityPage />} />
          <Route path="/university/:id" element={<SchoolDetailsPage />} />
          <Route path="/free-listing" element={<FreeListingPage />} />
          <Route path="/Institution/:slug" element={<SchoolPage />} />
          <Route path="/institution/school-education/:slug" element={<SchoolDetailsPage />} />
          <Route path="/religious-school" element={<ReligiousSchoolPage />} />
          <Route path="/religious-school/:id" element={<SchoolDetailsPage />} />
          <Route path="/school-disabilities" element={<SchoolDisabilitiesPage />} />
          <Route path="/school-disabilities/:id" element={<SchoolDetailsPage />} />
          <Route path="/investor-relations" element={<InvestorRelationsPage />} />
          <Route path="/colleges" element={<CollegePage />} />
          <Route path="/college/:id" element={<SchoolDetailsPage />} />
          <Route path="/college/:id" element={<SchoolDetailsPage />} />
          <Route path="/city/:cityName" element={<CityDetailsPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/coaching/:id" element={<SchoolDetailsPage />} />
          <Route path="/iti" element={<ITIPage />} />
          <Route path="/iti/:id" element={<SchoolDetailsPage />} />
          <Route path="/vocational" element={<VocationalPage />} />
          <Route path="/vocational/:id" element={<SchoolDetailsPage />} />
          <Route path="/play-school" element={<PlaySchoolPage />} />
          <Route path="/play-school/:id" element={<SchoolDetailsPage />} />
          <Route path="/stream/:streamId" element={<StreamDetailsPage />} />
          <Route path="/study-abroad" element={<StudyAbroadPage />} />
          <Route path="/study-abroad/:id" element={<SchoolDetailsPage />} />
          <Route path="/education-loan" element={<EducationLoanPage />} />
          <Route path="/education-loan/:id" element={<SchoolDetailsPage />} />
          <Route path="/edu-tech-online" element={<EduTechOnlinePage />} />
          <Route path="/edutech-online/:id" element={<SchoolDetailsPage />} />
          <Route path="/training-certification" element={<TrainingCertificationPage />} />
          <Route path="/training-certification/:id" element={<SchoolDetailsPage />} />
          <Route path="/skill-development" element={<SkillDevelopmentPage />} />
          <Route path="/skill-development/:id" element={<SchoolDetailsPage />} />
          <Route path="/mbbs-abroad-consultant" element={<MBBSAbroadConsultantPage />} />
          <Route path="/mbbs-abroad-consultant/:id" element={<SchoolDetailsPage />} />
          <Route path="/education-consultant" element={<EducationConsultantPage />} />
          <Route path="/education-consultant/:id" element={<SchoolDetailsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:className/:resourceName" element={<ClassResourceDetailsPage />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/exam/:examName" element={<ExamDetailsPage />} />
          <Route path="/tuitions" element={<TuitionsPage />} />
          <Route path="/tuition/:id" element={<SchoolDetailsPage />} />
          <Route path="/bookstores-libraries" element={<BookstoresLibrariesPage />} />
          <Route path="/bookstores-libraries/:id" element={<SchoolDetailsPage />} />
          <Route path="/ngos" element={<NGOPage />} />
          <Route path="/ngos/:id" element={<SchoolDetailsPage />} />
          <Route path="/course/:universityId/:courseId" element={<CourseDetailsPage />} />
          <Route path="/add-school" element={<AddSchoolPage />} />
          <Route path="/add-college" element={<AddCollegePage />} />
          <Route path="/add-university" element={<AddUniversityPage />} />
          <Route path="/add-vocational" element={<AddVocationalPage />} />
          <Route path="/add-iti" element={<AddItiPage />} />
          <Route path="/add-study-abroad" element={<AddStudyAbroadPage />} />
          <Route path="/add-mbbs-abroad-consultant" element={<AddMbbsAbroadConsultantPage />} />
          <Route path="/add-ngo" element={<AddNgoPage />} />
          <Route path="/add-library" element={<AddLibrariesPage />} />
          <Route path="/fill-coaching" element={<FillCoachingPage />} />
          <Route path="/listing" element={<ListingPage />} /> 
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
