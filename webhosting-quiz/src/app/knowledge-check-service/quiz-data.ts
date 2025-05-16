import { Question } from './question.model';

export const QUIZ_QUESTIONS: Question[] = [
  {
    question: '1. Mi az a webhosting, és mire használjuk?',
    options: [
      'Egy tűzfalfal konfigurációs eszköz',
      'Egy olyan szolgáltatás, amely lehetővé teszi weboldalaink közzétételét az interneten',
      'Egy adatbázis-kezelő rendszer'
    ],
    correctAnswer: 1
  },
  {
      question: '2. Mi a különbség a statikus és dinamikus webhosting között?',
      options: [
        'Dinamikus csak videókat tud kiszolgálni, statikus csak szöveget',
        'Statikus hosting drágább, dinamikus olcsóbb',
        'Statikusnál előre generált fájlokat szolgálunk ki, dinamikusnál a szerver generálja a választ'
      ],
      correctAnswer: 2
    },
    {
      question: '3. Sorolj fel 3 népszerű webhosting szolgáltatót!',
      options: [
        'Firebase Hosting, Netlify, Vercel',
        'Microsoft Word, Excel, PowerPoint',
        'Google Chrome, Firefox, Safari'
      ],
      correctAnswer: 0
    },
    {
      question: '4. Mit jelent a CDN, és miért fontos?',
      options: [
        'Computer Data Node - adattároló eszköz',
        'Content Delivery Network - gyorsabb tartalomkézbesítést tesz lehetővé',
        'Code Development Network - fejlesztői eszköz'
      ],
      correctAnswer: 1
    },
    {
      question: '5. Mi az a domain név, és hogyan kapcsolódik egy weboldalhoz?',
      options: [
        'Egy könnyen értelmezhető kifejezés, ami a webkiszolgálók azonosítására szolgál, ami IP-címre fordul le a DNS segítségével',
        'Egy speciális programozási nyelv',
        'Egy webes biztonsági tanúsítvány, ami a weboldalak biztonságos böngészését teszi lehetővé'
      ],
      correctAnswer: 0
    },
    {
      question: '6. Mi a szerepe a HTTPS-nek egy hosztolt weboldalon?',
      options: [
        'Gyorsabbá teszi a weboldal betöltését',
        'Biztosítja az adatok titkosítását a kliens és szerver között',
        'Ingyenes domain nevet biztosít'
      ],
      correctAnswer: 1
    },
    {
      question: '7. Mi az a SPA (Single Page Application), és hogyan kezeljük Firebase-en?',
      options: [
        'Egy oldalas webalkalmazás, a "rewrites" beállítással kezeljük',
        'Speciális fizetési mód',
        'Egy típusú szerver architektúra'
      ],
      correctAnswer: 0
    }
];