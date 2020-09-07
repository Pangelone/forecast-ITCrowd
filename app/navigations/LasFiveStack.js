import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import LastFive from "../screens/LastFive"
import ResultOffLine from "../screens/ResultOffLine"

const Stack = createStackNavigator()

export default function LastFiveStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LastFive"
                component={LastFive}
                options={{ title: "Last 5" }}
            />
            <Stack.Screen
                name="ResultOffLine"
                component={ResultOffLine}
                options={{ title: "Result Off Line" }}
            />
        </Stack.Navigator>
    )
}