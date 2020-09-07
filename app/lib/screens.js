import React from "react";
import { Icon } from "react-native-elements"

export default function screenOptions(route, color) {
    let iconName

    switch (route.name) {
        case "Search":
            iconName = "magnify"
            break;
        case "LastFive":
            iconName = "numeric-5-box-multiple-outline"
            break;
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}