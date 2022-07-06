import {useState} from 'react' 
import { StyleSheet,View, FlatList, Button } from 'react-native';

import GoalItem from './Components/goalItem'; 
import GoalInput from './Components/goalInput';

export default function App() {
   //fatch live data 
  const [getgoals, setGoals]=useState([]); // get and set data into array
  const [isVisibale, setVisbale] = useState(false)

function eventButton(getdata){ // display current and new data 
  setGoals((currrentGoal) =>  [...currrentGoal, {text: getdata, key: Math.random().toString()}])
}
function deleteOnPress(key){
  setGoals(currrentGoal =>{
    return currrentGoal.filter((goal)=> goal.key !==key);
  });
}
function visiblity_handler(){
  setVisbale(true)
}
function visiblity_handler_off(){
  setVisbale(false)
}
  return (
    <View style={styles.container}>
     
     <GoalInput onAdd={eventButton}  visiblity={isVisibale} set={visiblity_handler_off}/>
     <Button title='Add a goal' onPress={visiblity_handler} color='purple'></Button>
      <View style={styles.listGoal}>
        <FlatList data={getgoals}
        keyExtractor={((item, index)=>{
          return item.key
        }
          
          
          )}
         renderItem={itemData  =>{
         
         return<GoalItem value ={itemData.item.text} value2={deleteOnPress} id={itemData.item.key}/>
         

        }}/>
     
      </View>
     
     
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex:1,
    paddingTop:80,
    paddingHorizontal:16,

  
    
    backgroundColor: '#fff',

  },

 

    listGoal:{
      flex:4,
      marginTop:10,
     
    },
    
});
