import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas
import HomeScreen from './screens/HomeScreen';
import ServicoPodologicoScreen from './screens/ServicoPodologicoScreen';
import PassoAPassoScreen from './screens/PassoAPassoScreen';
import DicasCuidadosScreen from './screens/DicasCuidadosScreen';
import PerfilScreen from './screens/PerfilScreen';
import RelatoriosScreen from './screens/RelatoriosScreen';

// Importando o menu de jogos e as telas dos jogos
import JogosEducativosMenuScreen from './screens/JogosEducativosMenuScreen';
import QuizSaudeScreen from './screens/QuizSaudeScreen';
import MemoriaHigieneScreen from './screens/MemoriaHigieneScreen';
import SequenciaHabitosScreen from './screens/SequenciaHabitosScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
                <Stack.Screen name="ServicoPodologico" component={ServicoPodologicoScreen} options={{ title: 'Serviço de Podologia' }} />
                <Stack.Screen name="PassoAPasso" component={PassoAPassoScreen} options={{ title: 'Passo a Passo' }} />
                <Stack.Screen name="DicasCuidados" component={DicasCuidadosScreen} options={{ title: 'Dicas de Cuidados' }} />
                <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil da Criança' }} />
                <Stack.Screen name="Relatorios" component={RelatoriosScreen} options={{ title: 'Relatório de Progresso' }} />

                {/* Menu e telas dos jogos */}
                <Stack.Screen name="JogosEducativosMenu" component={JogosEducativosMenuScreen} options={{ title: 'Jogos Educativos' }} />
                <Stack.Screen name="QuizSaude" component={QuizSaudeScreen} options={{ title: 'Quiz de Saúde' }} />
                <Stack.Screen name="MemoriaHigiene" component={MemoriaHigieneScreen} options={{ title: 'Jogo da Memória' }} />
                <Stack.Screen name="SequenciaHabitos" component={SequenciaHabitosScreen} options={{ title: 'Sequência de Hábitos' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
