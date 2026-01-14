import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Lazy load pages for code splitting and better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const LeadsPage = lazy(() => import('./pages/LeadsPage'));
const UniversityPage = lazy(() => import('./pages/UniversityPage'));
const FreeListingPage = lazy(() => import('./pages/FreeListingPage'));
const SchoolPage = lazy(() => import('./pages/SchoolPage'));
const ReligiousSchoolPage = lazy(() => import('./pages/ReligiousSchoolPage'));
const SchoolDetailsPage = lazy(() => import('./pages/SchoolDetailsPage'));
const SchoolDisabilitiesPage = lazy(() => import('./pages/SchoolDisabilitiesPage'));
const InvestorRelationsPage = lazy(() => import('./pages/InvestorRelationsPage'));
const CollegePage = lazy(() => import('./pages/CollegePage'));
const CityDetailsPage = lazy(() => import('./pages/CityDetailsPage'));
const CoachingPage = lazy(() => import('./pages/CoachingPage'));
const ITIPage = lazy(() => import('./pages/ITIPage'));
const VocationalPage = lazy(() => import('./pages/VocationalPage'));
const StreamDetailsPage = lazy(() => import('./pages/StreamDetailsPage'));
const PlaySchoolPage = lazy(() => import('./pages/PlaySchoolPage'));
const StudyAbroadPage = lazy(() => import('./pages/StudyAbroadPage'));
const EducationLoanPage = lazy(() => import('./pages/EducationLoanPage'));
const EduTechOnlinePage = lazy(() => import('./pages/EduTechOnlinePage'));
const TrainingCertificationPage = lazy(() => import('./pages/TrainingCertificationPage'));
const SkillDevelopmentPage = lazy(() => import('./pages/SkillDevelopmentPage'));
const MBBSAbroadConsultantPage = lazy(() => import('./pages/MBBSAbroadConsultantPage'));
const EducationConsultantPage = lazy(() => import('./pages/EducationConsultantPage'));
const ClassesPage = lazy(() => import('./pages/ClassesPage'));
const ClassResourceDetailsPage = lazy(() => import('./pages/ClassResourceDetailsPage'));
const ExamPage = lazy(() => import('./pages/ExamPage'));
const ExamDetailsPage = lazy(() => import('./pages/ExamDetailsPage'));
const TuitionsPage = lazy(() => import('./pages/TuitionsPage'));
const BookstoresLibrariesPage = lazy(() => import('./pages/BookstoresLibrariesPage'));
const NGOPage = lazy(() => import('./pages/NGOPage'));
const CourseDetailsPage = lazy(() => import('./pages/CourseDetailsPage'));
const AddSchoolPage = lazy(() => import('./pages/AddSchoolPage'));
const AddCollegePage = lazy(() => import('./pages/AddCollegePage'));
const AddUniversityPage = lazy(() => import('./pages/AddUniversityPage'));
const AddVocationalPage = lazy(() => import('./pages/AddVocationalpage'));
const AddItiPage = lazy(() => import('./pages/AddItiPage'));
const ListingPage = lazy(() => import('./pages/ListingPage'));
const AddStudyAbroadPage = lazy(() => import('./pages/AddStudyAbroad'));
const AddLibrariesPage = lazy(() => import('./pages/AddLibrariesPage'));
const AddNgoPage = lazy(() => import('./pages/AddNgoPage'));
const FillCoachingPage = lazy(() => import('./pages/fillCoachingPage'));
const AddMbbsAbroadConsultantPage = lazy(() => import('./pages/AddMbbsAbroadConsultantPage'));

import { PageLoader } from './utils/loading';

function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
