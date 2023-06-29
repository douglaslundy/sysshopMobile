import React from "react";
import BackArrow from "../../components/common/BackArrow";
import { Container, ForgetPassword, Input, InputContainer, Logo } from "./styled";
import DefaultButton from "../../components/common/DefaultButton";
import { Alert } from "react-native";

const logo = require("../../../assets/images/logo.png");

const Login = () => {
    const handleLogin = () => {
        Alert.alert('botao de login');
    }
    return (
        <Container>
            <BackArrow marginLeft={30} />
            <Logo source={logo} />
            <InputContainer>
                <Input placeholder="Email"
                    placeholderTextColor="white" />
            </InputContainer>

            <InputContainer>
                <Input placeholder="Senha"
                    placeholderTextColor="white"
                    secureTextEntry={true} />
            </InputContainer>
            <ForgetPassword>Esqueceu sua senha</ForgetPassword>

            <DefaultButton
                buttonText="Fazer Login"
                buttonType="primary"
                marginVertical={40}
                buttonHandle={() => {
                    handleLogin();
                }} />
        </Container>
    );
};

export default Login;