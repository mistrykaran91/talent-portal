import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CandidatureData } from './app-data';

export class AppData implements InMemoryDbService {
  createDb() {
    const candidature = CandidatureData.candidates;
    return { candidature };
  }
}
