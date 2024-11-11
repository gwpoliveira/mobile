import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import theme from '../theme';

const passosCorretos = [
    "Molhe as mãos com água",
    "Aplique sabão nas mãos",
    "Esfregue as mãos por 20 segundos",
    "Enxágue com água",
    "Seque as mãos com uma toalha"
];

const SequenciaHabitosScreen = () => {
    const [passos, setPassos] = useState(shuffleArray([...passosCorretos]));
    const [sequenciaSelecionada, setSequenciaSelecionada] = useState([]);

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const selecionarPasso = (passo) => {
        setSequenciaSelecionada([...sequenciaSelecionada, passo]);
    };

    const verificarSequencia = () => {
        if (JSON.stringify(sequenciaSelecionada) === JSON.stringify(passosCorretos)) {
            Alert.alert("Parabéns!", "Você acertou a sequência correta!");
        } else {
            Alert.alert("Tente novamente", "A sequência está incorreta. Vamos tentar mais uma vez.");
        }
        setSequenciaSelecionada([]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogo de Sequência de Hábitos Diários</Text>
            <Text style={styles.subtitle}>Coloque os passos na ordem correta para lavar as mãos:</Text>

            <View style={styles.passosContainer}>
                {passos.map((passo, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.passoButton,
                            sequenciaSelecionada.includes(passo) && styles.passoButtonSelecionado
                        ]}
                        onPress={() => selecionarPasso(passo)}
                        disabled={sequenciaSelecionada.includes(passo)}
                    >
                        <Text style={styles.passoText}>{passo}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.verificarButton} onPress={verificarSequencia}>
                <Text style={styles.verificarButtonText}>Verificar Sequência</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: theme.spacing.medium,
        alignItems: 'center',
    },
    title: {
        fontSize: theme.fonts.large,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.medium,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: theme.fonts.medium,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.medium,
        textAlign: 'center',
    },
    passosContainer: {
        width: '100%',
        alignItems: 'center',
    },
    passoButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.large,
        borderRadius: 10,
        marginVertical: theme.spacing.small,
        width: '90%',
        alignItems: 'center',
    },
    passoButtonSelecionado: {
        backgroundColor: theme.colors.secondary,
    },
    passoText: {
        color: theme.colors.white,
        fontSize: theme.fonts.medium,
    },
    verificarButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.large,
        borderRadius: 10,
        marginTop: theme.spacing.large,
    },
    verificarButtonText: {
        color: theme.colors.white,
        fontSize: theme.fonts.medium,
        fontWeight: '600',
    },
});

export default SequenciaHabitosScreen;
