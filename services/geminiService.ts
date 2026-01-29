import { GoogleGenAI } from "@google/genai";
import { GameInputs } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateOptimizedPrompt = async (inputs: GameInputs): Promise<string> => {
  // Đoạn văn mẫu cố định về giao diện và chủ đề theo yêu cầu
  const staticThemeRequest = "Chủ đề và giao diện trò chơi có hình ảnh bắt mắt, màu sắc trò chơi tươi sáng, đáng yêu, có hiệu ứng sinh động, âm thanh tương tác khi trả lời đúng/sai, chúc mừng hoàn thành trò chơi. Font chữ hiển thị tiếng Việt, tròn, dễ đọc. Có tiến độ trò chơi, có hệ thống tính điểm trò chơi.";

  const systemInstruction = `
    Bạn là trợ lý viết prompt cho Canva Apps.
    Nhiệm vụ: Tổng hợp thông tin người dùng thành một đoạn văn prompt NGẮN GỌN, LIỀN MẠCH (1 paragraph).

    Cấu trúc bắt buộc của đoạn văn kết quả:
    "Hãy tạo một trò chơi tương tác về [Mục tiêu (1)] dành cho [Đối tượng (3)]. Nội dung chơi [Nhiệm vụ (4)]. [Hình thức & Luật chơi (5)]. ${staticThemeRequest}"

    Quy tắc xử lý:
    1. Ghép nối các ý thành câu văn tự nhiên, trôi chảy.
    2. Nếu có dữ liệu câu hỏi (Mục 2), hãy lồng ghép ngắn gọn (ví dụ: "gồm các câu hỏi trắc nghiệm đã cung cấp").
    3. Giữ nguyên logic chia đội/tính điểm ở Mục 5 vì đây là phần quan trọng nhất.
    4. KHÔNG tự ý sáng tạo thêm tính năng không có trong đầu vào.
    5. KHÔNG thêm lời dẫn, chỉ trả về đúng đoạn prompt kết quả.
  `;

  const userContent = `
    Thông tin đầu vào:
    1. Mục tiêu: ${inputs.mainGoal}
    2. Câu hỏi: ${inputs.questionContent}
    3. Đối tượng: ${inputs.targetAudience}
    4. Nhiệm vụ: ${inputs.gameTasks}
    5. Hình thức: ${inputs.gameFormat}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userContent,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3, // Giữ mức sáng tạo thấp để bám sát cấu trúc
      },
    });

    return response.text?.trim() || "Không thể tạo prompt. Vui lòng thử lại.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Đã có lỗi xảy ra khi kết nối với AI.");
  }
};