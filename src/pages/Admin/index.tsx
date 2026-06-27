import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const forms = [
  { name: 'Risk Webinar Form', url: 'https://docs.google.com/forms/d/1W9K4DB65aVDQdwtliiixP7RfGO7mOnFb5kAccpKb6Wc/edit' },
  { name: 'Contact Us Form', url: 'https://docs.google.com/forms/d/1YqgHuJTiFY6IMcB434GlliKMgzQZOolRxBv3AnyUWa0/edit' },
  { name: 'Career Opportunities', url: 'https://docs.google.com/forms/d/13X5w0JwxFLiq23hVHlTLACPXfrmINuWqSLwwD0IVVcE/edit' },
];

export const Admin: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
        <button onClick={handleLogout} className="text-sm text-red-600 hover:text-red-800 font-medium">
          Logout
        </button>
      </header>

      <div className="max-w-3xl mx-auto p-6">
        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">#</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Form</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Link</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form, i) => (
              <tr key={i} className="border-t border-gray-100">
                <td className="px-6 py-4 text-sm text-gray-600">{i + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{form.name}</td>
                <td className="px-6 py-4">
                  <a href={form.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                    Open Form
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
