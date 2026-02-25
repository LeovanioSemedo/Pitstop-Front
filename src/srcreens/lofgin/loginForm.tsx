import { useState} from 'react';
import { Alert } from 'react-native';

export function form (){

     const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
    
        const formularioValido = nome.trim().length > 0 && email.includes('@');
    
        const handleEntrar = () => {
            if (!formularioValido) {
                Alert.alert('Erro', 'Por favor, preencha o nome e um e-mail válido.');
                return;
            }
            console.log('Entrar com', { nome, email });
            // TODO: integrar com API / navegação
        };
    
        const handleCriarConta = () => {
            if (!formularioValido) {
                Alert.alert('Erro', 'Por favor, preencha o nome e um e-mail válido.');
                return;
            }
            console.log('Criar conta com', { nome, email });
            // TODO: navegação para cadastro ou chamar API
        };
}