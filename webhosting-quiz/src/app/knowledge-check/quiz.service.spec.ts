import { TestBed } from '@angular/core/testing';
import { Question } from './question.model';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;
  const testQuestions: Question[] = [
    {
    question: 'Test question', 
    options: ['A', 'B', 'C'], 
    correctAnswer: 0
    },
    {
      question: 'Test question 2',
      options: ['D', 'E', 'F'],
      correctAnswer: 1
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});