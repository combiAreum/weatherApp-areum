import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';

const API_KEY = "";

export default class extends React.Component{
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();

      const {coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      //this.setState( {isLoading: false} );
    } catch (error) {
      //만약 사용자가 permission을 주지 않는다면 어떻게 할지에 대한 정보
      Alert.alert("Can't find you.", "Where are you?");
    }
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state
    return isLoading ? <Loading /> : null;
  }
  
}
