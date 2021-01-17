import React, { useState } from 'react';
import styles from './styles'
import { ImageBackground, Text, View, ScrollView, Image } from 'react-native';
//@ts-ignore
import HeadeImage from '../../assets/header.png'
//@ts-ignore
import Chat from '../../assets/chat.png'
//@ts-ignore
import Est from '../../assets/est.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Perfil: React.FC = () => {
    const [item, setItem] = useState<string>('#7145E0')
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.header} resizeMode='cover' imageStyle={{ height: '100%' }} source={HeadeImage} />
                    <View style={styles.view}>
                        <View style={styles.profile} />
                        <Text style={styles.name}>Jane Doe</Text>
                        <Text style={styles.desc}>
                            Bio:Sou uma pessoa assim e vivo
                            neste lugar, no momento pro
                            curo por um emprego
                        </Text>
                        <View style={{ padding: 5 }} />
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => setItem('#7145E0')} activeOpacity={0.7} style={[styles.buts, { backgroundColor: '#7145E0' }]} >
                                <Text style={styles.textg}>HARD SKILLS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setItem('#3A0E63')} activeOpacity={0.7} style={[styles.buts, { backgroundColor: '#3A0E63' }]} >
                                <Text style={styles.textg}>SOFT SKILLS</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.itemsf, { backgroundColor: item }]}>
                            {item === '#7145E0' && <React.Fragment>
                                <View style={{ padding: 5 }} />
                                <View style={styles.itgh}>
                                    <Image source={Chat} />
                                    <Text style={styles.nego}>NEGOCIAÇÃO</Text>
                                </View>
                                <View style={{ padding: 5 }} />
                                <View style={styles.itgh}>
                                    <Image source={Est} />
                                    <Text style={styles.nego}>CRIATIVIDADE</Text>
                                </View>
                            </React.Fragment>}
                            {item !== '#7145E0' && <React.Fragment>
                                <View style={{ padding: 5 }} />
                                <View style={styles.itghg}>
                                    <Text style={styles.gt}>Nome: <Text style={{color:'#191919'}}>Office básico</Text></Text>
                                    <Text style={styles.gt}>Descrição:
                                    <Text style={{color:'#191919'}}>
                                            Conclusão em 2020 pela plataforma
                                            fulana
                                    </Text>
                                    </Text>
                                </View>
                            </React.Fragment>}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
export default Perfil;