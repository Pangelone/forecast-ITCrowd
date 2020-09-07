import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LastFiveStack from "./LasFiveStack"
import SearchStack from "./SearchStack"
import screenOptions from "../lib/screens"

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Search"
                tabBarOptions={{
                    inactiveTintColor: "#646446",
                    activeTintColor: "#00a680"
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen
                    name="Search"
                    component={SearchStack}
                    options={{ title: "Search" }}
                />
                <Tab.Screen
                    name="LastFive"
                    component={LastFiveStack}
                    options={{ title: "Last 5" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

