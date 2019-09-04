import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const RowItem = ({ name, onPress, color }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <View style={[styles.row, { backgroundColor: color }]}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#36b1f0',
        width: 200,
        marginVertical: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
        textAlign: "center"
    }
});

export default RowItem
