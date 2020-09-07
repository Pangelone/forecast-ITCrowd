import React, { useEffect } from "react"
import Navigation from "./app/navigations/Navigation"
import AsyncStorage from "@react-native-community/async-storage"

export default function App() {

  const getLocalStorage = async () => {
    try {
      const Item = await AsyncStorage.getItem("StoreApiData")

      if (Item !== null) {
        global.StoreApiDataArray = JSON.parse(Item)
      } else {
        global.StoreApiDataArray = []
      }
    } catch (e) {
      alert("Failed to fetch the data from storage")
    }
  }

  useEffect(() => {
    getLocalStorage()
  }, [])

  return (
    <Navigation />
  )
}
