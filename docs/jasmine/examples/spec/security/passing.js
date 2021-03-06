
'use strict';

var targaryen = require('../../../../../index'), // in your app this would be require('targaryen')
  users = targaryen.users;

targaryen.setFirebaseData(require('./data.json'));
targaryen.setFirebaseRules(require('./rules.json'));

describe('A valid set of security rules and data', function() {

  beforeEach(function() {
    jasmine.addMatchers(targaryen.jasmine.matchers);
  });

  it('can be tested against', function() {

    expect(users.unauthenticated).cannotRead('users/simplelogin:1');
    expect(users.simplelogin).canRead('users/simplelogin:1');

    expect(users.simplelogin).cannotWrite('users/simplelogin:1/innocent', true);
    expect({ uid: 'simplelogin:2' }).canWrite('users/simplelogin:1/on-fire', true);

  });

});

