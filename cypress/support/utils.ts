export function generateUserData() {
  const uniqueId = `${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  return {
    name: `User${Math.floor(1000 + Math.random() * 9000)}`,
    email: `qa_test_${uniqueId}@testmail.com`,
    password: 'Password123!',
  };
}
