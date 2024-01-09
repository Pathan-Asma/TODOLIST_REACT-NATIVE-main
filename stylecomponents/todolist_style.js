import { StyleSheet } from "react-native"

const todolist_style = StyleSheet.create(  {
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        
      },
      tasksWrapper:{
            paddingTop:80,
          paddingHorizontal:20,
          paddingBottom:'50%'
      },
      sectionTitle:{
            fontSize:20,
            fontWeight:"bold",
      },
      items:{
                  marginTop:20
      },
      writeTaskWrapper:{
           position:"absolute",
           bottom:60,
           width:"100%",
           flexDirection:"row",
           justifyContent:"space-around",
           alignItems:"center",
      },
      input:{
            backgroundColor:"#FFF",
            borderRadius:60,
            width:250,
            paddingHorizontal:15,
            paddingVertical:15,
            borderColor:"#COCO",
           
      },
      AddWrapper:{
            backgroundColor:"#FFF",
            borderRadius:60,
            width:60,
            height:60,
            alignItems: "center",
            justifyContent:"center",
            
      },
      addText:{},
      
});

export default todolist_style;
