import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';
import CustomButton from '../components/CustomButton';

const perguntas = [
    { pergunta: "Quantas vezes ao dia devemos escovar os dentes?", opcoes: ["1 vez", "2 vezes", "3 vezes"], resposta: "3 vezes" },
    { pergunta: "Devemos lavar as mãos antes das refeições?", opcoes: ["Sim", "Não"], resposta: "Sim" },
    { pergunta: "Podemos usar meias sujas por vários dias?", opcoes: ["Sim", "Não"], resposta: "Não" },
];

const QuizSaudeScreen = () => {
    const [indice, setIndice] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const perguntaAtual = perguntas[indice];

    const verificarResposta = (resposta) => {
        if (resposta === perguntaAtual.resposta) {
            setPontuacao(pontuacao + 1);
        }
        if (indice < perguntas.length - 1) {
            setIndice(indice + 1);
        } else {
            setMostrarResultado(true);
        }
    };

    const reiniciarQuiz = () => {
        setIndice(0);
        setPontuacao(0);
        setMostrarResultado(false);
    };

    return (
        <View style={styles.container}>
            {mostrarResultado ? (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Você acertou {pontuacao} de {perguntas.length}!</Text>
                    <CustomButton title="Reiniciar" onPress={reiniciarQuiz} />
                </View>
            ) : (
                <View style={styles.quizContainer}>
                    <Text style={styles.question}>{perguntaAtual.pergunta}</Text>
                    {perguntaAtual.opcoes.map((opcao, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.option}
                            onPress={() => verificarResposta(opcao)}
                        >
                            <Text style={styles.optionText}>{opcao}</Text>
                        </TouchableOpacity>
                    ))}
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
        justifyContent: 'center',
    },
    quizContainer: {
        alignItems: 'center',
    },
    question: {
        fontSize: theme.fonts.large,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.medium,
        textAlign: 'center',
    },
    option: {
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        padding: theme.spacing.small,
        marginBottom: theme.spacing.small,
        width: '80%',
        alignItems: 'center',
    },
    optionText: {
        color: theme.colors.white,
        fontSize: theme.fonts.medium,
    },
    resultContainer: {
        alignItems: 'center',
    },
    resultText: {
        fontSize: theme.fonts.large,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: theme.spacing.medium,
    },
});

export default QuizSaudeScreen;
