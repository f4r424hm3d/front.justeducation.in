import type React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone } from 'react-icons/fa';
import { useUser } from '../context/UserContext';

const countryCodes = [
  { code: '+91', label: '🇮🇳' },
  { code: '+1', label: '🇺🇸' },
  { code: '+44', label: '🇬🇧' },
  { code: '+61', label: '🇦🇺' },
  { code: '+81', label: '🇯🇵' },
  // Add more as needed
];

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState(countryCodes[0].code);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation (add more as needed)
    if (!fullName || !email || !phone || !password || password !== confirmPassword) return;
    
    // Include password in the user data for authentication
    setUser({ fullName, email, countryCode, phone, password });
    navigate('/profile');
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-sm">
          {/* Heading Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="text-3xl font-bold tracking-widest mb-2">
              <span className="text-blue-900">Just</span><span className="text-orange-500">Education</span>
            </div>
            <div className="text-2xl font-extrabold mb-1">Create an account</div>
            <div className="text-center text-gray-600 text-base">Join JustEducation today and start exploring your documents in a whole new way</div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-1">Full Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                  />
                </div>
              </div>
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
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Contact Number</label>
                <div className="flex">
                  <div className="flex items-center border border-r-0 rounded-l-lg bg-gray-50 px-2">
                    <span className="mr-1">
                      {countryCodes.find(c => c.code === countryCode)?.label}
                    </span>
                    <select
                      className="bg-gray-50 outline-none text-gray-700"
                      value={countryCode}
                      onChange={e => setCountryCode(e.target.value)}
                    >
                      {countryCodes.map(c => (
                        <option key={c.code} value={c.code}>{c.code}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    className="w-full rounded-r-lg border border-l-0 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Password</label>
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
              <div>
                <label className="block font-semibold mb-1">Confirm Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaLock />
                  </span>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" id="terms" />
                <label htmlFor="terms" className="text-sm">I agree to the <a href="#" className="text-blue-600 font-semibold hover:underline">terms of service</a> and <a href="#" className="text-blue-600 font-semibold hover:underline">privacy policy</a></label>
              </div>
              <button type="submit" className="w-full py-2 bg-purple-400 text-white rounded-lg font-semibold text-base hover:bg-purple-500 transition">Create account</button>
              <div className="text-center text-sm mt-2">
                Already have an account?{' '}
                <Link to="/signin" className="text-blue-600 font-semibold hover:underline">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUpPage;
