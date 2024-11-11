import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import theme from '../theme';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Aplicativo de Podologia</Text>
            <CustomButton
                title="Serviço de Podologia"
                onPress={() => navigation.navigate('ServicoPodologico')}
            />
            <CustomButton
                title="Passo a Passo"
                onPress={() => navigation.navigate('PassoAPasso')}
            />
            <CustomButton
                title="Dicas de Cuidados"
                onPress={() => navigation.navigate('DicasCuidados')}
            />
            <CustomButton
                title="Jogos Educativos"
                onPress={() => navigation.navigate('JogosEducativosMenu')}
            />
            <CustomButton
                title="Perfil da Criança"
                onPress={() => navigation.navigate('Perfil')}
            />
            <CustomButton
                title="Relatório de Progresso"
                onPress={() => navigation.navigate('Relatorios')}
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
});

export default HomeScreen;
