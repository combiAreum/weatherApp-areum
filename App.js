import React from "react";
import { Alert } from "react-native";
import Lodaing from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";
import api from "./secrets.json";

const API_KEY = api.API_KEY;

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { 
      data: {
        main:{temp},
        weather
        } 
      } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false, 
      condition: weather[0].main, 
      temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      // 만약 사용자가 permission을 주지 않는다면 어떻게 할 지에 대한 정보
      Alert.alert("Can't find you! Where are you?");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    //
    return isLoading ? <Lodaing /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}