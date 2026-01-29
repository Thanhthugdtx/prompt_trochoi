export interface GameInputs {
  mainGoal: string;
  questionContent: string;
  targetAudience: string;
  gameTasks: string;
  gameFormat: string;
}

export interface PromptResponse {
  generatedPrompt: string;
}

export enum AppState {
  IDLE,
  GENERATING,
  SUCCESS,
  ERROR
}