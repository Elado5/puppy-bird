import React from 'react'
import { View} from 'react-native';

//View הופך למקביל שלו על כל פלטפורמה שיריצו עליה את ריאקט נייטיב
//בין אם זה <div>, android.view ועוד

const Bird = ({birdBottom, birdLeft}) => {
    
    const birdWidth = 50
    const birdHeight = 60

    return (
        <View style={{position: 'absolute',
        backgroundColor: 'brown',
        width: birdWidth,
        height: birdHeight,
        left: birdLeft - (birdWidth/2), //מירכוז משמאל
        bottom: birdBottom - (birdHeight/2), //מירכוז מלמטה
        }}>
                
        </View>
    )
}

export default Bird;