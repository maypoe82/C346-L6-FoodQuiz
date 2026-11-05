import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Question = ({ image, question, value, onValueChange, opt1, opt2, opt3 }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Image source={image} style={{ width: '100%', height: 250 }} />
            <Text style={{ fontSize: 16, marginTop: 5 }}>{question}</Text>
            <Picker selectedValue={value} onValueChange={onValueChange}>
                <Picker.Item label='Select a country' value='' />
                <Picker.Item label={opt1} value={opt1} />
                <Picker.Item label={opt2} value={opt2} />
                <Picker.Item label={opt3} value={opt3} />
            </Picker>
        </View>
    );
};

const App = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');

    return (
        <ScrollView style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
                🍽️ Food Quiz
            </Text>

            <Question
                image={require('./assets/sushi.jpg')}
                question="Where is this dish from?"
                value={ans1}
                onValueChange={(value) => setAns1(value)}
                opt1="America" opt2="Japan" opt3="Korea"
            />

            <Question
                image={require('./assets/mala.jpg')}
                question="Where is this dish from?"
                value={ans2}
                onValueChange={(value) => setAns2(value)}
                opt1="China" opt2="Thailand" opt3="India"
            />

            <Question
                image={require('./assets/mohinga.jpg')}
                question="Where is this dish from?"
                value={ans3}
                onValueChange={(value) => setAns3(value)}
                opt1="Vietnam" opt2="Malaysia" opt3="Myanmar"
            />

            <Question
                image={require('./assets/pizza.jpg')}
                question="Where is this dish from?"
                value={ans4}
                onValueChange={(value) => setAns4(value)}
                opt1="France" opt2="Italy" opt3="Spain"
            />

            <Button title="Submit Answers" onPress={() => {
                let score = 0;
                if (ans1 == 'Japan') { score = score + 1; }
                if (ans2 == 'China') { score = score + 1; }
                if (ans3 == 'Myanmar') { score = score + 1; }
                if (ans4 == 'Italy') { score = score + 1; }

                let msg = 'You can do better next time.';
                if (score == 4) { msg = 'Well done! You are a food expert!'; }
                else if (score >= 2) { msg = 'Not bad!'; }

                Alert.alert('You have ' + score + ' correct answers! ' + msg);
            }} />
        </ScrollView>
    );
};

export default App;