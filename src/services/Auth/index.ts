const USERNAME_KEY = "USERNAME";
const QUIZ_KEY = "QUIZ_STATUS";

const AuthServices = {
  saveUserName(userName: string) {
    localStorage.setItem(USERNAME_KEY, userName);
  },

  getUserName() {
    return localStorage.getItem(USERNAME_KEY);
  },

  removeUserName() {
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
  },

  quizStatus(state: string) {
    localStorage.setItem(QUIZ_KEY, state);
  },
};

export default AuthServices;
