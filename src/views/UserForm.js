import React, { useState } from "react"
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { Text } from "react-native"

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {});
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