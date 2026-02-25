import { Text, View, StatusBar, ScrollView } from "react-native";

export function Chat() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#022B30' }} >
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>           
                <Text style={{fontSize: 20, color: 'white'}}>Tela de Chat</Text>
            </ScrollView>
        </View>
    )
}
