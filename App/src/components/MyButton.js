import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const MyButton = ({ text, onPress }) => {
    return (

        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>

    )
}

export const ButtonContainer = ({ children }) => {
    <View style={styles.buttonContainer}>
        {children}
    </View>
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '46%',
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default MyButton
