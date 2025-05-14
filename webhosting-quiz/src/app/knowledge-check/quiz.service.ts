import { Injectable } from '@angular/core';
import { Question, QuizResult } from './question.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  calculateScore(questions: Question[]): number {
    return questions.filter(q => q.userAnswer === q.correctAnswer).length;
  }

  getResultMessage(score: number, totalQuestions: number): string {
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage >= 90) return 'Kiváló! Nagyon jól ismered a webhosting témakörét!';
    if (percentage >= 70) return 'Jó eredmény! Még néhány dologban elmélyíthetnéd a tudásod!';
    if (percentage >= 50) return 'Átlagos. Szerintem még gyakorolj a témakörben!';
    return 'Hááát... Érdemes átnézned még egyszer a webhosting alapjait!';
  }

  getQuizResult(questions: Question[]): QuizResult {
    const score = this.calculateScore(questions);
    return {
      score,
      totalQuestions: questions.length,
      message: this.getResultMessage(score, questions.length)
    };
  }
}