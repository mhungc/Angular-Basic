import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from './user';

export class UserData implements InMemoryDbService {

  createDb() {
    const users: User[] = [
      {
        'id': 1,
        'firstName': 'First Name test',
        'lastName': 'LastName test',
        'email': 'test@meranini.com'

      },
      {
        'id': 2,
        'firstName': 'First Name test 2',
        'lastName': 'LastName test 2',
        'email': 'test2@meranini.com '

      }
    ];
    return { users };
  }
}
