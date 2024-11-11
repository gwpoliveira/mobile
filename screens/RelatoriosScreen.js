import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const RelatoriosScreen = () => {
    const screenWidth = Dimensions.get('window').width;
    const data = {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [{ data: [20, 45, 28, 80] }]
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Relatório de Progresso</Text>
            <BarChart
                data={data}
                width={screenWidth - 40}
                height={220}
                yAxisLabel=""
                chartConfig={chartConfig}
                style={styles.chart}
            />
        </View>
    );
};

const chartConfig = {
    backgroundColor: "#007BFF",
    backgroundGradientFrom: "#007BFF",
    backgroundGradientTo: "#87CEEB",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 0.5,
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f4f4f9' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    chart: { borderRadius: 16 }
});

export default RelatoriosScreen;
