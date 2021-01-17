import React from 'react';
import { useUserSaved,useIsEmpresa } from '../context/AuthContext';
import Candidato from './candidato'
import Empresa from './empresa'
import Auth from './auth'
const Router: React.FC = () => {
    
    const { userSaved } = useUserSaved();
    const {isEmpresa} = useIsEmpresa()

    if (userSaved && isEmpresa) {
        return <Empresa/>
    }
    if (userSaved && !isEmpresa) {
        return <Candidato/>
    }
    return <Auth />
}

export default Router;