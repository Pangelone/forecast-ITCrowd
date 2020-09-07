import React, { useState, useRef } from "react"
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import { useIsFocused } from "@react-navigation/native"
import Toast from "react-native-easy-toast"

export default function LastFive({ navigation }) {

    const [Render, setRender] = useState(false)

    const isFocused = useIsFocused()

    const toastRef = useRef()

    const removeItem = async (id) => {
        global.StoreApiDataArray.splice(id, 1)
        setRender(isFocused ? false : true)
        await setLocalStorage()
    }

    const setLocalStorage = async () => {
        try {
            setRender(Render ? false : true)
            await AsyncStorage.removeItem("StoreApiData")
            await AsyncStorage.setItem("StoreApiData", JSON.stringify(global.StoreApiDataArray))
            console.log("Data successfully saved")
        } catch (e) {
            alert("Failed to save the data to the storage")
        }
    }

    return (
        <ImageBackground
            source={require("../../assets/screen.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <View>
                <FlatList
                    data={global.StoreApiDataArray.reverse()}
                    renderItem={({ item, index }) => (
                        < TouchableOpacity
                            onPress={() => {
                                navigation.navigate("ResultOffLine", { ApiData: global.StoreApiDataArray[index] })
                            }}
                            onLongPress={() => {
                                removeItem(index)
                                toastRef.current.show(item.City + " has been deleted.")
                            }}
                        >
                            <View style={styles.Container}>
                                <Text style={styles.text}>{item.City}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                >
                </FlatList>
                <Toast ref={toastRef} position="center" opacity={0.7} />
            </View >
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        backgroundColor: "#fff",
        borderColor: "#00a680",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 17,
        marginBottom: 16,
        marginRight: 30,
        marginLeft: 30,

    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    text: {
        color: "#00a680",
        fontSize: 30,
        lineHeight: 30
    },
})