import React from "react";
// 리액트 네이티브에서 뷰, 텍스트, 스타일시트를 가져온다.
import { View, Text, StyleSheet } from "react-native";
import Proptypes from "prop-types";

// weather는 stateless 컴포넌트가 될 것임
// text는 "{temp}"가 될 것임
export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.proptypes = {
  // temp는 number이기 때문에 아래와 같이 작성해준다.
  // 즉, 데이터 타입 검사를 해서 에러가 나지 않도록 하는 것이다.
  temp: Proptypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});