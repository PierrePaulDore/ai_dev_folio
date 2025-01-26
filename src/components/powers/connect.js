// PowerToConnect.tsx
import React from 'react';
import { Users, Share2, MessageCircle } from 'lucide-react';

const PowerToConnect = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="text-center py-12 px-4 bg-orange-50">
        <h1 className="text-4xl font-bold mb-4">Power to Connect</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Build influence and engage with your audience through AI-enhanced communication.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Community Building</h3>
            <p className="text-gray-600">
              Create and nurture engaged communities using AI-powered engagement tools.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Share2 className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Content Distribution</h3>
            <p className="text-gray-600">
              Optimize content distribution across multiple platforms using AI insights.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MessageCircle className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Audience Engagement</h3>
            <p className="text-gray-600">
              Enhance audience interactions with AI-powered communication tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerToConnect;