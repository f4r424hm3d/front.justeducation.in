# Just Education - Frontend Application

A production-ready React application built with TypeScript, Vite, Redux Toolkit, and Tailwind CSS.

## 🚀 Features

- **Redux Toolkit** - Modern state management with Redux Toolkit
- **Code Splitting** - Lazy-loaded routes for optimal performance
- **Error Boundaries** - Comprehensive error handling
- **Environment Variables** - Secure configuration management
- **Production Optimizations** - Optimized builds with code splitting
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Installation

```bash
npm install
```

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=https://backend.justeducation.in/api/
VITE_API_KEY=your_api_key_here

# App Configuration
VITE_APP_NAME=Just Education

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_ERROR_REPORTING=false
```

## 🛠️ Development

```bash
npm run dev
```

## 🏗️ Production Build

```bash
npm run build
```

The build output will be in the `dist` directory, optimized for production with:
- Code splitting
- Minification
- Tree shaking
- Asset optimization

## 📁 Project Structure

```
src/
├── store/              # Redux store configuration
│   ├── store.ts        # Store setup
│   ├── hooks.ts        # Typed Redux hooks
│   └── slices/         # Redux slices
│       └── authSlice.ts
├── components/         # React components
│   └── ErrorBoundary.tsx
├── hooks/             # Custom React hooks
│   └── useAuth.ts     # Authentication hook
├── pages/             # Page components (lazy-loaded)
├── utils/             # Utility functions
│   ├── env.ts         # Environment configuration
│   ├── loading.tsx    # Loading components
│   └── errorHandler.ts # Error handling utilities
└── Api.ts             # Axios API configuration
```

## 🔐 State Management

The application uses **Redux Toolkit** for state management. The auth state is managed in `src/store/slices/authSlice.ts`.

### Using Redux in Components

```typescript
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectUser, signOut } from '../store/slices/authSlice';

// Or use the convenience hook
import { useAuth } from '../hooks/useAuth';
```

## 🎯 Key Production Features

1. **Error Boundaries** - Catches React errors and displays user-friendly messages
2. **Code Splitting** - Routes are lazy-loaded to reduce initial bundle size
3. **Environment Variables** - Secure API configuration
4. **API Interceptors** - Automatic error handling and token management
5. **Loading States** - Reusable loading components
6. **Type Safety** - Full TypeScript coverage

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter
- `npm run format` - Format code

## 🔒 Security Notes

- API keys should never be committed to version control
- Use environment variables for all sensitive configuration
- The `.env` file is gitignored by default

## 🐛 Error Handling

Errors are handled at multiple levels:
- **Error Boundaries** - Catch React component errors
- **API Interceptors** - Handle HTTP errors
- **Redux Error State** - Manage application-level errors

## 📚 Additional Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
