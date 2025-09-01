import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from "react";

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import { api } from "./utils/api";
import CurrentUserContext from './components/contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo)
      })
      .catch((error) => {
        console.error('Error de user :', error);
      });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.editProfile(data.name, data.about).then((newData) => {
        setCurrentUser(newData); handleClosePopup();
      });
    })();
  };
  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page">
        <Header />
        <Main />
        <Footer />

      </div>

    </CurrentUserContext.Provider>
  )
}

export default App
