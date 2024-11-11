import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const atividades = [
    { id: '1', title: 'Atividade 1' },
    { id: '2', title: 'Atividade 2' },
    { id: '3', title: 'Atividade 3' },
];

const MenuAtividadesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha uma Atividade</Text>
            <FlatList
                data={atividades}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('TelaAtividade', { atividadeId: item.id })}
                    >
                        <Text style={styles.itemText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f9',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    item: {
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 10,
        marginBottom: 10,
    },
    itemText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default MenuAtividadesScreen;
