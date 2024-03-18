import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { APIBaseUrl } from '../config';

export const UserContext = createContext({
  user: null,
  setUser: () => {}
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${APIBaseUrl}/users/init-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setUser(null);
      });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


export default UserProvider;
