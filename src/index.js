import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import { List,ListItem } from 'react-native-elements';


export default class ComponentLook extends Component{
        
    constructor(Props){
        super(Props);
      
        this.state = {
          loading: false,
          User: [],
          url: 'http://3.82.243.220:8000/api/filtrar/usuarios?nombre=jhon'
        }
     }

    componentDidMount(){
        this.getUser();
     }

    getUser = () =>{
        this.setState({ loading:true })
      
        fetch(this.state.url)
        .then(res => res.json())
        .then(res =>{
          this.setState({
            User: res,
            loading: false
          })
        })
     }
    render() {
        if(this.state.loading){
          return(
            <View style={styles.container}>
              <Text style={styles.welcome}>Hola desde react lindo lindo</Text>
            </View>
          )
        };
        return (
          <View style= {{flex: 1, paddingTop:90, paddingLeft:5}}>
            <List   containerStyle={styles.container} >
              <FlatList
                data = {this.state.User}
                renderItem = {({ item }) =>(
                  <ListItem
                    roundAvatar
                    title={<Text style={styles.texto}>{item.nombre} {item.apellido}</Text>}
                    subtitle={<Text style={styles.texto}> ID: {item.idUsuario} {'\n'}Cedula: {item.numeroDocumento} {'\n'} Rol: {item.rolUsuario}</Text>}
                    avatar = {{uri: item.fotoPerfil}}
    
                    containerStyle={styles.containerBlock}
                  />
                )}
                keyExtractor = {(item, index) => index.toString()}
              />
             </List>
           </View>
         );
     }
}



const styles = StyleSheet.create({
    container: {
      borderTopWidth: 0,
      borderBottomWidth: 0
    },
    welcome: {
      height: 20,
      textAlign: 'center',
      margin: 10,
      backgroundColor: 'blue',
    },
    texto: {
      textAlign: 'center',
      color: 'black',
      marginBottom: 5,
    },
    containerBlock:{
      borderBottomWidth: 5,
      borderLeftWidth:5,
      borderRightWidth:5,
      borderTopWidth:5,
      paddingBottom:35,
      paddingTop:35,
      borderColor:'silver',
      marginLeft: 15,
      marginRight: 20,
    }
  });