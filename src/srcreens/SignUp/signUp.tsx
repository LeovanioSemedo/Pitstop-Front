import{ View, Text, TextInput, TouchableOpacity, Alert, StatusBar, KeyboardAvoidingView, Platform} from 'react-native';
import {SignUpStyle} from './SignUpStyle';
import { Image } from 'react-native';
import React, { useState } from 'react';

export function SignUp({ navigation }: any) {

        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [nomeFocused, setNomeFocused] = useState(false);
        const [emailFocused, setEmailFocused] = useState(false);
        const [passwordFocused, setPasswordFocused] = useState(false);
        const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

        const formularioValido = nome.trim().length > 0 && email.includes('@') && password.length >= 6 && password === confirmPassword;

        const handleCriada = () => {
            if (!formularioValido) {
                Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
                return;
            }

            else {
                Alert.alert('Sucesso', 'Conta criada com sucesso!');   
                console.log('Conta criada com', {nome, email, password, confirmPassword});
                navigation.navigate('Login');
            }
        }

        const handleJaTenhoConta = () => {
            navigation.navigate('Login');
        }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
            style={SignUpStyle.container}
        >
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />
       
            <View style={SignUpStyle.header}>
                <Image style={SignUpStyle.imageLogo} source={require('../../../assets/Logo.png')} />
                <Text style={SignUpStyle.BemVindoTxt}>Criar conta</Text>
                <Text style={SignUpStyle.FistTxt}>Cria a sua conta de maneira simples e segura!</Text>    
            </View>

            <View style={SignUpStyle.formContainer}>
                <TextInput  
                    style={SignUpStyle.input}
                    value={nome}
                    placeholder="Seu nome completo"
                    placeholderTextColor="#022B30"
                    onChangeText={setNome}
                    autoCapitalize="words"
                    onFocus={() => setNomeFocused(true)}
                    onBlur={() => setNomeFocused(false)}
                />

                <TextInput 
                    style={SignUpStyle.input}
                    value={email}
                    placeholder="Seu@gmail.com"
                    placeholderTextColor="#022B30"
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoComplete="email"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                />

                <TextInput 
                    style={SignUpStyle.input}
                    value={password}
                    placeholder="Sua senha"
                    placeholderTextColor="#022B30"
                    onChangeText={setPassword}
                    keyboardType="visible-password"
                    secureTextEntry
                    autoCorrect={false}
                    textContentType="password"
                    autoComplete="password"
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                />

                <TextInput 
                    style={SignUpStyle.input}
                    value={confirmPassword}
                    placeholder="Confirme sua senha"
                    placeholderTextColor="#022B30"
                    onChangeText={setConfirmPassword}
                    keyboardType="visible-password"
                    secureTextEntry
                    autoCorrect={false}
                    textContentType="password"
                    autoComplete="password"
                    onFocus={() => setConfirmPasswordFocused(true)}
                    onBlur={() => setConfirmPasswordFocused(false)}
                />

                <TouchableOpacity onPress={handleCriada}>
                    <Text style={SignUpStyle.criarContaBtn}>Criar conta</Text>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={handleJaTenhoConta}>
                    <Text style={SignUpStyle.jaTenhoContaBtn}>Já tenho uma conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
        
}
