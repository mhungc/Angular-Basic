import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from './user';

export class UserData implements InMemoryDbService {

  createDb() {
    const users: User[] = [
      {
        'id': 1,
        'name': 'First Name test',
        'lastname': 'LastName test',
        'email': 'test@meranini.com'

      },
      {
        'id': 2,
        'name': 'First Name test 2',
        'lastname': 'LastName test 2',
        'email': 'test2@meranini.com '

      }
    ];
    return { users };
  }
}
