// Error handling utilities for production

export interface AppError {
  message: string;
  code?: string;
  status?: number;
  timestamp: Date;
}

export class AppErrorHandler {
  private static errorLog: AppError[] = [];

  static handleError(error: unknown, context?: string): AppError {
    let appError: AppError;

    if (error instanceof Error) {
      appError = {
        message: error.message,
        timestamp: new Date(),
      };
    } else if (typeof error === 'string') {
      appError = {
        message: error,
        timestamp: new Date(),
      };
    } else {
      appError = {
        message: 'An unknown error occurred',
        timestamp: new Date(),
      };
    }

    // Add context if provided
    if (context) {
      appError.message = `[${context}] ${appError.message}`;
    }

    // Log error
    console.error('Error:', appError);

    // In production, you might want to send this to an error reporting service
    if (import.meta.env.PROD) {
      this.logError(appError);
    }

    return appError;
  }

  private static logError(error: AppError) {
    this.errorLog.push(error);
    
    // Keep only last 100 errors in memory
    if (this.errorLog.length > 100) {
      this.errorLog.shift();
    }

    // In production, send to error reporting service
    // Example: Sentry, LogRocket, etc.
    if (import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true') {
      // errorReportingService.captureException(error);
    }
  }

  static getErrorLog(): AppError[] {
    return [...this.errorLog];
  }

  static clearErrorLog() {
    this.errorLog = [];
  }
}

// React Error Boundary helper
export const getErrorBoundaryMessage = (error: Error, errorInfo?: React.ErrorInfo): string => {
  return `Error: ${error.message}\nStack: ${error.stack}`;
};

