import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Button,View ,Text} from 'react-native';

function randomNumber(){
    return Math.floor(Math.random()*10);
}

class ScreenComponentOne extends  React.Component{
    static navigationOptions = {
        headerTitle:'Frist screen',
        headerStyle:{
            backgroundColor:'green'
        }
    }

    render(){
        return(
            <View style={{
                flex:1,alignItems:'center',
                justifyContent:'center',
                borderWidth:25,
                borderColor:'teal'
        }}>
            <Button title="Go to screen Two " onPress={()=>{
                this.props.navigation.navigate('RouteNameTwo')
            }} />
        </View>
        )
    }
}
class ScreenComponentTwo extends  React.Component{

    static navigationOptions = ({navigation})=> {
        return {
            headerTitle:'Second screen',
            headerRight:<Button title="Press me" onPress={()=>navigation.navigate('RouteNameThree',{number:11})} />
        }
    }
    render(){
        return(
            <View style={{
                flex:1,alignItems:'center',
                justifyContent:'center',
                borderWidth:25,
                borderColor:'orange'
        }}>
            <Button title="Go to screen Three " onPress={()=>{
                this.props.navigation.navigate('RouteNameThree',{number:randomNumber()})
            }} />
        </View>
        )
    }
}
class ScreenComponentThree extends  React.Component{

    static navigationOptions = ({navigation})=> {
       return{
           headerTitle:`Number ${navigation.getParam('number')}`
       }
    }
    render(){
        return(
            <View style={{
                flex:1,alignItems:'center',
                justifyContent:'center',
                borderWidth:25,
                borderColor:'purple'
        }}>
            <Text style={{fontSize:25}}>{this.props.navigation.getParam('number')}</Text>
            <Button title="New Number " onPress={()=>{
                this.props.navigation.setParams({
                    number:randomNumber()
                })
            }} />
            
            <Button title="Go Back " onPress={()=>{
                this.props.navigation.goBack()
            }} />
        </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    "RouteNameOne":ScreenComponentOne,
    "RouteNameTwo":ScreenComponentTwo,
    RouteNameThree:ScreenComponentThree
})

export default class App extends React.Component{
    render(){
        return <AppNavigator/>
    }
}