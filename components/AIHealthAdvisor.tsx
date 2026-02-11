
import React, { useState } from 'react';
import { getHealthAdvice } from '../geminiService';

const AIHealthAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const result = await getHealthAdvice(query);
      setAdvice(result);
    } catch (err) {
      setAdvice("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-900 py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-600/30 text-blue-300 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border border-blue-500/30 mb-4 inline-block">
            AI Health Assistant (Experimental)
          </span>
          <h2 className="text-4xl font-extrabold mb-4">Not sure which test to take?</h2>
          <p className="text-blue-200 text-lg">Describe your symptoms or concerns, and our AI will suggest relevant screening packages.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input 
              type="text"
              placeholder="e.g. 'I feel tired and have occasional joint pain'"
              className="flex-grow bg-white/5 border border-white/20 rounded-2xl p-5 text-white placeholder-blue-300 outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button 
              onClick={handleAsk}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-400 disabled:bg-blue-800 text-white font-bold px-10 py-5 rounded-2xl transition shadow-lg whitespace-nowrap"
            >
              {loading ? 'Thinking...' : 'Analyze Health'}
            </button>
          </div>

          {advice && (
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-sm">🤖</div>
                <h4 className="font-bold">AI Suggestion:</h4>
              </div>
              <p className="text-blue-100 leading-relaxed whitespace-pre-wrap">{advice}</p>
            </div>
          )}
        </div>
        
        <p className="text-center text-[10px] text-blue-400 mt-6 uppercase tracking-widest font-bold">
          Disclaimer: This tool is for informational purposes only. Consult a doctor for medical diagnosis.
        </p>
      </div>
    </div>
  );
};

export default AIHealthAdvisor;