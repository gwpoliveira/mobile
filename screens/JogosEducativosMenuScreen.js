import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import theme from '../theme';

const JogosEducativosMenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogos Educativos</Text>
            <Text style={styles.subtitle}>Escolha um jogo para começar a aprender sobre saúde e higiene:</Text>

            <CustomButton
                title="Quiz de Saúde"
                onPress={() => navigation.navigate('QuizSaude')}
            />
            <CustomButton
                title="Jogo da Memória de Higiene"
                onPress={() => navigation.navigate('MemoriaHigiene')}
            />
            <CustomButton
                title="Sequência de Hábitos Diários"
                onPress={() => navigation.navigate('SequenciaHabitos')}
            />
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
        marginBottom: theme.spacing.large,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: theme.fonts.medium,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.large,
        textAlign: 'center',
    },
});

export default JogosEducativosMenuScreen;
