import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native"
import { Input, Button } from "react-native-elements"
import Toast from "react-native-easy-toast"
import Loading from "../components/Loading"
import Connectivity from "../lib/Validations"

import ApiQuery from "../lib/ApiQuery"

export default function Search({ navigation }) {
    const [formData, setFormData] = useState({ inputData: "" })
    const [Visible, setVisible] = useState(false)
    const toastRef = useRef()

    const onSubmit = () => {
        Connectivity().then(conected => {
            if (conected.isConnected == true) {
                if (formData.inputData.length == 0) {
                    toastRef.current.show("Please write the name of a city.")
                } else {
                    setVisible(true)
                    ApiQuery(formData).then(ApiData => {
                        setVisible(false)
                        if (ApiData.cod == 200) {
                            navigation.navigate("ResultOnline", { ApiData: ApiData })
                        } else if (ApiData.cod == 404) {
                            toastRef.current.show("We couldn't find that city.")
                        } else {
                            toastRef.current.show("There was an error, please try again later.")
                        }
                    })
                }
            } else {
                toastRef.current.show("Please check your internet connection.")
            }
        })
    }

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="City name"
                onChange={(e) => onChange(e, "inputData")}
            />
            <Button
                title="Search"
                containerStyle={styles.buttonForm}
                buttonStyle={styles.button}
                onPress={onSubmit}
            />
            <Toast ref={toastRef} position="center" opacity={0.7} />
            <Loading isVisible={Visible} text="Loading..." />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 40,
        marginLeft: 40
    },
    buttonForm: {
        marginTop: 5,
        width: "95%"
    },
    button: {
        backgroundColor: "#00a680"
    }
})