import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from 'react-native-elements'

const Stack = createStackNavigator()
export default class App extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="UserList"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen 
                        name="UserList"
                        component={UserList}
                        options={({navigation}) => {
                            return{
                                title: "Lista de usuários",
                                headerRight: () => (
                                    <Button 
                                        onPress={() => navigation.navigate('UserForm')}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="#FFF" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen 
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Formulário de Usuários"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const screenOptions = {
    headerStyle: {
        backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold"
    }
}