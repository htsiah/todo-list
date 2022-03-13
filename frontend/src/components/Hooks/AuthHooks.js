import { useState, useEffect, useCallback } from 'react';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState(''); // eslint-disable-next-line

  const login = useCallback((username) => {
    setIsLogin(true);
    setRole(username);

    sessionStorage.setItem(
      'rjss',
      JSON.stringify({
        login: true,
        role: username,
      })
    );
  }, []);

  const logout = () => {
    setIsLogin(false);
    setRole('');
    sessionStorage.removeItem('rjss');
  };

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem('rjss'));
    if (storedData && storedData.login) {
      login(storedData.role);
    }
  }, [login]);

  return { isLogin, role, login, logout };
};
