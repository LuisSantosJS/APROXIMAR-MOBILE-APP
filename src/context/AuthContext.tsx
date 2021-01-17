import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
interface UserData {

}

type ContextType = {
    userData: UserData;
    setUserData: (value: UserData) => void;
    userSaved: boolean;
    setUserSaved: (value: boolean) => void;
    isEmpresa: boolean | null;
    setIsEmpresa: (value: boolean | null) => void;

};

const ContextApp = createContext<ContextType>({
    userData: {} as UserData,
    setUserData: (value: UserData) => { },
    userSaved: false,
    setUserSaved: (value: boolean | null) => { },
    isEmpresa: null,
    setIsEmpresa: (value: boolean | null) => { }
});

const ProviderAuth: React.FC = ({ children }) => {
    const [userSaved, setUserSaved] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData>({} as UserData)
    const [isEmpresa, setIsEmpresa] = useState<boolean | null>(null)


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@user_data');
            if (value !== null) {
                setUserSaved(true);
                return setUserData(JSON.parse(value));
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <ContextApp.Provider value={{
            userData, setUserData,
            userSaved, setUserSaved,
            isEmpresa, setIsEmpresa
        }}>
            {children}
        </ContextApp.Provider>
    );
}
export default ProviderAuth;

export function useUserData() {
    const infoUser: ContextType = useContext(ContextApp);
    const { userData, setUserData } = infoUser;
    return { userData, setUserData };
}

export function useUserSaved() {
    const infoUser: ContextType = useContext(ContextApp);
    const { userSaved, setUserSaved } = infoUser;
    return { userSaved, setUserSaved };
}
export function useIsEmpresa() {
    const infoUser: ContextType = useContext(ContextApp);
    const { isEmpresa, setIsEmpresa } = infoUser;
    return { isEmpresa, setIsEmpresa };
}