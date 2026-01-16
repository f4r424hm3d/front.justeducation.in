import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PageLoader } from '../utils/loading';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

/**
 * ProtectedRoute component that guards routes based on authentication status
 * @param children - The component to render if access is granted
 * @param requireAuth - If true, requires authentication. If false, redirects if authenticated (for login/signup pages)
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true 
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loading while checking auth status
  if (isLoading) {
    return <PageLoader message="Checking authentication..." />;
  }

  // If route requires auth but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    // Save the attempted location for redirect after login
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // If route should be accessible only when NOT authenticated (login/signup)
  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  return <>{children}</>;
};

