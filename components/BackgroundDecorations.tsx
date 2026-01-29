import React from 'react';

const CloudIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-0.355,0.036-0.702,0.101-1.042C11.666,12.186,11.099,12,10.5,12 c-2.485,0-4.5,2.015-4.5,4.5c0,0.176,0.015,0.347,0.038,0.517C4.693,17.218,3.5,18.461,3.5,20c0,1.933,1.567,3.5,3.5,3.5h10.5 c2.485,0,4.5-2.015,4.5-4.5S19.985,19,17.5,19z" opacity="0.6"/>
  </svg>
);

const GameControllerIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
);

const RocketIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const StarIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes drift {
            0% { transform: translateX(-10%); }
            50% { transform: translateX(10%); }
            100% { transform: translateX(-10%); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-slow { animation: float 8s ease-in-out infinite; }
          .animate-drift { animation: drift 20s ease-in-out infinite; }
        `}
      </style>

      {/* Clouds */}
      <div className="absolute top-10 left-10 text-white opacity-80 animate-drift">
        <CloudIcon className="w-32 h-32 md:w-48 md:h-48 text-sky-100" />
      </div>
      <div className="absolute top-20 right-20 text-white opacity-60 animate-drift" style={{ animationDelay: '2s' }}>
        <CloudIcon className="w-24 h-24 md:w-36 md:h-36 text-sky-100" />
      </div>
      <div className="absolute bottom-10 left-1/4 text-white opacity-50 animate-drift" style={{ animationDelay: '5s' }}>
        <CloudIcon className="w-40 h-40 text-indigo-50" />
      </div>

      {/* Cute Graphics */}
      <div className="absolute top-24 left-10 md:left-32 text-purple-300 animate-float hidden lg:block">
        <GameControllerIcon className="w-16 h-16 opacity-40 rotate-12" />
      </div>
      
      <div className="absolute top-32 right-10 md:right-40 text-pink-300 animate-float-slow hidden lg:block">
        <RocketIcon className="w-16 h-16 opacity-40 -rotate-12" />
      </div>

      <div className="absolute bottom-20 left-10 text-yellow-300 animate-float" style={{ animationDelay: '1s' }}>
        <StarIcon className="w-12 h-12 opacity-60" />
      </div>
      
      <div className="absolute top-1/2 right-5 text-indigo-300 animate-float-slow hidden lg:block">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14 opacity-30">
           <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundDecorations;
