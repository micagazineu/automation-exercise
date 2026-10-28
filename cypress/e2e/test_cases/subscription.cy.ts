import HomePage from '../../pages/HomePage';
import { generateUserData } from '../../support/utils';

describe('Subscription Test Cases', () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.verifyHomePageVisible();
  });

  it('Test Case 10: Verify Subscription in home page', () => {
    const user = generateUserData();
    HomePage.verifySubscriptionVisible();
    HomePage.subscribe(user.email);
    HomePage.verifySubscriptionSuccessMessage();
  });
});
