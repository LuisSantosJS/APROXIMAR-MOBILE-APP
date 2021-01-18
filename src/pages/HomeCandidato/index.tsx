import React from 'react';
import { ImageBackground, Text, View, ScrollView, StyleSheet, Touchable } from 'react-native';
import styles from './styles'
//@ts-ignore
import HeadeImage from '../../assets/header.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeCandidato: React.FC<any> = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.header} resizeMode='cover' imageStyle={{ height: '100%' }} source={HeadeImage}>
                        <View style={styles.colums}>
                            <View style={styles.avatar} />
                            <Text style={styles.pontos}>Pontos 3100</Text>
                        </View>
                        <View style={[styles.colums, { justifyContent: 'flex-end' }]}>
                            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} activeOpacity={0.7}>
                                <Text style={styles.ted}>Meu Perfil</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <Text style={styles.cutos}>CURSOS RECOMENDADOS</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrol} horizontal>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Oratória</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Inglês</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Marketing</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                    </ScrollView>
                    <Text style={styles.cutos}>CURSOS FINALIZADOS</Text>
                    <View style={[styles.cursorow, { borderTopLeftRadius: 20, borderTopRightRadius: 20 }]}>
                        <Text style={styles.oratoria}>RELAÇÃO INTERPESSOAL</Text>
                        <Text style={{ color: '#707070', width: '80%' }}>Clique aqui para redirecionar à plataforma do curso</Text>
                    </View>
                    <View style={styles.cursorow}>
                        <Text style={styles.oratoria}>INGLÊS AVANÇADO</Text>
                        <Text style={{ color: '#707070', width: '80%' }}>Clique aqui para redirecionar à plataforma do curso</Text>
                    </View>
                    <View style={styles.cursorow}>
                        <Text style={styles.oratoria}>ESPANHOL BÁSICO</Text>
                        <Text style={{ color: '#707070', width: '80%' }}>Clique aqui para redirecionar à plataforma do curso</Text>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}
export default HomeCandidato;