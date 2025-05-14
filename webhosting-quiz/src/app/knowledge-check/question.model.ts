export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  userAnswer?: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  message: string;
}