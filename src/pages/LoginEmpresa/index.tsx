import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, TouchableOpacity, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import styles from './styles'
import { useIsEmpresa, useUserSaved } from '../../context/AuthContext'
import { RectButton } from 'react-native-gesture-handler'
//@ts-ignore
import Reta from '../../assets/reta.png'
//@ts-ignore
import Logo from '../../assets/logo.png'
//@ts-ignore
import Mar from '../../assets/mar.png'

const LoginEmpresa: React.FC = () => {
    const { setUserSaved } = useUserSaved()
    const { setIsEmpresa } = useIsEmpresa()

    const onLogin = () => {
        setIsEmpresa(true);
        setUserSaved(true);
    }
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>

                <LinearGradient colors={['#F37ED5', '#8BECDA']} style={styles.container}>
                    <View style={{ padding: 10 }} />
                    <View style={styles.metade}>
                        <Image source={Logo} />
                        <Image source={Mar} />
                    </View>
                    <Text style={styles.textBem}>BEM VINDE</Text>
                    <View style={{ padding: 5 }} />
                    <TextInput placeholder={'E-mail'} placeholderTextColor='white' style={styles.input} />
                    <TextInput placeholder={'Senha'} placeholderTextColor='white' secureTextEntry={true} style={styles.input} />
                    <View style={{ padding: 15 }} />
                    <RectButton onPress={onLogin} style={styles.submit}>
                        <Text style={styles.textSubmit}>LOGIN</Text>
                    </RectButton>
                </LinearGradient>
            </ScrollView>
        </>
    )
}
export default LoginEmpresa;