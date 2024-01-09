import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, View,TouchableOpacity, Keyboard, ScrollView, Button } from 'react-native';
import todolist_style from '../stylecomponents/todolist_style';
import Tasks from '../components/Tasks';
import { useState } from 'react';


const Todolist=({navigation})=> {
  const [task,setTask]=useState();
  const [taskItems,setTaskitems]=useState([]);
  const handleAddTask=()=>
  {
    Keyboard.dismiss();
    setTaskitems([...taskItems,task]);
    setTask(null);
  }
 const deleteTheTask=(index)=>
 {
  let copytaskItems=[...taskItems];
  copytaskItems.splice(index,1);
  setTaskitems(copytaskItems);
 }
const Presshandler=()=>
{
  navigation.navigate('Price')
}

  return (
    
    <View style={todolist_style.container}> 
    <View style={todolist_style.tasksWrapper}>
    <Text style={todolist_style.sectionTitle}>Today's tasks</Text>
    <View style={todolist_style.items}>
    <Button title="goto price page" onPress={Presshandler}></Button>
  <ScrollView>
      {
       
        taskItems.map((item,index)=>
          { 
            return(
              <TouchableOpacity key={index} onPress={()=>deleteTheTask(index)}>
                 <Tasks text={item}></Tasks>
              </TouchableOpacity>
                 )
          })
      }
    </ScrollView>
    </View>
    </View>
   <KeyboardAvoidingView behavior={Platform.OS==='android'?'height':'padding'} style={todolist_style.writeTaskWrapper}>
    <TextInput style={todolist_style.input} placeholder="WRITE THE TASK" value={task} onChangeText={text =>setTask(text)}></TextInput>
    <TouchableOpacity onPress={handleAddTask}>
   <View style={todolist_style.AddWrapper}>
    <Text style={todolist_style.addText}>+</Text>
   </View>
    </TouchableOpacity>
   </KeyboardAvoidingView>
   
    </View>
  );
}

export default Todolist;