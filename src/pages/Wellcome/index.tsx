import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
const Wellcome: React.FC = () => {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <LinearGradient colors={['#F37ED5', '#8BECDA']} style={styles.container}>
                    <View style={styles.metade}>
                        <Text style={styles.wellText}>
                            vamos
                            começar? :)
                    </Text>
                    </View>
                    <View style={styles.metade}>
                        <Text style={styles.text}>Meu perfil é...</Text>
                        <RectButton style={styles.buttons}>
                            <Text style={[styles.textButton, { color: '#8BECDA' }]}>EMPRESA</Text>
                        </RectButton>
                        <RectButton style={styles.buttons}>
                            <Text style={[styles.textButton, { color: '#3A0E63', fontWeight: '600' }]}>CANDIDATE</Text>
                        </RectButton>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.cadastrarText}>Não é cadastrade? <Text style={{ color: '#7145E0' }}>Cadastrar</Text></Text>
                        </TouchableOpacity>
                    </View>

                </LinearGradient>
            </ScrollView>
        </>
    )
}
export default Wellcome;