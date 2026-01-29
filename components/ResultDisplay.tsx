import React, { useState } from 'react';

interface ResultDisplayProps {
  prompt: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!prompt) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100 h-full flex flex-col items-center justify-center text-center opacity-70">
        <div className="bg-purple-50 p-6 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-600 mb-2">Chưa có kết quả</h3>
        <p className="text-slate-500 max-w-xs">Nhập thông tin bên trái và nhấn nút để AI tạo ra prompt lập trình game chuyên nghiệp cho bạn.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-purple-100 h-full flex flex-col relative overflow-hidden">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="font-semibold">Prompt đã tạo thành công</h3>
        </div>
        <button 
          onClick={handleCopy}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${copied ? 'bg-green-500 text-white' : 'bg-slate-600 hover:bg-slate-500 text-slate-100'}`}
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Đã sao chép
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Sao chép
            </>
          )}
        </button>
      </div>
      
      <div className="flex-grow p-6 overflow-y-auto bg-slate-50">
        <div className="prose prose-sm prose-purple max-w-none">
          <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            {prompt}
          </pre>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-slate-100 text-xs text-center text-slate-400">
        Sử dụng prompt này trong ChatGPT, Claude hoặc Gemini để nhận code hoàn chỉnh.
      </div>
    </div>
  );
};

export default ResultDisplay;