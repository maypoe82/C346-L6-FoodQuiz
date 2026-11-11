import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({ number, emoji, image, question, value, onValueChange, opt1, opt2, opt3 }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />

            <View style={styles.cardBody}>
                <View style={styles.questionRow}>
                    <View style={styles.numberBox}>
                        <Text style={styles.number}>{number}</Text>
                    </View>
                    <View style={styles.questionTextBox}>
                        <Text style={styles.questionLabel}>QUESTION {number}</Text>
                        <Text style={styles.question}>{emoji}  {question}</Text>
                    </View>
                </View>

                <View style={styles.pickerBox}>
                    <Picker selectedValue={value} onValueChange={onValueChange} style={styles.picker}>
                        <Picker.Item label='Select a country' value='' />
                        <Picker.Item label={opt1} value={opt1} />
                        <Picker.Item label={opt2} value={opt2} />
                        <Picker.Item label={opt3} value={opt3} />
                    </Picker>
                </View>
            </View>
        </View>
    );
};

const App = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.header}>🍽️ Food Quiz</Text>
                <Text style={styles.subHeader}>Guess which country each dish comes from</Text>
            </View>

            <View style={styles.infoBar}>
                <Text style={styles.infoText}>4 Questions</Text>
                <Text style={styles.infoText}>Choose one answer each</Text>
            </View>

            <Question
                number="1"
                emoji="🍣"
                image={require('./assets/sushi.jpg')}
                question="Where is this dish from?"
                value={ans1}
                onValueChange={(value) => setAns1(value)}
                opt1="America" opt2="Japan" opt3="Korea"
            />

            <Question
                number="2"
                emoji="🌶️"
                image={require('./assets/mala.jpg')}
                question="Where is this dish from?"
                value={ans2}
                onValueChange={(value) => setAns2(value)}
                opt1="China" opt2="Thailand" opt3="India"
            />

            <Question
                number="3"
                emoji="🍜"
                image={require('./assets/mohinga.jpg')}
                question="Where is this dish from?"
                value={ans3}
                onValueChange={(value) => setAns3(value)}
                opt1="Vietnam" opt2="Malaysia" opt3="Myanmar"
            />

            <Question
                number="4"
                emoji="🍕"
                image={require('./assets/pizza.jpg')}
                question="Where is this dish from?"
                value={ans4}
                onValueChange={(value) => setAns4(value)}
                opt1="France" opt2="Italy" opt3="Spain"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    let score = 0;
                    if (ans1 == 'Japan') { score = score + 1; }
                    if (ans2 == 'China') { score = score + 1; }
                    if (ans3 == 'Myanmar') { score = score + 1; }
                    if (ans4 == 'Italy') { score = score + 1; }

                    let msg = 'You can do better next time. 💪';
                    if (score == 4) { msg = 'Well done! You are a food expert! 🏆'; }
                    else if (score >= 2) { msg = 'Not bad! 👍'; }

                    Alert.alert('Your Result', 'You have ' + score + ' correct answers! ' + msg);
                }}
            >
                <Text style={styles.buttonText}>Submit Answers</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>Food Quiz · C346 Mobile App Development</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F7F7',      // soft grey-white
    },
    headerBox: {
        backgroundColor: '#127C74',      // deep fresh teal
        padding: 24,
        marginTop: 30,
        alignItems: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    subHeader: {
        fontSize: 14,
        color: '#D7F2EF',
        marginTop: 6,
    },
    infoBar: {
        flexDirection: 'row',
        justifyContent: 'space-between', // left text and right text
        backgroundColor: '#E1F2F0',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
    },
    infoText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#127C74',
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#DDE5E5',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    cardBody: {
        padding: 14,
    },
    questionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    numberBox: {
        width: 40,
        height: 40,
        backgroundColor: '#1FA99E',      // teal circle-ish box
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    questionTextBox: {
        flex: 1,
        marginLeft: 12,
    },
    questionLabel: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#8A9A9A',
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E2A2A',
        marginTop: 2,
    },
    pickerBox: {
        borderWidth: 1,
        borderColor: '#B8D8D5',
        backgroundColor: '#F7FBFB',
    },
    picker: {
        color: '#1E2A2A',
    },
    button: {
        backgroundColor: '#F26B5B',      // coral accent
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 4,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    footer: {
        textAlign: 'center',
        fontSize: 12,
        color: '#8A9A9A',
        marginTop: 18,
        marginBottom: 40,
    },
});

export default App;