import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import theme from '../theme';

const icones = ["🪥", "🧼", "🧴", "🦷", "🚿", "🛁", "🪥", "🧼", "🧴", "🦷", "🚿", "🛁"];
const embaralharIcones = () => icones.sort(() => Math.random() - 0.5);

const MemoriaHigieneScreen = () => {
    const [embaralhado, setEmbaralhado] = useState(embaralharIcones());
    const [pares, setPares] = useState([]);
    const [selecionado, setSelecionado] = useState([]);
    const [acertos, setAcertos] = useState(0);

    useEffect(() => {
        if (selecionado.length === 2) {
            const [primeiro, segundo] = selecionado;
            if (embaralhado[primeiro] === embaralhado[segundo]) {
                setPares([...pares, primeiro, segundo]);
                setAcertos(acertos + 1);
            }
            setTimeout(() => setSelecionado([]), 500);
        }
    }, [selecionado]);

    const selecionarIcone = (index) => {
        if (selecionado.length < 2 && !pares.includes(index)) {
            setSelecionado([...selecionado, index]);
        }
    };

    const reiniciarJogo = () => {
        setEmbaralhado(embaralharIcones());
        setPares([]);
        setSelecionado([]);
        setAcertos(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogo da Memória</Text>
            <Text style={styles.subtitle}>Encontre os pares de ícones de higiene!</Text>
            <FlatList
                data={embaralhado}
                numColumns={3}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => selecionarIcone(index)}
                        disabled={pares.includes(index) || selecionado.includes(index)}
                    >
                        <Text style={styles.icon}>
                            {pares.includes(index) || selecionado.includes(index) ? item : "❓"}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            {acertos === icones.length / 2 && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Parabéns! Você encontrou todos os pares!</Text>
                    <CustomButton title="Jogar Novamente" onPress={reiniciarJogo} />
                </View>
            )}
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
    },
    subtitle: {
        fontSize: theme.fonts.medium,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.medium,
        textAlign: 'center',
    },
    iconContainer: {
        width: 60,
        height: 60,
        margin: 10,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    icon: {
        fontSize: 32,
        color: theme.colors.white,
    },
    resultContainer: {
        alignItems: 'center',
        marginTop: theme.spacing.large,
    },
    resultText: {
        fontSize: theme.fonts.medium,
        color: theme.colors.primary,
        marginBottom: theme.spacing.small,
    },
});

export default MemoriaHigieneScreen;
