import toast from 'react-hot-toast';

/**
 * Utility functions for displaying toast notifications
 */
export const toastUtils = {
  /**
   * Show success message
   */
  success: (message: string) => {
    toast.success(message);
  },

  /**
   * Show error message
   */
  error: (message: string) => {
    toast.error(message);
  },

  /**
   * Show loading message and return toast ID for updating
   */
  loading: (message: string) => {
    return toast.loading(message);
  },

  /**
   * Show promise toast (for async operations)
   */
  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    }
  ) => {
    return toast.promise(promise, messages);
  },

  /**
   * Dismiss a specific toast
   */
  dismiss: (toastId: string) => {
    toast.dismiss(toastId);
  },

  /**
   * Show info message
   */
  info: (message: string) => {
    toast(message, {
      icon: 'ℹ️',
    });
  },
};

