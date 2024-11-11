import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import theme from '../theme';

const DicasCuidadosScreen = () => {
    const dicas = [
        "Lave os pés todos os dias com água e sabão.",
        "Seque bem os pés, especialmente entre os dedos.",
        "Use meias de algodão e troque-as diariamente.",
        "Corte as unhas dos pés regularmente.",
        "Evite andar descalço em lugares públicos."
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Dicas de Cuidados Diários</Text>
            {dicas.map((dica, index) => (
                <View key={index} style={styles.dicaContainer}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.dica}>{dica}</Text>
                </View>
            ))}
        </ScrollView>
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
    },
    dicaContainer: {
        flexDirection: 'row',
        marginBottom: theme.spacing.small,
    },
    bullet: {
        fontSize: theme.fonts.medium,
        color: theme.colors.primary,
        marginRight: theme.spacing.small,
    },
    dica: {
        fontSize: theme.fonts.small,
        color: theme.colors.textPrimary,
        lineHeight: 22,
    },
});

export default DicasCuidadosScreen;
