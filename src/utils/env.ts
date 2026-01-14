// Environment variables configuration
export const env = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://backend.justeducation.in/api/',
  API_KEY: import.meta.env.VITE_API_KEY || 'dfhsdfhsd8fysd8fsd8fysdfyysd8fysd8fysd8fysd8dsfsd',
  
  // App Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Just Education',
  APP_ENV: import.meta.env.MODE || 'development',
  
  // Feature Flags
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  ENABLE_ERROR_REPORTING: import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true',
  
  // Check if production
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
} as const;

// Validate required environment variables in production
if (env.isProduction) {
  const requiredVars = ['VITE_API_BASE_URL', 'VITE_API_KEY'];
  const missingVars = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  );
  
  if (missingVars.length > 0) {
    console.warn(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}

