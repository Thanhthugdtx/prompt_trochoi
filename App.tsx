import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';
import { GameInputs, AppState } from './types';
import { generateOptimizedPrompt } from './services/geminiService';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<GameInputs>({
    mainGoal: '',
    questionContent: '',
    targetAudience: '',
    gameTasks: '',
    gameFormat: ''
  });

  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);

  const handleGenerate = async () => {
    if (!inputs.mainGoal.trim()) {
      alert("Vui lòng nhập mục tiêu trò chơi!");
      return;
    }

    setAppState(AppState.GENERATING);
    try {
      const result = await generateOptimizedPrompt(inputs);
      setGeneratedPrompt(result);
      setAppState(AppState.SUCCESS);
    } catch (error) {
      setAppState(AppState.ERROR);
      alert("Có lỗi xảy ra khi tạo prompt. Vui lòng kiểm tra kết nối mạng.");
    } finally {
      if (appState !== AppState.ERROR) {
        setAppState(AppState.SUCCESS);
      } else {
        setAppState(AppState.IDLE);
      }
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto flex flex-col">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
          Công cụ tạo Prompt trò chơi cho Canva Code
        </h1>
        <div className="text-2xl font-bold text-indigo-500 mb-3" style={{ fontFamily: 'cursive' }}>
          Thanh_Thu
        </div>
        <p className="text-slate-600">
          Tạo prompt code trò chơi chuyên nghiệp chỉ trong vài giây
        </p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        {/* Left Column: Inputs */}
        <div>
          <InputForm 
            inputs={inputs} 
            setInputs={setInputs} 
            onSubmit={handleGenerate}
            isLoading={appState === AppState.GENERATING}
          />
        </div>

        {/* Right Column: Output */}
        <div>
          <ResultDisplay prompt={generatedPrompt} />
        </div>
      </main>

      <footer className="mt-auto text-center text-slate-400 text-sm py-4 border-t border-slate-200">
        © 2024 Powered by Google Gemini & Canva Style Guidelines
      </footer>
    </div>
  );
};

export default App;