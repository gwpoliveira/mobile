import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const PerfilScreen = () => {
    const [nome, setNome] = useState('Criança');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil da Criança</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.nome}>Olá, {nome}!</Text>
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
    input: {
        width: '80%',
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderRadius: 8,
        padding: theme.spacing.small,
        fontSize: theme.fonts.medium,
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.large,
    },
    nome: {
        fontSize: theme.fonts.medium,
        color: theme.colors.primary,
        fontWeight: '600',
    },
});

export default PerfilScreen;
