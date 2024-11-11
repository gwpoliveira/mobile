import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.large,
        borderRadius: 10,
        marginVertical: theme.spacing.small,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.fonts.medium,
        fontWeight: '500',
    },
});

export default CustomButton;
