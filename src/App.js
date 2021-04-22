import React, { useState, useEffect } from 'react';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ReactError from './components/ReactError/ReactError';
import ReactStyle from './components/ReactStyle/ReactStyle';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import AuthContext from './components/store/AuthContext';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedIn === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <>
            {/* Practise React Style */}
            {/* <ReactStyle /> */}

            {/* Practise React Error and Validation */}
            {/* <ReactError /> */}

            {/* Practise Handling side effects, reducers and context API  */}
            <AuthContext.Provider
                value={{
                    isLoggedIn: isLoggedIn,
                    onLogout: logoutHandler
                }}
            >
                <MainHeader />
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler} />}
                    {isLoggedIn && <Home onLogout={logoutHandler} />}
                </main>
            </AuthContext.Provider>
        </>
    );
};

export default App;
