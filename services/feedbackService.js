// services/feedbackService.js
import api from './api';

export const getFeedbacks = async () => {
    try {
        const response = await api.get('/feedbacks/');
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar feedbacks:', error);
        return [];
    }
};

export const postFeedback = async (conteudo) => {
    try {
        const response = await api.post('/feedbacks/', { conteudo });
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar feedback:', error);
        return null;
    }
};
