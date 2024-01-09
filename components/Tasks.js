import React from 'react';
import { View,Text } from 'react-native';
import task_style from '../stylecomponents/Task_style';
const Tasks = (props) => {
  return (
    <View style={task_style.item}>
      <View style={task_style.itemlist}>
        <View style={task_style.square}></View>
        <Text style={task_style.itemtext}>{props.text}</Text>
      </View>
      <View style={task_style.circular}></View>
    </View>

  )
}

export default Tasks;
