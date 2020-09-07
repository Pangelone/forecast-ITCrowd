import React from "react";
import { StyleSheet, View, Text } from "react-native"
import MapView from 'react-native-maps';

export default function ResultOffLine(props) {
    const ApiData = props.route.params.ApiData

    return (
        <View style={styles.container}>
            <Text style={styles.titletext}>
                City:{ApiData.City}
            </Text>
            <Text style={styles.text}>
                Temperature: {ApiData.Temperature}
            </Text>
            <Text style={styles.text}>
                Humidity: {ApiData.Humidity}
            </Text>
            <Text style={styles.text}>
                Pressure: {ApiData.Pressure}
            </Text>
            <Text style={styles.text}>
                Max Temp: {ApiData.Max_Temp}
            </Text>
            <Text style={styles.text}>
                Min Temp: {ApiData.Min_Temp}
            </Text>
            <View style={styles.container}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: ApiData.Latitude,
                        longitude: ApiData.Longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: 400,
        height: 400,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        marginBottom: 5,
        color: "#00a680",
        fontSize: 15,
        lineHeight: 30
    },
    titletext: {
        marginTop: 30,
        marginBottom: 10,
        color: "#000",
        fontSize: 30,
        lineHeight: 30
    }
});