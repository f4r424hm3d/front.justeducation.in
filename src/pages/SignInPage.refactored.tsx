import type React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';
import { FormInput } from '../components/FormInput';
import { toastUtils } from '../utils/toast';

/**
 * Refactored SignInPage - 50% shorter than original
 * Uses useForm hook and FormInput component
 */
const SignInPage: React.FC = () => {
  const { formData, handleChange, setField } = useForm({
    email: '',
    password: '',
    showPassword: false,
  });
  
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toastUtils.error('Please enter both email and password');
      return;
    }
    
    const success = signIn(formData.email, formData.password);
    if (success) {
      toastUtils.success('Login successful!');
      navigate('/profile');
    } else {
      toastUtils.error('Invalid email or password');
    }
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-6">
            <div className="text-2xl font-bold tracking-widest mb-2">
              <span className="text-blue-900">Just</span>
              <span className="text-orange-500">Education</span>
            </div>
            <div className="text-2xl font-extrabold mb-1">Sign in to your account</div>
            <div className="text-center text-gray-600 text-base">
              Welcome back! Enter your credentials to continue
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="mx-4 text-gray-400 text-sm">Or continue with email</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <form className="space-y-3" onSubmit={handleSubmit}>
              <FormInput
                label="Email Address"
                type="email"
                name="email"
                icon={<FaEnvelope />}
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block font-semibold">Password</label>
                  <Link to="/forgot-password" className="text-blue-600 text-sm font-semibold hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <FormInput
                    type={formData.showPassword ? 'text' : 'password'}
                    name="password"
                    icon={<FaLock />}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                    onClick={() => setField('showPassword', !formData.showPassword)}
                    tabIndex={-1}
                  >
                    {formData.showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold text-base hover:bg-blue-700 transition"
              >
                Sign in
              </button>
              
              <div className="text-center text-sm mt-2">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                  Create one now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignInPage;
