import { View, Image, StatusBar } from "react-native";
import { assets } from "../constants";
import { CircleButton } from "./Buttons";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
        source={data.image}
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        // handlePress={() => navigation.goBack()}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

export default DetailsHeader;
