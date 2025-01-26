// PowerToBuild.tsx
import React from 'react';
import { Code, Wrench, GitBranch } from 'lucide-react';

const PowerToBuild = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">Power to Build</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create software and tools using AI-assisted development to bring your ideas to life.
        </p>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">AI-Assisted Development</h3>
            <p className="text-gray-600">
              Leverage tools like Github Copilot and ChatGPT to accelerate your development process.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Wrench className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">No-Code Solutions</h3>
            <p className="text-gray-600">
              Build applications without traditional coding using AI-powered no-code platforms.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <GitBranch className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Custom Tools</h3>
            <p className="text-gray-600">
              Create specialized tools and applications tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerToBuild;