import { useState, useCallback } from 'react';

/**
 * Custom hook for form state management
 * Reduces form handling code from 20-30 lines to 1 line
 * 
 * @example
 * const { formData, handleChange, resetForm } = useForm({
 *   name: '',
 *   email: '',
 *   age: 0
 * });
 */
export function useForm<T extends Record<string, any>>(initialValues: T) {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const handleNestedChange = useCallback((
    parent: keyof T,
    field: string,
    value: any
  ) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value,
      },
    }));
  }, []);

  const handleArrayChange = useCallback((
    field: keyof T,
    index: number,
    value: any
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as any[]).map((item, i) =>
        i === index ? value : item
      ),
    }));
  }, []);

  const addArrayItem = useCallback((field: keyof T, defaultValue: any = '') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as any[]), defaultValue],
    }));
  }, []);

  const removeArrayItem = useCallback((field: keyof T, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as any[]).filter((_, i) => i !== index),
    }));
  }, []);

  const setField = useCallback((field: keyof T, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialValues);
  }, [initialValues]);

  const updateForm = useCallback((updates: Partial<T>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  return {
    formData,
    setFormData,
    handleChange,
    handleNestedChange,
    handleArrayChange,
    addArrayItem,
    removeArrayItem,
    setField,
    resetForm,
    updateForm,
  };
}
