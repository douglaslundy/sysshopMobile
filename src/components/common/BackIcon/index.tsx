import React from "react";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { Back, BackContainer } from "./styled";

type props = {
  marginLeft: number;
};

const back = require("../../../../assets/icons/arrow-left.png");

const BackIcon = ({ marginLeft }: props) => {
  const navigation = useNavigation<PropsStack>();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <BackContainer
      onPress={() => {
        handleBack();
      }}
    >
      <Back
        marginLeft={marginLeft}
        source={back}
      />
    </BackContainer>
  );
};

export default BackIcon;