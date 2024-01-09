import { View,StyleSheet } from 'react-native';

const Task_style = StyleSheet.create( {
        item:{
            backgroundColor:"#fff",
            borderRadius:10,
            padding:15,
            marginBottom:20,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between'
        },
        itemlist:{
            flexDirection:'row',
            flexWrap:'wrap',
            alignItems:'center',
        },
        square:{
            width:24,
            height:24,
            backgroundColor:"#55BCF6",
           borderRadius:5,
           marginRight:15
        },
        itemtext:{
            maxWidth:"80%",
        },
        circular:{
            width:20,
            height:20,
            borderWidth:2,
            borderColor:"#55BCF6",
           borderRadius:60,
           
        },

});

export default Task_style;
