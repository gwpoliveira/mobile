import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import theme from '../theme';

const PassoAPassoScreen = () => {
    const [etapa, setEtapa] = useState(1);

    const proximoPasso = () => {
        if (etapa < 5) setEtapa(etapa + 1);
    };

    const feedbackEmoji = ["😊", "😄", "👍", "🎉", "👏"][etapa - 1];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Passo {etapa} de 5</Text>
            <Text style={styles.emoji}>{feedbackEmoji}</Text>
            <Text style={styles.paragraph}>Parabéns por concluir o passo {etapa}!</Text>
            <CustomButton title="Próximo Passo" onPress={proximoPasso} />
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
    emoji: {
        fontSize: 50,
        marginVertical: theme.spacing.large,
    },
    paragraph: {
        fontSize: theme.fonts.medium,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.large,
        textAlign: 'center',
    },
});

export default PassoAPassoScreen;
