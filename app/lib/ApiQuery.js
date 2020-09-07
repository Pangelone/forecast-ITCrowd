export default async function ApiQuery(Data) {
    const ApiKey = "ce4a549b2d39f81f745faa27bd451595"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + Data.inputData + "&appid=" + ApiKey
    console.log("Searching: " + Data.inputData)
    console.log("ApiUrl: " + url)

    const ApiData = await fetch(url, { method: "POST" })
        .then(response => response.json())
        .then(responseJson => { return responseJson })
        .catch((e) => { console.log(e) })
    return ApiData
}