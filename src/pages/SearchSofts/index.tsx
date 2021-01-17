import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, TouchableOpacity, StatusBar, TextInput, ScrollView, Image, ImageBackground } from 'react-native'
import styles from './styles'
import CheckBox from '@react-native-community/checkbox';
import { useIsEmpresa, useUserSaved } from '../../context/AuthContext'
import { RectButton } from 'react-native-gesture-handler'
//@ts-ignore
import Los from '../../assets/los.png'
//@ts-ignore
import Fundo from '../../assets/fundo.png'
const SearchSofts: React.FC = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor='#3c0e65' />
                <ImageBackground source={Fundo} style={styles.container}>
                    <View style={styles.rowcima}>
                        <Image resizeMode={'contain'} source={Los} style={styles.los} />
                        <Text style={styles.textcima}>APROXIMAR</Text>
                    </View>
                    <View style={{ padding: 20 }} />
                    <Text style={styles.text}>
                        QUAL A SOFT SKILL VOCÊ MAIS PROCURA
                        EM UME CANDIDATE NO MOMENTO?
                    </Text>
                    <View style={{ padding: 10 }} />
                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Criatividade</Text>
                    </View>

                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Resolução de problemas</Text>
                    </View>

                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Pensamento crítico</Text>
                    </View>

                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Gestão de pessoas</Text>
                    </View>

                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Coordenação</Text>
                    </View>


                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Inteligência emocional</Text>
                    </View>

                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Tomada de decisão</Text>
                    </View>


                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Orientação para servir</Text>
                    </View>


                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Negociação</Text>
                    </View>


                    <View style={styles.row}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            style={{ borderColor: 'white' }}
                            onFillColor='white'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={styles.t}>Flexibilidade Cognitiva</Text>
                    </View >


                    <View style={{ padding: 20 }} />

                    <RectButton style={styles.submit}>
                        <Text style={styles.textSubmit}>Buscar</Text>
                    </RectButton>



                </ImageBackground>
            </ScrollView>
        </>
    )
}
export default SearchSofts;