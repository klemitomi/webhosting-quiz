import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { QuizService } from '.././app/knowledge-check/quiz.service';
import { QUIZ_QUESTIONS } from '../app/knowledge-check/quiz-data';
import { Question } from '../app/knowledge-check/question.model';

@Component({
  selector: 'app-knowledge-check',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  templateUrl: './knowledge-check.component.html',
  styleUrls: ['./knowledge-check.component.scss']
})
export class KnowledgeCheckComponent {
  currentQuestionIndex = 0;
  quizCompleted = false;
  score = 0;
  questions: Question[] = QUIZ_QUESTIONS;

  constructor(private quizService: QuizService) {}

  selectAnswer(optionIndex: number): void {
    this.questions[this.currentQuestionIndex].userAnswer = optionIndex;
    
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finishQuiz();
    }
  }

  private finishQuiz(): void {
    const result = this.quizService.getQuizResult(this.questions);
    this.score = result.score;
    this.quizCompleted = true;
  }

  get resultMessage(): string {
    return this.quizService.getResultMessage(this.score, this.questions.length);
  }

  getProgressEmoji(): string {
  const progress = (this.currentQuestionIndex + 1) / this.questions.length;
  if (progress < 0.3) return '🧐';
  if (progress < 0.6) return '🤔';
  if (progress < 0.9) return '👍';
  return '🏁';
}

getResultEmoji(score: number, totalQuestions: number): string {
  const percentage = score / totalQuestions;
  if (percentage >= 0.9) return '🎉';
  if (percentage >= 0.7) return '😊';
  if (percentage >= 0.5) return '🙂';
  return '😕';
}

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.quizCompleted = false;
    this.score = 0;
    this.questions.forEach(q => q.userAnswer = undefined);
  }
}