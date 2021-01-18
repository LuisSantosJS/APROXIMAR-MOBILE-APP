import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, TouchableOpacity,StatusBar, TextInput, ScrollView, Image, ImageBackground } from 'react-native'
import styles from './styles'
import { useIsEmpresa, useUserSaved } from '../../context/AuthContext'
import { RectButton } from 'react-native-gesture-handler'
//@ts-ignore
import Fundo from '../../assets/fundo.png'
//@ts-ignore
import Logo from '../../assets/logo.png'
//@ts-ignore
import Mar from '../../assets/mar.png'

const LoginCandidato: React.FC = () => {
    const { setUserSaved } = useUserSaved()
    const { setIsEmpresa } = useIsEmpresa()

    const onLogin = () => {
        setIsEmpresa(false);
        setUserSaved(true);
    }
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor='#3c0e65'/>
                <ImageBackground  source={Fundo} style={styles.container}>
                <View style={{padding: 10}}/>
                    <View style={styles.metade}>
                        <Image source={Logo} />
                        <Image source={Mar} />
                    </View>
                    <Text style={styles.textBem}>BEM VINDE</Text>
                    <View style={{padding: 5}}/>
                    <TextInput placeholder={'E-mail'} placeholderTextColor='white' style={styles.input} />
                    <TextInput placeholder={'Senha'} placeholderTextColor='white' secureTextEntry={true} style={styles.input} />
                    <View style={{padding: 15}}/>
                    <RectButton onPress={onLogin} style={styles.submit}>
                        <Text style={styles.textSubmit}>LOGIN</Text>
                    </RectButton>
                </ImageBackground>
            </ScrollView>
        </>
    )
}
export default LoginCandidato;