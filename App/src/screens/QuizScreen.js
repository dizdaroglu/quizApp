import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import TEMP_QUESTIONS from '../data/space';
import MyButton, { ButtonContainer } from '../components/MyButton';
import Alert from '../components/Alert';

const QuizScreen = ({ navigation }) => {
    const bg = navigation.getParam('bg');

    const [correctCount, setCount] = useState(0);
    const [active, setActive] = useState(0);
    const [totalQuestion, setTotal] = useState(navigation.getParam("questions", []).length);
    const [answered, setAnswer] = useState(false);
    const [answerCorrect, setCorrect] = useState(false);

    answer = (correct) => {

        if (correct) {
            setAnswer(true)
            setCount(correctCount + 1);

            setCorrect(true)

            setTimeout(() => {

                setAnswer(false)
            }, 750);

            setActive(active + 1);

            if (active >= totalQuestion - 1)
                setActive(0);
        } else {
            setAnswer(true);
            setTimeout(() => {
                setAnswer(false);
            }, 750);
            setCorrect(false);
        }
    }


    // const question = TEMP_QUESTIONS[active];
    const questions = navigation.getParam("questions", [])
    const question = questions[active];
    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <SafeAreaView style={styles.safearea}>
                <View>
                    <Text style={styles.text}>{question.question}</Text>
                    <View style={{ flexDirection: "row", flexWrap: 'wrap', marginTop: 20, justifyContent: 'space-between' }}>
                        {
                            question.answers.map(answer => (
                                <MyButton
                                    key={answer.id}
                                    text={answer.text}
                                    onPress={() => this.answer(answer.correct)} />
                            ))
                        }
                    </View>
                </View>
                <Text style={styles.text}>{correctCount}/{navigation.getParam("questions", []).length}</Text>
            </SafeAreaView>
            <Alert correct={answerCorrect} visible={answered} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36B1F0',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        letterSpacing: -0.02
    },
    safearea: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'space-between'
    }
});

QuizScreen.navigationOptions = ({ navigation }) => {
    return {
        header: null
    }
}

export default QuizScreen
