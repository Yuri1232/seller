import {StyleSheet, View,Text, Pressable} from 'react-native'
function GoalItem(prop){
    return (
       
        <View>
         <Pressable onPress={prop.value2.bind(this,prop.id)}
         style={({pressed})=> pressed && styles.tabbed}
        
         >
        <Text style={styles.textv}>{prop.value}</Text>
        </Pressable>
      </View>
     
    );
}



export default GoalItem;

const styles = StyleSheet.create({

 
      textv:{
        backgroundColor:'#5e0acc',
        padding:8,
        margin:8,
        borderRadius:6,
        color:'white'
    
      },

      tabbed:{
        opacity:0.5
      }

})