import { faker } from '@faker-js/faker';
import HomePage from '../../pages/HomePage';

describe('Subscription Test Cases', () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.verifyHomePageVisible();
  });

  it('Test Case 10: Verify Subscription in home page', () => {
    HomePage.verifySubscriptionVisible();
    HomePage.subscribe(faker.internet.email());
    HomePage.verifySubscriptionSuccessMessage();
  });
});