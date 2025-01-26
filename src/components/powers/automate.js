// PowerToAutomate.tsx
import React from 'react';
import { Bot, Workflow, Zap } from 'lucide-react';

const PowerToAutomate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="text-center py-12 px-4 bg-purple-50">
        <h1 className="text-4xl font-bold mb-4">Power to Automate</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Harness AI agents and workflow automation to streamline processes and boost productivity.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Bot className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">AI Agents</h3>
            <p className="text-gray-600">
              Deploy intelligent AI agents to handle repetitive tasks and workflows automatically.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Workflow className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
            <p className="text-gray-600">
              Create efficient automated workflows that connect your tools and processes seamlessly.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Process Optimization</h3>
            <p className="text-gray-600">
              Optimize and streamline business processes using AI-powered automation tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerToAutomate;