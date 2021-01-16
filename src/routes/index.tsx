import React from 'react';
import { useUserSaved } from '../context/AuthContext';
import Main from './main'
import Auth from './auth'
const Router: React.FC = () => {
    
    const { userSaved } = useUserSaved();

    if (userSaved) {
        return <Main />
    }
    return <Auth />
}

export default Router;