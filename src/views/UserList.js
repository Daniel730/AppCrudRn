import { getActionFromState } from "@react-navigation/core"
import React from "react"
import { Alert } from "react-native"
import { FlatList, View } from "react-native"
import { ListItem, Avatar, Button, Icon } from "react-native-elements"
import users from '../data/users'

export default props => {

    const confirmUserDeletion = (user) => {
        Alert.alert("Excluir Usuário", `Deseja excluir o Usuário ${user.name}?`, [
            {
                text: "Não",
                onPress() {
                    console.warn("Cancelou")
                }
            },
            {
                text: "Sim",
                onPress() {
                    console.warn("Delete")
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
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}