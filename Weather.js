import React from "react";
// 리액트 네이티브에서 뷰, 텍스트, 스타일시트를 가져온다.
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Proptypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";
// weather는 stateless 컴포넌트가 될 것임
// text는 "{temp}"가 될 것임

const weatherOptions = {
   
    Haze: {
        iconName: "weather-hazy",
        // 0번째가 시작 색, 1번째가 끝나는 색
        gradient: ["#304352", "#d7d2cc"],
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: [],
    },
    Drizzle: {
        iconName:"",
        gradient: [],
    },
    Rain: {
        iconName: "",
        gradient: [],
    },
    Snow: {
        iconName:"",
        gradient: [],
    },
    Clouds: {
        iconName: "",
        gradient: [],
    }
    Atmosphere: {
        iconName: "",
        gradient: [],
    },
    Dust: {
        iconName: "",
        gradient: [],
    },
    Haze: {
        iconName:"",
        gradient: [],
    },
    Mist: {
        iconName:"",
        gradient: [],
    },
    Claer: {
        iconName:"",
        gradient: [],
    }
    
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
    
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                size={100} 
                name={weatherOptions[condition].iconName}
                color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.proptypes = {
  // temp는 number이기 때문에 아래와 같이 작성해준다.
  // 즉, 데이터 타입 검사를 해서 에러가 나지 않도록 하는 것이다.
  temp: Proptypes.number.isRequired,
  condition: Proptypes.oneOf([
      "Thunderstorm",
      "Drizzle", 
      "Rain", 
      "Snow", 
      "Atmosphere", 
      "Clear", 
      "Clouds",
      "Haze",
      "Mist",
      "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
}
});