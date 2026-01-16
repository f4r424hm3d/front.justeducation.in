# API Integration Report

## ✅ APIs Integrated in Redux (RTK Query)

All APIs have been set up in Redux using RTK Query at `src/store/api/justEducationApi.ts`

### Static Dropdown APIs (All support: search, orderBy, orderIn)

1. **GET /ownerships** ✅
   - Hook: `useGetOwnershipsQuery(params?)`
   - Lazy: `useLazyGetOwnershipsQuery()`

2. **GET /types** ✅
   - Hook: `useGetTypesQuery(params?)`
   - Lazy: `useLazyGetTypesQuery()`
   - Supports filter: `business_category_id`

3. **GET /affiliations** ✅
   - Hook: `useGetAffiliationsQuery(params?)`
   - Lazy: `useLazyGetAffiliationsQuery()`
   - Supports filter: `business_category`

4. **GET /education-boards** ✅
   - Hook: `useGetEducationBoardsQuery(params?)`
   - Lazy: `useLazyGetEducationBoardsQuery()`

5. **GET /school-classes** ✅
   - Hook: `useGetSchoolClassesQuery(params?)`
   - Lazy: `useLazyGetSchoolClassesQuery()`

6. **GET /facilities** ✅
   - Hook: `useGetFacilitiesQuery(params?)`
   - Lazy: `useLazyGetFacilitiesQuery()`

7. **GET /education-levels** ✅
   - Hook: `useGetEducationLevelsQuery(params?)`
   - Lazy: `useLazyGetEducationLevelsQuery()`

8. **GET /course-categories** ✅
   - Hook: `useGetCourseCategoriesQuery(params?)`
   - Lazy: `useLazyGetCourseCategoriesQuery()`

9. **GET /course-specializations** ✅
   - Hook: `useGetCourseSpecializationsQuery(params?)`
   - Lazy: `useLazyGetCourseSpecializationsQuery()`

10. **GET /photo-categories** ✅
    - Hook: `useGetPhotoCategoriesQuery(params?)`
    - Lazy: `useLazyGetPhotoCategoriesQuery()`

### Organization APIs

11. **GET /organization-overviews/{organization_id}** ✅
    - Hook: `useGetOrganizationOverviewsQuery(organizationId)`
    - Lazy: `useLazyGetOrganizationOverviewsQuery()`

12. **GET /organization-facilities/{organization_id}** ✅
    - Hook: `useGetOrganizationFacilitiesQuery(organizationId)`
    - Lazy: `useLazyGetOrganizationFacilitiesQuery()`

13. **GET /organization-photos/{organization_id}** ✅
    - Hook: `useGetOrganizationPhotosQuery(organizationId)`
    - Lazy: `useLazyGetOrganizationPhotosQuery()`

14. **GET /organization-videos/{organization_id}** ✅
    - Hook: `useGetOrganizationVideosQuery(organizationId)`
    - Lazy: `useLazyGetOrganizationVideosQuery()`

---

## 📍 Current API Usage in Codebase

### ✅ Currently Integrated (Using Direct Axios Calls)

#### 1. **SchoolDetailsPage.tsx** (`src/pages/SchoolDetailsPage.tsx`)

**APIs Currently Used:**
- ✅ `/types` - Line 1401
  ```typescript
  const res = await api.get<ApiResponse<Type[]>>("/types");
  ```
  - **Status**: Can be migrated to `useGetTypesQuery()`

- ✅ `/ownerships` - Line 1418
  ```typescript
  const res = await api.get<ApiResponse<Ownership[]>>("/ownerships");
  ```
  - **Status**: Can be migrated to `useGetOwnershipsQuery()`

- ✅ `/education-boards` - Line 1448
  ```typescript
  const res = await api.get<ApiResponse<EducationBoard[]>>("/education-boards");
  ```
  - **Status**: Can be migrated to `useGetEducationBoardsQuery()`

- ✅ `/affiliations` - Line 1477
  ```typescript
  const res = await api.get<ApiResponse<Affiliation[]>>("/affiliations");
  ```
  - **Status**: Can be migrated to `useGetAffiliationsQuery()`

- ✅ `/school-classes` - Line 1507
  ```typescript
  const res = await api.get<ApiResponse<SchoolClass[]>>("/school-classes");
  ```
  - **Status**: Can be migrated to `useGetSchoolClassesQuery()`

- ✅ `/organization-overviews/{id}` - Line 1571
  ```typescript
  const res = await api.get<OrganizationOverviewResponse>(`/organization-overviews/${schoolDetails.id}`);
  ```
  - **Status**: Can be migrated to `useGetOrganizationOverviewsQuery(schoolDetails.id)`

- ✅ `/organization-photos/{id}` - Line 1739
  ```typescript
  const res = await api.get<OrganizationPhotosResponse>(`/organization-photos/${schoolDetails.id}`);
  ```
  - **Status**: Can be migrated to `useGetOrganizationPhotosQuery(schoolDetails.id)`

