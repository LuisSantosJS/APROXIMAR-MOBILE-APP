import React from 'react';
import { ImageBackground, Text, View, ScrollView, StyleSheet } from 'react-native';
import styles from './styles'
//@ts-ignore
import HeadeImage from '../../assets/header.png'
const HomeCandidato: React.FC = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.header} resizeMode='cover' imageStyle={{ height: '100%' }} source={HeadeImage}>
                        <View style={styles.colums}>
                            <View style={styles.avatar} />
                            <Text style={styles.pontos}>Pontos 999999</Text>
                        </View>
                        <View style={[styles.colums, { justifyContent: 'flex-end' }]}>
                            <Text style={styles.ted}>Meu Perfil</Text>
                        </View>
                    </ImageBackground>
                    <Text style={styles.cutos}>CURSOS A ADQUIRIR</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrol} horizontal>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Nome do Curso</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Nome do Curso</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Nome do Curso</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Nome do Curso</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Nome do Curso</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                        <View style={styles.item}>
                            <Text style={styles.nome}>Nome do Curso</Text>
                        </View>
                        <View style={{ padding: 15 }} />
                    </ScrollView>
                    <Text style={styles.cutos}>CURSOS ADQUIRIDOS</Text>
                    <View style={[styles.cursorow, { borderTopLeftRadius: 20, borderTopRightRadius: 20 }]}>
                        <Text style={styles.oratoria}>ORATÓRIA</Text>
                        <Text style={{ color: '#707070', width: '80%' }}>Clique aqui para redirecionar à plataforma do curso</Text>
                    </View>
                    <View style={styles.cursorow}>
                    <Text style={styles.oratoria}>INGLÊS</Text>
                        <Text style={{ color: '#707070', width: '80%' }}>Clique aqui para redirecionar à plataforma do curso</Text>
                    </View>
                    <View style={styles.cursorow}>
                    <Text style={styles.oratoria}>ESPANHOL</Text>
                        <Text style={{ color: '#707070', width: '80%' }}>Clique aqui para redirecionar à plataforma do curso</Text>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}
export default HomeCandidato;