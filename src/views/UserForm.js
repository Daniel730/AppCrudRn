import React, { useContext, useState } from "react"
import { StyleSheet, Text, Button, TextInput, View } from "react-native";
import { 
    CREATE_USER,
    UPDATE_USER
} from "../context/types";

import UsersContext from "../context/UsersContext";

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {});
    const {dispatch} = useContext(UsersContext)
    return(
        <View>
            <View>
                <Text style={style.text}>Nome:</Text>
                <TextInput
                    style={style.input}
                    onChangeText={name=> setUser({...user, name})}
                    placeholder="Informe o nome: "
                    value={user.name}
                />
            </View>
            <View>
                <Text style={style.text}>E-mail:</Text>
                <TextInput
                    style={style.input}
                    onChangeText={email=> setUser({...user, email})}
                    placeholder="Informe o email: "
                    value={user.email}
                />
            </View>
            <View>
                <Text style={style.text}>Url do Avatar:</Text>
                <TextInput
                    style={style.input}
                    onChangeText={avatarUrl=> setUser({...user, avatarUrl})}
                    placeholder="Informe a URL do avatar: "
                    value={user.avatarUrl}
                />
            </View>
            <Button title="Salvar" onPress={() => {
                dispatch({
                    type: user.id ? UPDATE_USER : CREATE_USER,
                    payload: user,
                })
                navigation.goBack()
            }} />
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "bold"
    },
    form:{
        padding: 12
    },  
    input: {
        color: "black",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10
    }
})