- ✅ `/organization-facilities/{id}` - Line 1796
  ```typescript
  const res = await api.get<OrganizationFacilityResponse>(`/organization-facilities/${schoolDetails.id}`);
  ```
  - **Status**: Can be migrated to `useGetOrganizationFacilitiesQuery(schoolDetails.id)`

- ✅ `/organization-videos/{id}` - Line 1815
  ```typescript
  const res = await api.get<OrganizationVideosResponse>(`/organization-videos/${schoolDetails.id}`);
  ```
  - **Status**: Can be migrated to `useGetOrganizationVideosQuery(schoolDetails.id)`

**Other APIs Used (Not in the provided list):**
- `/organization-admissions/{id}` - Line 1598
- `/organization-contacts/{id}` - Line 1701
- `/organization-curricula/{id}` - Line 1720
- `/organization-featured-posts/{id}` - Line 1758
- `/organization-faqs/{id}` - Line 1777
- `/organization-timings/{id}` - Line 1834
- `/organization-featured-photos/{id}` - Line 1849
- `/organization-programs/{id}` - Line 1870

#### 2. **Header.tsx** (`src/components/Header.tsx`)

**APIs Currently Used:**
- ✅ `/business-categories` - Line 75
  ```typescript
  const response = await api.get<ApiResponse<Category[]>>('/business-categories');
  ```
  - **Status**: Not in the provided API list, but used for navigation

#### 3. **SchoolPage.tsx** (`src/pages/SchoolPage.tsx`)

**APIs Currently Used:**
- ✅ `/organizations-by-category/{slug}` - Line 451
  ```typescript
  const response = await api.get<ApiResponse<Currentschool[]>>(`/organizations-by-category/${slug}`);
  ```
  - **Status**: Not in the provided API list, but used for listing schools

---

## 🔄 Migration Guide

### Example: Migrating from Axios to RTK Query

**Before (Axios):**
```typescript
const [types, setTypes] = useState<Type[]>([]);
const [typesLoading, setTypesLoading] = useState(true);

useEffect(() => {
  const fetchTypes = async () => {
    try {
      setTypesLoading(true);
      const res = await api.get<ApiResponse<Type[]>>("/types");
      setTypes(res.data.data);
    } catch (error) {
      console.error("Error fetching types:", error);
    } finally {
      setTypesLoading(false);
    }
  };
  fetchTypes();
}, []);
```

**After (RTK Query):**
```typescript
import { useGetTypesQuery } from '../store/api/justEducationApi';

// In component:
const { data, isLoading, error } = useGetTypesQuery({
  search: 'school',
  business_category_id: 2,
  orderBy: 'name',
  orderIn: 'asc'
});

const types = data?.data || [];
const typesLoading = isLoading;
```

### Benefits of RTK Query:
- ✅ Automatic caching (no duplicate requests)
- ✅ Automatic loading/error states
- ✅ Request deduplication
- ✅ Automatic refetching on window focus
- ✅ Optimistic updates support
- ✅ TypeScript types included

---

## 📝 Usage Examples

### 1. Basic Query (No Parameters)
```typescript
import { useGetOwnershipsQuery } from '../store/api/justEducationApi';

const { data, isLoading, error } = useGetOwnershipsQuery();
const ownerships = data?.data || [];
```

### 2. Query with Parameters
```typescript
import { useGetTypesQuery } from '../store/api/justEducationApi';

const { data, isLoading, error } = useGetTypesQuery({
  search: 'school',
  business_category_id: 2,
  orderBy: 'name',
  orderIn: 'asc'
});
```

### 3. Organization Query (Requires ID)
```typescript
import { useGetOrganizationPhotosQuery } from '../store/api/justEducationApi';

const { data, isLoading, error } = useGetOrganizationPhotosQuery(organizationId);
const photos = data?.data || [];
```

### 4. Conditional Query (Lazy)
```typescript
import { useLazyGetFacilitiesQuery } from '../store/api/justEducationApi';

const [fetchFacilities, { data, isLoading }] = useLazyGetFacilitiesQuery();

// Call when needed:
const handleClick = () => {
  fetchFacilities({ business_category: 1 });
};
```

---

## 🎯 Next Steps

1. **Migrate SchoolDetailsPage.tsx** to use RTK Query hooks
2. **Add missing APIs** if needed (organization-admissions, contacts, etc.)
3. **Update other components** that use these APIs
4. **Remove manual loading/error state management** (handled by RTK Query)
5. **Test all endpoints** to ensure they work correctly

---

## 📚 API Base URL

Currently configured in `src/utils/env.ts`:
- Default: `https://justeducation.britannicaoverseas.com/api/`
- Can be overridden with `VITE_API_BASE_URL` environment variable
