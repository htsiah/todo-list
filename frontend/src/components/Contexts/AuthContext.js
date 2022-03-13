import { createContext } from 'react';

export const AuthContext = createContext({
  isLogin: false,
  role: '',
  login: () => {},
  logout: () => {},
});
