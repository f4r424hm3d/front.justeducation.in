import type React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';
import { useUser } from '../context/UserContext';

const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Attempt to sign in
    const success = signIn(email, password);
    if (success) {
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-sm">
          {/* Heading Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="text-2xl font-bold tracking-widest mb-2">
              <span className="text-blue-900">Just</span><span className="text-orange-500">Education</span>
            </div>
            <div className="text-2xl font-extrabold mb-1">Sign in to your account</div>
            <div className="text-center text-gray-600 text-base">Welcome back! Enter your credentials to continue</div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 flex items-center">
                <FaExclamationCircle className="mr-2" />
                <span>{error}</span>
              </div>
            )}
            <div className="flex items-center mb-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="mx-4 text-gray-400 text-sm">Or continue with email</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-1">Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block font-semibold">Password</label>
                  <Link to="/forgot-password" className="text-blue-600 text-sm font-semibold hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaLock />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                    onClick={() => setShowPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
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
                <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Create one now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignInPage;
