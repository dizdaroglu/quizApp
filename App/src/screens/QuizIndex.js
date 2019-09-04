import React from 'react'
import { View, Text, Button, StatusBar } from 'react-native'
import RowItem from '../components/RowItem';
import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";
const QuizIndex = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <RowItem
                name="Space"
                color="#36b1f0"
                onPress={() => navigation.navigate('Quiz', {
                    title: 'Space',
                    questions: spaceQuestions,
                    bg: "#36b1f0"
                })} />
            <RowItem
                name="Computer"
                color="#719496"
                onPress={() => navigation.navigate('Quiz', {
                    title: 'Computer',
                    questions: computerQuestions,
                    bg: '#719496'
                })} />
            <RowItem
                name="Westerns"
                color="#49475b"
                onPress={() => navigation.navigate('Quiz', {
                    title: 'Westerns',
                    questions: westernsQuestions,
                    bg: '#49475b'
                })} />

        </View>
    )
}
QuizIndex.navigationOptions = () => {
    return {
        header: null
    }
}
export default QuizIndex
