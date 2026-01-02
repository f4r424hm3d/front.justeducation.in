import type React from 'react';
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import './InvestorRelationsPage.css';
import { FaEnvelope, FaPhone, FaUser, FaPaperPlane, FaPlus, FaMinus } from 'react-icons/fa';

interface FloatingLabelInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  [key: string]: any;
}
const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, name, value, onChange, type = 'text', onBlur, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative mb-0">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={e => { setFocused(false); onBlur && onBlur(e); }}
        className="peer w-full h-[38px] border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base placeholder-transparent"
        placeholder={label}
        autoComplete="off"
        {...props}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 pointer-events-none bg-white px-1
          ${focused || value ? '-top-3 text-xs text-blue-600' : 'top-2.5 text-base text-gray-500'}`}
        style={{ background: 'white' }}
      >
        {label}
      </label>
    </div>
  );
};

interface FloatingLabelTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  [key: string]: any;
}
const FloatingLabelTextarea: React.FC<FloatingLabelTextareaProps> = ({ label, name, value, onChange, onBlur, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative mb-0">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={e => { setFocused(false); onBlur && onBlur(e); }}
        className="peer border border-gray-300 rounded-md px-4 pt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base placeholder-transparent resize-none w-full md:w-[383px]"
        style={{ height: 80 }}
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 pointer-events-none bg-white px-1
          ${focused || value ? '-top-3 text-xs text-blue-600' : 'top-2.5 text-base text-gray-500'}`}
        style={{ background: 'white' }}
      >
        {label}
      </label>
    </div>
  );
};

const pressReleases = [
  {
    title: 'Q4 2023 Financial Results',
    date: 'January 15, 2024',
    details: 'Just Education Inc. reported strong Q4 2023 results, with revenue growth of 18% year-over-year, driven by increased enrollments and new product launches. The company also announced a strategic investment in digital learning infrastructure and expanded its presence in new regions. For more details, download the full report or contact our investor relations team.'
  },
  {
    title: 'New Partnership Announcement',
    date: 'December 20, 2023',
    details: 'Just Education Inc. has entered into a partnership with EduTech Global to enhance its online learning offerings. This collaboration will bring advanced AI-driven learning tools to students and educators, furthering our mission to make quality education accessible to all. More information about the partnership and its benefits will be shared in upcoming webinars.'
  }
];

const faqs = [
  {
    question: 'How can I access the latest financial reports?',
    answer: 'All our latest financial reports are available in the Financial Reports section above. You can download annual, quarterly, and SEC filings directly from this page.'
  },
  {
    question: 'Who do I contact for investor inquiries?',
    answer: 'You can use the Investor Inquiries form on this page or email us at investors@justeducation.com. Our Investor Relations team will respond promptly.'
  },
  {
    question: 'Where can I find stock information?',
    answer: 'Stock data, including current price, 52-week range, and market cap, is available in the Stock Information section above.'
  },
  {
    question: 'How do I receive press releases and updates?',
    answer: 'Subscribe to our newsletter or check the Press Releases section regularly for the latest updates and announcements.'
  },
  {
    question: 'Is there a dedicated team for institutional investors?',
    answer: 'Yes, we have a dedicated team for institutional investors. Please use the contact form or email us for personalized assistance.'
  }
];

