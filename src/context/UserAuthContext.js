import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-confing';
import StyledCircularProgress from '../components/StyledCircularProgress';

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  if (user === undefined) return <StyledCircularProgress />;
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <UserAuthContext.Provider value={{ user }}>{children}</UserAuthContext.Provider>;
};

const useUserAuth = () => {
  return useContext(UserAuthContext);
};
export { UserAuthContextProvider, useUserAuth };
