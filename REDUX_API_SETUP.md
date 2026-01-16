# Redux API Setup - Quick Reference

## ✅ What Was Done

All JustEducation APIs have been integrated into Redux using **RTK Query** for efficient state management, caching, and automatic loading/error handling.

## 📁 Files Created/Modified

1. **`src/store/api/justEducationApi.ts`** - Main API slice with all endpoints
2. **`src/store/store.ts`** - Updated to include API slice
3. **`API_INTEGRATION_REPORT.md`** - Detailed integration report

## 🚀 How to Use

### Import the hooks:
```typescript
import { 
  useGetOwnershipsQuery,
  useGetTypesQuery,
  useGetOrganizationPhotosQuery,
  // ... etc
} from '../store/api/justEducationApi';
```

### Example Usage:

```typescript
// Static dropdown with filters
const { data, isLoading, error } = useGetTypesQuery({
  search: 'school',
  business_category_id: 2,
  orderBy: 'name',
  orderIn: 'asc'
});

// Organization data (requires ID)
const { data: photos, isLoading: photosLoading } = useGetOrganizationPhotosQuery(organizationId);
```

## 📋 Available Hooks

### Static Dropdowns:
- `useGetOwnershipsQuery(params?)`
- `useGetTypesQuery(params?)`
- `useGetAffiliationsQuery(params?)`
- `useGetEducationBoardsQuery(params?)`
- `useGetSchoolClassesQuery(params?)`
- `useGetFacilitiesQuery(params?)`
- `useGetEducationLevelsQuery(params?)`
- `useGetCourseCategoriesQuery(params?)`
- `useGetCourseSpecializationsQuery(params?)`
- `useGetPhotoCategoriesQuery(params?)`

### Organization Data:
- `useGetOrganizationOverviewsQuery(organizationId)`
- `useGetOrganizationFacilitiesQuery(organizationId)`
- `useGetOrganizationPhotosQuery(organizationId)`
- `useGetOrganizationVideosQuery(organizationId)`

### Lazy Hooks (for conditional fetching):
All hooks have lazy versions prefixed with `useLazy` (e.g., `useLazyGetOwnershipsQuery()`)

## 🔍 Where APIs Are Currently Used

**SchoolDetailsPage.tsx** uses:
- `/types` ✅
- `/ownerships` ✅
- `/education-boards` ✅
- `/affiliations` ✅
- `/school-classes` ✅
- `/organization-overviews/{id}` ✅
- `/organization-photos/{id}` ✅
- `/organization-facilities/{id}` ✅
- `/organization-videos/{id}` ✅

**Status**: All can be migrated from direct axios calls to RTK Query hooks.

See `API_INTEGRATION_REPORT.md` for detailed migration guide.
