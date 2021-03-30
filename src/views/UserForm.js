import React, { useState } from "react"
import { Text } from "react-native"

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {});
    console.warn(user)
    return(
        <Text>{user.id}</Text>
    )
}