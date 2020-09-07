# sagrada palabra app v2

## dev
```
npm install
expo start
```

## Sending notifications

```
cd root/sp_backend
rails c
u = User.last
u.contents.destroy_all
u.syncronize_content
```

## After Eject

---- 
En MacOS, para que funcione en Android hay que usar el java 11, para eso:

brew update
brew tap homebrew/cask-versions
brew cask install java11
export JAVA_HOME=$(/usr/libexec/java_home -v11)


Crear archivo android/local.properties y agregar esto con el path del sdk
sdk.dir = /Users/martin/Library/Android/sdk 

```
yarn android
```

## iOS

```
npx pod-install
yarn ios
```

## Branch.io

```
npm i
cd ios; pod install; cd ..;
react-native run-ios
```
