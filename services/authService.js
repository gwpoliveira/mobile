// services/authService.js
import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (username, password) => {
    try {
        const response = await api.post('/token/', { username, password });
        const { access, refresh } = response.data;

        await AsyncStorage.setItem('access_token', access);
        await AsyncStorage.setItem('refresh_token', refresh);

        return true;
    } catch (error) {
        console.error('Erro no login:', error);
        return false;
    }
};

export const refreshAccessToken = async () => {
    try {
        const refreshToken = await AsyncStorage.getItem('refresh_token');
        if (!refreshToken) return false;

        const response = await api.post('/token/refresh/', { refresh: refreshToken });
        const { access } = response.data;

        await AsyncStorage.setItem('access_token', access);
        return true;
    } catch (error) {
        console.error('Erro ao atualizar o token:', error);
        return false;
    }
};
