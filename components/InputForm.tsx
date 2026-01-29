import React from 'react';
import { GameInputs } from '../types';

interface InputFormProps {
  inputs: GameInputs;
  setInputs: React.Dispatch<React.SetStateAction<GameInputs>>;
  onSubmit: () => void;
  isLoading: boolean;
}

const EXAMPLES = {
  mainGoal: "Giúp học sinh ôn tập nội dung câu lệnh rẽ nhánh, câu lệnh lặp trong sách giáo khoa Tin học 10 Cánh diều",
  questionContent: "Câu 1: Câu lệnh nào dùng để kiểm tra điều kiện trong Python?\nA. for\nB. if\nC. input\nĐáp án: B\n\nCâu 2: Kết quả của 10 > 5 là?\nA. True\nB. False\nĐáp án: A",
  targetAudience: "Học sinh lớp 10",
  gameTasks: "Trả lời đúng 10 câu hỏi để mở khóa rương kho báu. Dạng kéo thả hoặc chọn đáp án đúng.",
  gameFormat: "Chia thành 4 đội (Tổ 1, Tổ 2, Tổ 3, Tổ 4) tham gia trò chơi. Tương ứng mỗi đội sẽ có nút cộng (+) hoặc (-) để tăng hoặc giảm điểm, nhấn dấu + sẽ tăng 10 điểm cho câu trả lời đúng, nhấn dấu (-) sẽ giảm 5 điểm cho câu trả lời sai."
};

const InputForm: React.FC<InputFormProps> = ({ inputs, setInputs, onSubmit, isLoading }) => {
  const handleChange = (field: keyof GameInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleUseExample = (field: keyof GameInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const ExampleButton = ({ field, value }: { field: keyof GameInputs, value: string }) => (
    <button
      type="button"
      onClick={() => handleUseExample(field, value)}
      className="text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-md transition-colors flex items-center gap-1 ml-auto"
      title="Sử dụng nội dung mẫu này"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
      Chèn mẫu
    </button>
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-100 flex flex-col">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Thiết kế Trò chơi
      </h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg font-bold text-slate-700">
              1. Nội dung / Mục tiêu chính của trò chơi
            </label>
            <ExampleButton field="mainGoal" value={EXAMPLES.mainGoal} />
          </div>
          <textarea
            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-slate-50 text-sm"
            rows={3}
            placeholder={`Ví dụ: ${EXAMPLES.mainGoal}`}
            value={inputs.mainGoal}
            onChange={(e) => handleChange('mainGoal', e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg font-bold text-slate-700">
              2. Nội dung câu hỏi cần tạo
            </label>
            {/* Example button removed for field 2 */}
          </div>
          <textarea
            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-slate-50 text-sm"
            rows={3}
            placeholder="Lưu ý: Mục 2 có thể bỏ trống nội dung để Canva Code tự tạo ra câu hỏi theo nội dung hoặc có thể dán câu hỏi đã soạn sẵn để tạo trò chơi theo câu hỏi cố định."
            value={inputs.questionContent}
            onChange={(e) => handleChange('questionContent', e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg font-bold text-slate-700">
              3. Đối tượng chơi / Bậc học hay độ tuổi
            </label>
            <ExampleButton field="targetAudience" value={EXAMPLES.targetAudience} />
          </div>
          <input
            type="text"
            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-slate-50 text-sm"
            placeholder={`Ví dụ: ${EXAMPLES.targetAudience}`}
            value={inputs.targetAudience}
            onChange={(e) => handleChange('targetAudience', e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg font-bold text-slate-700">
              4. Nhiệm vụ chơi / Số câu hỏi / Dạng câu hỏi
            </label>
            <ExampleButton field="gameTasks" value={EXAMPLES.gameTasks} />
          </div>
          <textarea
            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-slate-50 text-sm"
            rows={3}
            placeholder={`Ví dụ: ${EXAMPLES.gameTasks}`}
            value={inputs.gameTasks}
            onChange={(e) => handleChange('gameTasks', e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg font-bold text-slate-700">
              5. Hình thức trò chơi
            </label>
            <ExampleButton field="gameFormat" value={EXAMPLES.gameFormat} />
          </div>
          <textarea
            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-slate-50 text-sm"
            rows={4}
            placeholder={`Ví dụ: ${EXAMPLES.gameFormat}`}
            value={inputs.gameFormat}
            onChange={(e) => handleChange('gameFormat', e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className={`w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-purple-200 transition-all transform hover:-translate-y-1 ${
            isLoading 
              ? 'bg-slate-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang tạo Prompt...
            </span>
          ) : (
            'Tạo Prompt ngay'
          )}
        </button>
      </div>
    </div>
  );
};

export default InputForm;