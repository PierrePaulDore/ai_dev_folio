// PowerToCreate.tsx
import React from 'react';
import { Palette, Image, FileText } from 'lucide-react';

const PowerToCreate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="text-center py-12 px-4 bg-green-50">
        <h1 className="text-4xl font-bold mb-4">Power to Create</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Generate professional-grade content and designs using AI-powered creative tools.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Visual Content</h3>
            <p className="text-gray-600">
              Create stunning visuals and designs using AI image generation tools.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FileText className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Written Content</h3>
            <p className="text-gray-600">
              Generate engaging written content with AI writing assistance.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Palette className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Creative Assets</h3>
            <p className="text-gray-600">
              Produce professional creative assets for various marketing needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerToCreate;