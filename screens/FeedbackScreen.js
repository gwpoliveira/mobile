import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Button } from 'react-native';
import { getFeedbacks, postFeedback } from '../services/feedbackService';
import theme from '../theme';

const FeedbackScreen = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [novoFeedback, setNovoFeedback] = useState('');

    useEffect(() => {
        carregarFeedbacks();
    }, []);

    const carregarFeedbacks = async () => {
        const data = await getFeedbacks();
        setFeedbacks(data);
    };

    const enviarFeedback = async () => {
        const response = await postFeedback(novoFeedback);
        if (response) {
            setNovoFeedback('');
            carregarFeedbacks(); // Recarrega a lista após enviar o feedback
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Feedback dos Responsáveis</Text>
            <FlatList
                data={feedbacks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.feedbackItem}>
                        <Text style={styles.feedbackText}>{item.conteudo}</Text>
                    </View>
                )}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu feedback"
                value={novoFeedback}
                onChangeText={setNovoFeedback}
            />
            <Button title="Enviar Feedback" onPress={enviarFeedback} color={theme.colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: theme.spacing.medium,
    },
    title: {
        fontSize: theme.fonts.large,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.medium,
        textAlign: 'center',
    },
    feedbackItem: {
        backgroundColor: theme.colors.secondary,
        padding: theme.spacing.small,
        marginVertical: theme.spacing.small,
        borderRadius: 8,
    },
    feedbackText: {
        color: theme.colors.white,
        fontSize: theme.fonts.medium,
    },
    input: {
        borderColor: theme.colors.primary,
        borderWidth: 1,
        borderRadius: 8,
        padding: theme.spacing.small,
        marginBottom: theme.spacing.medium,
    },
});

export default FeedbackScreen;
