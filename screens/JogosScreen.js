import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import theme from '../theme';

const JogosScreen = () => {
    const [pontos, setPontos] = useState(0);

    const ganharPonto = () => setPontos(pontos + 10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogos Educativos</Text>
            <Text style={styles.pontos}>Pontuação: {pontos}</Text>
            <CustomButton title="Ganhar Pontos" onPress={ganharPonto} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        padding: theme.spacing.medium,
    },
    title: {
        fontSize: theme.fonts.large,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.medium,
    },
    pontos: {
        fontSize: theme.fonts.medium,
        color: theme.colors.primary,
        marginVertical: theme.spacing.large,
        fontWeight: 'bold',
    },
});

export default JogosScreen;
