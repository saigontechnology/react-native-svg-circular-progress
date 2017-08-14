import React from 'react'
import {View, StyleSheet} from 'react-native'
import Svg, {Path, Circle} from 'react-native-svg'

const styles = StyleSheet.create({
    base: {
        width: 100,
        height: 100
    },
    textView: {
        position: 'absolute',
        top: 0, left: 0, bottom: 0, right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function generateArc(percentage){
    if (percentage === 100) percentage = 99.999
    const a = percentage*2*Math.PI/100 // angle (in radian) depends on percentage
    const r = 50 // radius of the circle
    var rx = r,
        ry = r,
        xAxisRotation = 0,
        largeArcFlag = 1,
        sweepFlag = 1,
        x = r + r*Math.sin(a),
        y = r - r*Math.cos(a)
    if (percentage <= 50){
        largeArcFlag = 0;
    }else{
        largeArcFlag = 1
    }

    return `A${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}`
}

const CircularProgress = ({
    percentage = 40, 
    blankColor = "#eaeaea", 
    donutColor = "#43cdcf",
    fillColor = "white",
    progressWidth = 35,
    children
}) => {
    return <View style={styles.base}>
        <Svg width="100" height="100">
            <Circle cx="50" cy="50" r="50" fill={blankColor}/>
            <Path 
                d={`M50 50 L50 0 ${generateArc(percentage)} Z`}
                fill={donutColor}
            />
            {<Circle cx="50" cy="50" r={progressWidth} fill={fillColor}/>}
        </Svg>
        <View style={styles.textView}>
            {children}
        </View>
    </View>
}
export default CircularProgress