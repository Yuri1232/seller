import { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Modal,Text } from 'react-native';


function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [error, setError] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if(enteredGoalText == ''){
      setError("Set a goal")
       
    }else{
      setError("")

    props.onAdd(enteredGoalText);
    setEnteredGoalText('');
    }
  }
 

  return (
    <Modal visible={props.visiblity} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
     
      <View style={ error !== '' ?styles.ErrorView:""}>
        <Text style={styles.ErrorText}>{error}</Text>
      </View>

      <View style={styles.topViewButton}>
        <View style={styles.Button1}>
      <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.Button2}>
        <Button title='Go Back' color={'red'} onPress={props.set}></Button>
      </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  topViewButton:{
    flexDirection:'row',
    padding:16,
 
  },
  Button1:{
    width:100,
    height:100,
    marginRight:16


  },
  Button2:{
    width:100,
    height:100,

  },
  ErrorView:{
    width:280,
    backgroundColor:'red',
    margin:5,
    borderRadius:2,
    justifyContent:'center',
    alignItems:'center'
  },
  ErrorText:{
    color:'white'

  }
});
