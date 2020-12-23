import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Bird from './components/Bird'

export default function App() {

  const screenWidth = Dimensions.get("screen").width //ייבוא הרוחב של המסך בשימוש
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2 //תחתית שמאל של הדיב
  const [birdBottom, setBirdBottom] = useState(screenHeight/2) 
  const [obstaclesLeft, setObstaclesLeft] = useEffect(screenWidth) 
  const gravity = 3
  let gameTimer;
  let obstaclesLeftTimer;
  //#region start bird falling
  useEffect(() => {
    if(birdBottom > 0) {
      setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity) //כל עוד הציפור לא נגעה בתחתית אני רוצה להוריד את הגובה שלה כל פרק זמן
      }, 30)
    }
    return () => {
      clearInterval(gameTimer) //אם התנאי לא מתממש - כלומר הציפור נגעה בתחתית
    }
  }, [birdBottom]) //the input
  //#endregion

 //#region start first obstacles
  useEffect(() => {
    if (obstaclesLeft > 0){
      obstaclesLeftTimer = setInterval(() => {
       setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5) // יזיז את המכשולים שמאלה בפעימות של 5 פיקסלים
      }, 30);
    }
    return () => {
      clearInterval(obstaclesLeftTimer)
    }
  }, [obstaclesLeft])
 //#endregion

  return (
    <View style={styles.container}>
      <Bird 
      birdBottom={birdBottom}
      birdLeft={birdLeft}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
