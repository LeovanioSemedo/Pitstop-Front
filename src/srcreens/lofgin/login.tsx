import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { loginStyles } from './loginStyles';
import {SignUp} from '../SignUp/signUp';
import {MainPage} from '../mainPage/mainPage'


export function Login({ navigation, onLoginSuccess }: any) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [senhaFocused, setSenhaFocused] = useState(false);

    const formularioValido = senha.trim().length > 0 && email.includes('@');

    const handleEntrar = () => {
        if (!formularioValido) {
            Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
            return;
        }
        console.log('Entrar com', {email, senha});
        // TODO: integrar com API / navegação
        onLoginSuccess();
    };

    const handleCriarConta = () => {
        navigation.navigate('SignUp');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
            style={loginStyles.container}
        >
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />
        
            <View style={loginStyles.header}>
                <Image style={loginStyles.imageLogo} source={require('../../../assets/Logo.png')} />
                <Text style={loginStyles.BemVindoTxt}>Seja bem vindo!</Text>
                <Text style={loginStyles.FistTxt}>Resolve os seus problemas automotivos sem sair de casa!</Text>
            </View>

            <View style={loginStyles.formContainer}>
                <Text style={loginStyles.inputLabel}>Email:</Text>
                <TextInput
                    style={loginStyles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Seu@gmail.com"
                    placeholderTextColor="#022B30"
                    autoCapitalize="words"
                    keyboardType='email-address'
                    autoComplete="email"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                />

                <Text style={loginStyles.inputLabel}>Sua senha:</Text>
                <TextInput
                    style={loginStyles.input}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="**********"
                    placeholderTextColor="#022B30"
                    keyboardType="visible-password"
                    secureTextEntry
                    autoCorrect={false}
                    textContentType="password"
                    autoComplete="password"
                    onFocus={() => setSenhaFocused(true)}
                    onBlur={() => setSenhaFocused(false)}
                />

                <TouchableOpacity onPress={() => Alert.alert('Recuperar senha', 'Funcionalidade de recuperação de senha...' )}> 
                    <Text style={loginStyles.linkText}>Esqueceu a sua senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[loginStyles.primaryButton, !formularioValido && loginStyles.buttonDisabled]}
                    onPress={handleEntrar}
                    accessibilityLabel="Entrar"
                > 
                    <Text style={loginStyles.primaryButtonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={loginStyles.secondaryButton}
                    onPress={handleCriarConta}
                    accessibilityLabel="Criar conta"
                > 
                    <Text style={loginStyles.secondaryButtonText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      
    );
}   