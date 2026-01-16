import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from '../../utils/env';

// ============================================
// Type Definitions
// ============================================

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

// Static Dropdown Types
export interface Ownership {
  id: number;
  ownership: string;
  business_category: number | null;
  created_at: string;
  updated_at: string;
}

export interface Type {
  id: number;
  name: string;
  business_category_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface Affiliation {
  id: number;
  affiliation: string;
  business_category: number | null;
  created_at: string;
  updated_at: string;
}

export interface EducationBoard {
  id: number;
  board: string;
  business_category: number | null;
  created_at: string;
  updated_at: string;
}

export interface SchoolClass {
  id: number;
  class: string;
  business_category: number | null;
  created_at: string;
  updated_at: string;
}

export interface Facility {
  id: number;
  facility: string;
  business_category: number | null;
  created_at: string;
  updated_at: string;
}

export interface EducationLevel {
  id: number;
  level_name: string;
  business_category: number | null;
  created_at: string;
  updated_at: string;
}

export interface CourseCategory {
  id: number;
  category_name: string;
  business_category: number | null;
  created_at: string;
  updated_at: string;
}

export interface CourseSpecialization {
  id: number;
  specialization_name: string;
  course_category_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface PhotoCategory {
  id: number;
  category_name: string;
  business_category: number | null;
  created_at: string;
  updated_at: string;
}

// Organization Types
export interface OrganizationOverview {
  id: number;
  organization_id: number;
  overview: string;
  created_at: string;
  updated_at: string;
}

export interface OrganizationFacility {
  id: number;
  organization_id: number;
  facility_id: number;
  facility?: Facility;
  created_at: string;
  updated_at: string;
}

export interface OrganizationPhoto {
  id: number;
  organization_id: number;
  photo_category_id: number;
  photo_url: string;
  photo_category?: PhotoCategory;
  created_at: string;
  updated_at: string;
}

export interface OrganizationVideo {
  id: number;
  organization_id: number;
  video_url: string;
  title?: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

// Query Parameters
export interface DropdownQueryParams {
  search?: string;
  orderBy?: string;
  orderIn?: 'asc' | 'desc';
  business_category_id?: number;
  business_category?: number;
  course_category_id?: number;
}

// ============================================
// RTK Query API Slice
// ============================================

export const justEducationApi = createApi({
  reducerPath: 'justEducationApi',
  baseQuery: fetchBaseQuery({
    baseURL: env.API_BASE_URL || 'https://justeducation.britannicaoverseas.com/api/',
    prepareHeaders: (headers) => {
      // Add API Key
      headers.set('X-API-KEY', env.API_KEY || '');
      
      // Add Authorization token if available
      const user = localStorage.getItem('currentUser');
      if (user) {
        try {
          const userData = JSON.parse(user);
          if (userData.token) {
            headers.set('Authorization', `Bearer ${userData.token}`);
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
      
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: [
    'Ownership',
    'Type',
    'Affiliation',
    'EducationBoard',
    'SchoolClass',
    'Facility',
    'EducationLevel',
    'CourseCategory',
    'CourseSpecialization',
    'PhotoCategory',
    'OrganizationOverview',
    'OrganizationFacility',
    'OrganizationPhoto',
    'OrganizationVideo',
  ],
  endpoints: (builder) => ({
    // ============================================
    // Static Dropdown Endpoints
    // ============================================
    
    // GET /ownerships
    getOwnerships: builder.query<ApiResponse<Ownership[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'ownerships',
        params: params || {},
      }),
      providesTags: ['Ownership'],
    }),

    // GET /types
    getTypes: builder.query<ApiResponse<Type[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'types',
        params: params || {},
      }),
      providesTags: ['Type'],
    }),

    // GET /affiliations
    getAffiliations: builder.query<ApiResponse<Affiliation[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'affiliations',
        params: params || {},
      }),
      providesTags: ['Affiliation'],
    }),

    // GET /education-boards
    getEducationBoards: builder.query<ApiResponse<EducationBoard[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'education-boards',
        params: params || {},
      }),
      providesTags: ['EducationBoard'],
    }),

