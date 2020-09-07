import * as Network from "expo-network"

export default async function Connectivity() {
    return await Network.getNetworkStateAsync()
}