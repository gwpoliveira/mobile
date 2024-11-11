import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import theme from '../theme';

const ServicoPodologicoScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Serviço de Podologia</Text>
            <Text style={styles.paragraph}>
                Nosso serviço de podologia é dedicado ao cuidado dos pés das crianças. Aqui, os
                profissionais especializados realizam avaliações e tratamentos para garantir o
                bem-estar e a saúde dos pés das crianças.
            </Text>
            <Text style={styles.subtitle}>O que oferecemos:</Text>
            <Text style={styles.paragraph}>• Avaliações completas dos pés.</Text>
            <Text style={styles.paragraph}>• Tratamentos preventivos e terapêuticos.</Text>
            <Text style={styles.paragraph}>• Orientações para cuidados diários.</Text>
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
        textAlign: 'center',
    },
    subtitle: {
        fontSize: theme.fonts.medium,
        fontWeight: '600',
        color: theme.colors.textSecondary,
        marginTop: theme.spacing.medium,
        marginBottom: theme.spacing.small,
    },
    paragraph: {
        fontSize: theme.fonts.small,
        color: theme.colors.textPrimary,
        lineHeight: 22,
        marginBottom: theme.spacing.small,
    },
});

export default ServicoPodologicoScreen;
