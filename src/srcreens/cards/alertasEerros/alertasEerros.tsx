import { Text, View, StatusBar, TouchableOpacity, FlatList, Image } from "react-native";
import { alertasEerros } from "./alertasEerrosStyles";
import { Ionicons } from '@expo/vector-icons';

interface Alerta {
    id: string;
    titulo: string;
    descricao: string;
    imagemKey?: string; // Chave para a imagem no objeto images
}

// Objeto com as imagens - adicione aqui os require quando baixar as imagens
const images: { [key: string]: any } = {
    'oleo_baixo': require('../../../../assets/Simbolos/Pressao_de_oleo.png'),
    'motor_quente': require('../../../../assets/Simbolos/Motor_quente.png'),
    'bateria_fraca': require('../../../../assets/Simbolos/Bateria_fraca.png'),
    'pneus_baixos': require('../../../../assets/Simbolos/Pneus_baixos.png'),
    'freios_falha': require('../../../../assets/Simbolos/Freios_falha.png'),
    'transmissao': require('../../../../assets/Simbolos/Transmissao.png'),
    'combustivel_baixo': require('../../../../assets/Simbolos/Combustivel_baixo.png'),
    'refrigerante_baixo': require('../../../../assets/Simbolos/Refrigerante_baixo.png'),
    'filtro_ar': require('../../../../assets/Simbolos/Filtro_de_ar.png'),
    'velas_ignicao': require('../../../../assets/Simbolos/Velas_de_ignicao.png'),
    'abs_falha': require('../../../../assets/Simbolos/ABS_falha.png'),
    'luz_motor': require('../../../../assets/Simbolos/direcao_eletrica.png'),
    'airbag': require('../../../../assets/Simbolos/AirBag.png'),
    'iluminacao': require('../../../../assets/Simbolos/problema_farois_iluminacao.png'),
    'aviso_geral': require('../../../../assets/Simbolos/Aviso_geral.png'),


   
};

const alertas: Alerta[] = [
    { id: '1', titulo: 'Pressão do Óleo Baixa', descricao: 'Verifique o nível de óleo do motor imediatamente.', imagemKey: 'oleo_baixo' },
    { id: '2', titulo: 'Motor Sobreaquecendo', descricao: 'Pare o veículo e verifique o sistema de refrigeração.', imagemKey: 'motor_quente' },
    { id: '3', titulo: 'Bateria Fraca', descricao: 'A bateria pode precisar de recarga ou substituição.', imagemKey: 'bateria_fraca' },
    { id: '4', titulo: 'Pressão dos Pneus Baixa', descricao: 'Encha os pneus para a pressão recomendada.', imagemKey: 'pneus_baixos' },
    { id: '5', titulo: 'Falha nos Freios', descricao: 'Inspecione o sistema de freios urgentemente.', imagemKey: 'freios_falha' },
    { id: '6', titulo: 'Problema na Transmissão', descricao: 'Verifique fluidos e componentes da transmissão.', imagemKey: 'transmissao' },
    { id: '7', titulo: 'Combustível Baixo', descricao: 'Abasteça o veículo o mais breve possível.', imagemKey: 'combustivel_baixo' },
    { id: '8', titulo: 'Nível de Refrigerante Baixo', descricao: 'Complete o líquido de arrefecimento.', imagemKey: 'refrigerante_baixo' },
    { id: '9', titulo: 'Luz de Avaria do Motor (Check Engine)', descricao: 'A luz Check Engine indica uma falha no motor ou sistema eletrônico e deve ser verificada o quanto antes, especialmente se estiver piscando.', imagemKey: 'luz_motor' },
    { id: '10', titulo: 'Velas de Ignição Defeituosas', descricao: 'Verifique e substitua as velas se necessário.', imagemKey: 'velas_ignicao' },
    { id: '11', titulo: 'Falha no ABS', descricao: 'Sistema de freios anti-bloqueio precisa de atenção.', imagemKey: 'abs_falha' },
    { id: '12', titulo: 'Direção eléctrica', descricao: 'Indica falha ou aviso no sistema de direção elétrica. Pode afetar a assistência da direção, tornando o volante mais pesado', imagemKey: 'luz_motor' },
    { id: '13', titulo: 'AirBag', descricao: 'Indica um problema ou alerta importante. Verifique o painel e resolva conforme a mensagem exibida.', imagemKey: 'airbag' },
    { id: '14', titulo: 'Problema nos faróis/iluminação', descricao: 'Falha nos faróis, luzes de freio ou lanternas.', imagemKey: 'iluminacao' },
    { id: '15', titulo: 'Aviso geral', descricao: 'Indica um problema ou alerta importante. Verifique o painel e resolva conforme a mensagem exibida.', imagemKey: 'aviso_geral' },
];

export function Alertas({ voltar }: any) {
    const renderAlerta = ({ item }: { item: Alerta }) => (
        <View style={alertasEerros.alertaCard}>
            <View style={alertasEerros.alertaIconContainer}>
                {item.imagemKey && images[item.imagemKey] ? (
                    <Image source={images[item.imagemKey]} style={alertasEerros.alertaImage} />
                ) : (
                    <View style={alertasEerros.placeholder}>
                        <Text style={alertasEerros.placeholderText}>Imagem</Text>
                    </View>
                )}
            </View>
            <View style={alertasEerros.alertaTextContainer}>
                <Text style={alertasEerros.alertaTitulo}>{item.titulo}</Text>
                <Text style={alertasEerros.alertaDescricao}>{item.descricao}</Text>
            </View>
        </View>
    );

    return (
        <View style={alertasEerros.container}>
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <TouchableOpacity style={alertasEerros.backButton} onPress={voltar}>
                <Ionicons name="arrow-back" size={30} color="#fff" />
            </TouchableOpacity>

            <Text style={alertasEerros.title}>Alertas e Erros</Text>

            <FlatList
                data={alertas}
                renderItem={renderAlerta}
                keyExtractor={(item) => item.id}
                style={alertasEerros.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