const InvestorRelationsPage: React.FC = () => {
  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [expandedPress, setExpandedPress] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validateEmail = (email: string) => /.+@.+\..+/.test(email);
  const isValid = form.name && form.email && validateEmail(form.email) && form.message;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
    }, 1200);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-blue-700 text-white py-20">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              filter: "brightness(0.4) saturate(1.2)",
            }}
          >
            <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Access our financial strategy, reports, stock data, leadership details, press releases, and investor contact information.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Financial Strategy Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Financial Strategy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Growth Strategy</h3>
                <p className="text-gray-600">
                  Our comprehensive growth strategy focuses on expanding our educational technology platform
                  while maintaining sustainable profitability and shareholder value.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Investment Priorities</h3>
                <p className="text-gray-600">
                  We prioritize investments in technology infrastructure, market expansion,
                  and product development to drive long-term growth and market leadership.
                </p>
              </div>
            </div>
          </section>

          {/* Financial Reports Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Financial Reports</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Annual Reports</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">2023 Annual Report</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">2022 Annual Report</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">2021 Annual Report</a></li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Quarterly Reports</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">Q4 2023</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">Q3 2023</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">Q2 2023</a></li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">SEC Filings</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">10-K Reports</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">10-Q Reports</a></li>
                  <li><a href="#" className="text-blue-600 hover:text-blue-800">8-K Reports</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stock Information Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Stock Information</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Current Stock Data</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Price:</span>
                      <span className="font-semibold">$XX.XX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">07-Week Range:</span>
                      <span className="font-semibold">$XX.XX</span>
                    </div>
                     <div className="flex justify-between">
                      <span className="text-gray-600">21-Week Range:</span>
                      <span className="font-semibold">$XX.XX</span>
                    </div>
                     <div className="flex justify-between">
                      <span className="text-gray-600">52-Week Range:</span>
                      <span className="font-semibold">$XX.XX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Market Cap:</span>
                      <span className="font-semibold">$XX.XX</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Stock Chart</h3>
                  <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                  <img src="https://img.freepik.com/free-vector/gradient-stock-market-concept_52683-76908.jpg" alt="Profile" className="w-full h-full rounded-2xl object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Leadership Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div> */}
                <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4"><img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" className="w-full h-full object-cover" /></div>
                <h3 className="text-xl font-semibold text-center text-blue-700">John Doe</h3>
                <p className="text-center text-gray-600">Chief Executive Officer</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
               <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4"><img src="https://www.w3schools.com/whatis/img_avatar1.png" alt="Profile" className="w-full h-full object-cover" /></div>
                <h3 className="text-xl font-semibold text-center text-blue-700">Jane Smith</h3>
                <p className="text-center text-gray-600">Chief Financial Officer</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4"><img src="https://www.w3schools.com/w3images/avatar6.png" alt="Profile" className="w-full h-full object-cover" /></div>
                <h3 className="text-xl font-semibold text-center text-blue-700">Mike Johnson</h3>
                <p className="text-center text-gray-600">Chief Technology Officer</p>
              </div>
            </div>
          </section>

          {/* Press Releases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((pr, idx) => (
                <div key={pr.title} className="bg-white rounded-xl shadow p-6 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <div className="text-2xl font-semibold text-blue-700 mb-1">{pr.title}</div>
                      <div className="text-gray-600 mb-2">{pr.date}</div>
                    </div>
                    <button
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 self-start md:self-center"
                      onClick={() => setExpandedPress(expandedPress === idx ? null : idx)}
                    >
                      {expandedPress === idx ? 'Close' : 'Read More'} <span aria-hidden>→</span>
                    </button>
                  </div>
                  {expandedPress === idx && (
                    <div className="mt-4 text-gray-700 border-t pt-4 animate-fade-in">
                      {pr.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-0 sm:p-0 flex flex-col mx-auto md:max-w-4xl overflow-hidden animate-fade-in-up">
              <div className="w-full p-8">
                <h2 className="text-3xl font-bold text-center mb-2">Frequently asked questions</h2>
                <p className="text-gray-500 text-center mb-8">Everything you need to know about Investor Relations at Just Education.</p>
                <div className="divide-y">
                  {faqs.map((faq, idx) => (
                    <div key={faq.question}>
                      <button
                        className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none hover:bg-gray-50 transition"
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      >
                        <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                        <span className="ml-4 text-gray-400">
                          {openFaq === idx ? <FaMinus /> : <FaPlus />}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-6 pb-5 text-gray-700 animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Investor Contact</h2>
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-0 sm:p-0 flex flex-col md:flex-row overflow-hidden animate-fade-in-up relative z-10 md:mx-auto md:max-w-4xl">
              {/* Left: Contact Info */}
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2"><FaUser className="text-blue-400" /> Contact Information</h3>
                <div className="mb-6 text-gray-700 space-y-1">
                  <div className="font-semibold">Investor Relations Department</div>
                  <div>Just Education Inc.</div>
                  <div>123 Education Street</div>
                  <div>New York, NY 10001</div>
                  <div className="flex items-center gap-2 mt-2"><FaEnvelope className="text-blue-500" /><span className="font-semibold">Email:</span> <a href="mailto:investors@justeducation.com" className="hover:underline text-blue-700">investors@justeducation.com</a></div>
                  <div className="flex items-center gap-2"><FaPhone className="text-blue-500" /><span className="font-semibold">Phone:</span> <a href="tel:5551234567" className="hover:underline text-blue-700">(555) 123-4567</a></div>
                </div>
              </div>
              {/* Right: Investor Inquiries Form */}
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-white">
                <h4 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2"><FaPaperPlane className="text-blue-400" /> Investor Inquiries</h4>
                {success ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-md px-4 py-3 text-center font-medium animate-fade-in">
                    Thank you for reaching out! We have received your inquiry.
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <FloatingLabelInput
                      label="Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && !form.name && <div className="text-red-500 text-xs ml-1">Name is required</div>}
                    <FloatingLabelInput
                      label="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                    />
                    {touched.email && (!form.email || !validateEmail(form.email)) && <div className="text-red-500 text-xs ml-1">Valid email is required</div>}
                    <FloatingLabelTextarea
                      label="Message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.message && !form.message && <div className="text-red-500 text-xs ml-1">Message is required</div>}
                    <button
                      type="submit"
                      className="w-full mt-2 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition text-lg shadow flex items-center justify-center gap-2 disabled:opacity-60"
                      disabled={loading}
                    >
                      {loading && <span className="loader mr-2"></span>}
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default InvestorRelationsPage; 