    // GET /school-classes
    getSchoolClasses: builder.query<ApiResponse<SchoolClass[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'school-classes',
        params: params || {},
      }),
      providesTags: ['SchoolClass'],
    }),

    // GET /facilities
    getFacilities: builder.query<ApiResponse<Facility[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'facilities',
        params: params || {},
      }),
      providesTags: ['Facility'],
    }),

    // GET /education-levels
    getEducationLevels: builder.query<ApiResponse<EducationLevel[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'education-levels',
        params: params || {},
      }),
      providesTags: ['EducationLevel'],
    }),

    // GET /course-categories
    getCourseCategories: builder.query<ApiResponse<CourseCategory[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'course-categories',
        params: params || {},
      }),
      providesTags: ['CourseCategory'],
    }),

    // GET /course-specializations
    getCourseSpecializations: builder.query<ApiResponse<CourseSpecialization[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'course-specializations',
        params: params || {},
      }),
      providesTags: ['CourseSpecialization'],
    }),

    // GET /photo-categories
    getPhotoCategories: builder.query<ApiResponse<PhotoCategory[]>, DropdownQueryParams | void>({
      query: (params = {}) => ({
        url: 'photo-categories',
        params: params || {},
      }),
      providesTags: ['PhotoCategory'],
    }),

    // ============================================
    // Organization Endpoints
    // ============================================

    // GET /organization-overviews/{organization_id}
    getOrganizationOverviews: builder.query<ApiResponse<OrganizationOverview[]>, number>({
      query: (organizationId) => `organization-overviews/${organizationId}`,
      providesTags: (result, error, organizationId) => [
        { type: 'OrganizationOverview', id: organizationId },
      ],
    }),

    // GET /organization-facilities/{organization_id}
    getOrganizationFacilities: builder.query<ApiResponse<OrganizationFacility[]>, number>({
      query: (organizationId) => `organization-facilities/${organizationId}`,
      providesTags: (result, error, organizationId) => [
        { type: 'OrganizationFacility', id: organizationId },
      ],
    }),

    // GET /organization-photos/{organization_id}
    getOrganizationPhotos: builder.query<ApiResponse<OrganizationPhoto[]>, number>({
      query: (organizationId) => `organization-photos/${organizationId}`,
      providesTags: (result, error, organizationId) => [
        { type: 'OrganizationPhoto', id: organizationId },
      ],
    }),

    // GET /organization-videos/{organization_id}
    getOrganizationVideos: builder.query<ApiResponse<OrganizationVideo[]>, number>({
      query: (organizationId) => `organization-videos/${organizationId}`,
      providesTags: (result, error, organizationId) => [
        { type: 'OrganizationVideo', id: organizationId },
      ],
    }),
  }),
});

// ============================================
// Export Hooks
// ============================================

export const {
  // Static Dropdown Hooks
  useGetOwnershipsQuery,
  useGetTypesQuery,
  useGetAffiliationsQuery,
  useGetEducationBoardsQuery,
  useGetSchoolClassesQuery,
  useGetFacilitiesQuery,
  useGetEducationLevelsQuery,
  useGetCourseCategoriesQuery,
  useGetCourseSpecializationsQuery,
  useGetPhotoCategoriesQuery,
  
  // Organization Hooks
  useGetOrganizationOverviewsQuery,
  useGetOrganizationFacilitiesQuery,
  useGetOrganizationPhotosQuery,
  useGetOrganizationVideosQuery,
  
  // Lazy Query Hooks (for conditional fetching)
  useLazyGetOwnershipsQuery,
  useLazyGetTypesQuery,
  useLazyGetAffiliationsQuery,
  useLazyGetEducationBoardsQuery,
  useLazyGetSchoolClassesQuery,
  useLazyGetFacilitiesQuery,
  useLazyGetEducationLevelsQuery,
  useLazyGetCourseCategoriesQuery,
  useLazyGetCourseSpecializationsQuery,
  useLazyGetPhotoCategoriesQuery,
  useLazyGetOrganizationOverviewsQuery,
  useLazyGetOrganizationFacilitiesQuery,
  useLazyGetOrganizationPhotosQuery,
  useLazyGetOrganizationVideosQuery,
} = justEducationApi;
