import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Search from "../screens/Search"
import ResultOnline from "../screens/ResultOnline"

const Stack = createStackNavigator()

export default function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ title: "Search" }}
            />
            <Stack.Screen
                name="ResultOnline"
                component={ResultOnline}
                options={{ title: "Result On Line" }}
            />
        </Stack.Navigator>
    )
}