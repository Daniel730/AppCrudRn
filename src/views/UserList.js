import React, { useContext } from "react"
import { Alert } from "react-native"
import { FlatList, View } from "react-native"
import { ListItem, Button, Icon } from "react-native-elements"
import UsersContext from "../context/UsersContext"
import {
    DELETE_USER
} from '../context/types'

export default props => {
    const {state, dispatch} = useContext(UsersContext)

    const confirmUserDeletion = (user) => {
        Alert.alert("Excluir Usuário", `Deseja excluir o Usuário ${user.name}?`, [
            {
                text: "Sim",
                onPress() {
                    dispatch({
                        type: DELETE_USER,
                        payload: user
                    })
                }
            },
            {
                text: "Não",
                onPress() {
                    console.warn("Cancelou")
                }
            }
        ])
    }

    const getActions = (user) => {
        return(
            <>
                <Button 
                    onPress={() => props.navigation.navigate("UserForm", user)} 
                    type="clear" 
                    icon={<Icon name="edit" size={25} color="orange" /> } 
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)} 
                    type="clear" 
                    icon={<Icon name="delete" size={25} color="red" /> } 
                />
            </>
        )
    }

    const getUserItem = ({item: user}) => {
        return(
            <ListItem 
                leftAvatar={{source: {uri: user.avatarUrl}}}
                title={user.name}
                subtitle={user.email}
                rightElement={getActions(user)}
                key={user.id}
                onPress={() => props.navigation.navigate("UserForm")}
                bottomDivider
            >
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}