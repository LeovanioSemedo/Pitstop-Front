import { Text, View, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { dicasStyles } from "./dicasStyles";

export function Dicas({ voltar }: any) {
    // Lista de 30 dicas práticas e essenciais de automóveis (em português angolano)
    const dicas = [
        { id: '1', titulo: 'Verifica o óleo todos os dias', descricao: 'Antes de sair, vê o nível do óleo no motor. Nível baixo pode causar danos graves.', icone: 'oil' },
        { id: '2', titulo: 'Calibra os pneus toda semana', descricao: 'Vê a pressão dos pneus toda semana. Pneus murchos aumentam consumo e risco de acidentes.', icone: 'speedometer' },
        { id: '3', titulo: 'Faz revisões no prazo', descricao: 'Nunca adies revisões programadas. Problemas pequenos hoje evitam gastos grandes amanhã.', icone: 'settings' },
        { id: '4', titulo: 'Troca filtros na hora certa', descricao: 'Filtros sujos prejudicam o motor. Segue o manual do carro para substituições.', icone: 'filter' },
        { id: '5', titulo: 'Ouve os travões', descricao: 'Ruídos estranhos nos travões indicam necessidade de troca. Segurança em primeiro lugar.', icone: 'car-sport' },
        { id: '6', titulo: 'Testa a bateria todos os meses', descricao: 'Baterias velhas falham nas horas erradas. Testa e substitui quando necessário.', icone: 'battery-full' },
        { id: '7', titulo: 'Usa o combustível correcto', descricao: 'Nunca mistures tipos de combustível. Usa sempre o recomendado para o teu carro.', icone: 'flame' },
        { id: '8', titulo: 'Limpa o carro regularmente', descricao: 'Lavar o carro previne corrosão e mantém o valor. Aspira o interior semanalmente.', icone: 'water' },
        { id: '9', titulo: 'Verifica todos os fluidos', descricao: 'Óleo, travão, direcção e arrefecimento devem estar nos níveis correctos.', icone: 'beaker' },
        { id: '10', titulo: 'Faz rodízio dos pneus', descricao: 'A cada 10.000 km, troca a posição dos pneus para desgaste uniforme.', icone: 'refresh' },
        { id: '11', titulo: 'Conduz economicamente', descricao: 'Acelera suavemente, mantém velocidade constante e evita travagens bruscas.', icone: 'leaf' },
        { id: '12', titulo: 'Alinha e balanceia', descricao: 'Direcção a puxar para um lado? Faz alinhamento e balanceamento urgentemente.', icone: 'compass' },
        { id: '13', titulo: 'Troca velas na revisão', descricao: 'Velas gastas causam falhas de ignição e aumentam consumo de combustível.', icone: 'flash' },
        { id: '14', titulo: 'Cuidado com a suspensão', descricao: 'Barulhos ou trepidações indicam problemas na suspensão. Não ignores.', icone: 'car' },
        { id: '15', titulo: 'Usa sempre o cinto', descricao: 'Cinto salva vidas. Usa em todos os assentos, mesmo em trajectos curtos.', icone: 'shield-checkmark' },
        { id: '16', titulo: 'Verifica todas as luzes', descricao: 'Faróis, lanternas e setas devem funcionar. Testa diariamente.', icone: 'bulb' },
        { id: '17', titulo: 'Não sobrecarregues o carro', descricao: 'Respeita a capacidade máxima de carga. Peso excessivo danifica suspensão.', icone: 'scale' },
        { id: '18', titulo: 'Mantém o ar-condicionado', descricao: 'Limpa filtros e recarrega gás anualmente. Ar-condicionado consome bateria.', icone: 'snow' },
        { id: '19', titulo: 'Inspecciona correias e mangueiras', descricao: 'Rachaduras ou desgaste indicam necessidade de troca imediata.', icone: 'construct' },
        { id: '20', titulo: 'Abastece em postos confiáveis', descricao: 'Combustível sujo danifica o motor. Evita postos suspeitos.', icone: 'star' },
        { id: '21', titulo: 'Mantém vidros e para-brisas limpos', descricao: 'Visibilidade é segurança. Limpa diariamente, especialmente na chuva.', icone: 'eye' },
        { id: '22', titulo: 'Ouve o escape', descricao: 'Ruídos altos ou fumo excessivo indicam problemas no escape.', icone: 'cloud' },
        { id: '23', titulo: 'Verifica nível da água do radiador', descricao: 'Antes de viagens longas, vê o nível da água do sistema de arrefecimento.', icone: 'thermometer' },
        { id: '24', titulo: 'Tem extintor e kit de primeiros socorros', descricao: 'Emergências acontecem. Está preparado com equipamentos básicos.', icone: 'medical' },
        { id: '25', titulo: 'Usa farol baixo durante o dia', descricao: 'Em estradas e túneis, farol baixo aumenta visibilidade e evita multas.', icone: 'sunny' },
        { id: '26', titulo: 'Testa o travão de mão', descricao: 'Estaciona em ladeira e testa se segura o carro. Ajusta se necessário.', icone: 'hand-left' },
        { id: '27', titulo: 'Mantém estepe e ferramentas', descricao: 'Verifica se o estepe está calibrado e ferramentas estão no porta-bagagens.', icone: 'build' },
        { id: '28', titulo: 'Faz pausas em viagens longas', descricao: 'Conduzir cansado é perigoso. Para a cada 2-3 horas para descansar.', icone: 'bed' },
        { id: '29', titulo: 'Não uses telemóvel ao volante', descricao: 'Multas caras e acidentes graves. Para o carro para atender chamadas.', icone: 'phone-portrait' },
        { id: '30', titulo: 'Mantém documentação em dia', descricao: 'Carta de condução, livrete e seguro sempre no carro. Renova antes de vencer.', icone: 'document' },
    ];

    const renderDica = ({ item }: any) => (
        <View style={dicasStyles.dicaCard}>
            <View style={dicasStyles.dicaHeader}>
                <Ionicons name={item.icone as any} size={24} color="#0098A9" />
                <Text style={dicasStyles.dicaTitulo}>{item.titulo}</Text>
            </View>
            <Text style={dicasStyles.dicaDescricao}>{item.descricao}</Text>
        </View>
    );

    return (
        <View style={dicasStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <View style={dicasStyles.header}>
                <TouchableOpacity style={dicasStyles.backButton} onPress={voltar}>
                    <Ionicons name="arrow-back" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={dicasStyles.titleContainer}>
                <Text style={dicasStyles.title}>Dicas automotivas</Text>
            </View>

            <FlatList
                data={dicas}
                keyExtractor={(item) => item.id}
                renderItem={renderDica}
                contentContainerStyle={dicasStyles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
