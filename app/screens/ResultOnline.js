import React, { useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"
import MapView from "react-native-maps"
import AsyncStorage from "@react-native-community/async-storage"

export default function ResultOnline(props) {

    const ApiData = props.route.params.ApiData

    const StoreApiData = {
        City: ApiData.name,
        Temperature: ApiData.main.temp,
        Humidity: ApiData.main.humidity,
        Pressure: ApiData.main.pressure,
        Max_Temp: ApiData.main.temp_max,
        Min_Temp: ApiData.main.temp_min,
        Latitude: ApiData.coord.lat,
        Longitude: ApiData.coord.lon,
    }

    if (global.StoreApiDataArray.length <= 4) {
        global.StoreApiDataArray.push(StoreApiData)
    }

    const setLocalStorage = async () => {
        try {
            await AsyncStorage.setItem("StoreApiData", JSON.stringify(global.StoreApiDataArray))
            console.log("Data successfully saved")
        } catch (e) {
            alert("Failed to save the data to the storage")
        }
    }

    useEffect(() => {
        setLocalStorage()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titletext}>
                City: {ApiData.name}
            </Text>
            <Text style={styles.text}>
                Temperature: {ApiData.main.temp}
            </Text>
            <Text style={styles.text}>
                Humidity: {ApiData.main.humidity}
            </Text>
            <Text style={styles.text}>
                Pressure: {ApiData.main.pressure}
            </Text>
            <Text style={styles.text}>
                Max Temp: {ApiData.main.temp_max}
            </Text>
            <Text style={styles.text}>
                Min Temp: {ApiData.main.temp_min}
            </Text>
            <View style={styles.container}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: ApiData.coord.lat,
                        longitude: ApiData.coord.lon,
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
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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
})