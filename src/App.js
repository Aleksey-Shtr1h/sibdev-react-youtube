import React from 'react';
import json from './JSON/auth-users.json';

const App = () => {
  console.log(localStorage);
  const [loginJson, setLoginJson] = React.useState(null);

  React.useEffect(() => {
    const data = localStorage.getItem('login');
    if (data) {
      setLoginJson(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('login', JSON.stringify(json));
  });

  console.log(loginJson);

  const setStorage = () => localStorage.setItem('login', JSON.stringify(json));;
  const getStorage = () => setLoginJson(JSON.parse(localStorage.getItem('login')));
  const removeStorage = () => {
    localStorage.removeItem('login');
    setLoginJson(null);
  };

  return (
    <>
      <button onClick={() => setStorage()}>SET</button>
      <button onClick={() => getStorage()}>GET</button>
      <button onClick={() => removeStorage()}>REMOVE</button>
    </>
  );
};
