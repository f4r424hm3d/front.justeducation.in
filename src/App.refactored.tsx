import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { routes, pages } from './config/routes';
import { PageLoader } from './utils/loading';
import { ProtectedRoute } from './components/ProtectedRoute';

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
          {routes.map(({ path, component, protected: isProtected }) => {
            const Component = pages[component];
            const routeElement = isProtected ? (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ) : (
              <Component />
            );

            return <Route key={path} path={path} element={routeElement} />;
          })}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
