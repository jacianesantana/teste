import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons';

const HomePage = () => {
    const [showBalance, setShowBalance] = useState(true);

    const getCurrentMonthYear = () => {
        // Implement logic to get current month and year
        return "Abril 2024";
    };

    const getSaldoAtual = () => {
        // Implement logic to get current balance
        return showBalance ? "R$ 5.000,00" : "*****";
    };

    const getReceitas = () => {
        // Implement logic to get total income
        return showBalance ? "R$ 3.000,00": "*****";
    };

    const getDespesas = () => {
        // Implement logic to get total expenses
        return showBalance ? "R$ 2.000,00" : "*****";
    };

    const getPorcentagemDespesas = () => {
        // Implement logic to calculate percentage of expenses
        return 0.4; // Exemplo de 40%
    };

    const getValorConsumido = () => {
        // Implement logic to get consumed value
        return "R$ 800,00";
    };

    const getValorTotal = () => {
        // Implement logic to get total value
        return "R$ 2.000,00";
    };

    const getValorRestante = () => {
        // Implement logic to calculate remaining value
        return "R$ 1.200,00";
    };

    const handleShowBalance = () => {
        setShowBalance(!showBalance);
    };

    const handlePreviousMonth = () => {
        // Implement logic to navigate to previous month
    };

    const handleNextMonth = () => {
        // Implement logic to navigate to next month
    };

    const handleInvestments = () => {
        // Implement logic to navigate to investments page
    };

    const handleWallet = () => {
        // Implement logic to navigate to wallet page
    };

    const getQuantiaInvestida = () => {
        // Implement logic to get invested amount
        return "R$ 1.500,00";
    };

    const getQuantiaDisponivel = () => {
        // Implement logic to get available amount
        return "R$ 3.000,00";
    };

    return (
        <View style={styles.container}>
            {/* Mês e ano atual */}
            <View style={styles.row}>
                <TouchableOpacity onPress={handlePreviousMonth}>
                    <FontAwesome name="arrow-circle-left" size={24} color="black" />
                </TouchableOpacity>
                <Text>{getCurrentMonthYear()}</Text>
                <TouchableOpacity onPress={handleNextMonth}>
                    <FontAwesome name="arrow-circle-right" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Saldo atual */}
            <View style={styles.row}>
                <Text>Saldo Atual: </Text>
                <Text>{getSaldoAtual()}</Text>
                <TouchableOpacity onPress={handleShowBalance}>
                    {showBalance ? (
                        <Ionicons name="eye" size={24} color="black" />
                    ) : (
                        <Ionicons name="eye-off" size={24} color="black" />
                    )}
                </TouchableOpacity>
            </View>

            {/* Receitas e Despesas */}
            <View style={styles.row}>
                <View style={styles.row}>
                    <FontAwesome5 name="arrow-circle-up" size={24} color="green" />
                    <Text>{getReceitas()}</Text>
                </View>
                <View style={styles.row}>
                    <FontAwesome5 name="arrow-circle-down" size={24} color="red" />
                    <Text>{getDespesas()}</Text>
                </View>
            </View>

            {/* Valor consumido, total disponível e restante */}
            <View style={styles.row}>
                <Text>{`${getValorConsumido()} de ${getValorTotal()}`}</Text>
                <Text style={styles.boldText}>{`Restante: ${getValorRestante()}`}</Text>
            </View>

            {/* Card Investimentos */}
            <TouchableOpacity onPress={handleInvestments} style={styles.cardContainer}>
                <View style={styles.row}>
                    <Octicons name="graph" size={24} color="black" />
                    <Text style={styles.boldText}>Investimentos</Text>
                </View>
                <View style={styles.row}>
                    <Text>Quantia investida:</Text>
                    <Text>{getQuantiaInvestida()}</Text>
                </View>
            </TouchableOpacity>

            {/* Card Carteira */}
            <TouchableOpacity onPress={handleWallet} style={styles.cardContainer}>
                <View style={styles.cardRow}>
                    <Ionicons name="wallet" size={24} color="black" />
                    <Text style={styles.boldText}>Carteira</Text>
                </View>
                <View style={styles.cardRow}>
                    <Text>Quantia disponível:{" "}</Text>
                    <Text>{getQuantiaDisponivel()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    cardRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    cardContainer: {
        marginBottom: 20,
    }
});

export default HomePage;
