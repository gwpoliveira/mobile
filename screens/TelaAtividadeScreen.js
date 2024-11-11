import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TelaAtividadeScreen = ({ route }) => {
    const { atividadeId } = route.params;
    const [progresso, setProgresso] = useState(0);

    const completarEtapa = () => {
        setProgresso(progresso + 25); // Exemplo de aumento de progresso
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atividade {atividadeId}</Text>
            <Text style={styles.progress}>Progresso: {progresso}%</Text>
            <Button title="Completar Etapa" onPress={completarEtapa} color="#007BFF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    progress: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default TelaAtividadeScreen;
