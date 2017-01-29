import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {CircularProgress} from 'react-native-svg-circular-progress'

const styles = StyleSheet.create({
    base: {
        alignSelf: 'center',
        marginTop: 100
    },
    text: {
        color: '#c6c4c5',
        fontSize: 20
    }
})

const App = () => {
    const percentage = 40
    return <View style={styles.base}>
        <CircularProgress percentage={percentage}>
            <View>
                <Text style={styles.text}>{percentage}%</Text>
            </View>
        </CircularProgress>
    </View>
}
export default App