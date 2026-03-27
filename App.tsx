import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

import { MainPage } from './src/srcreens/mainPage/mainPage';
import { Header } from './src/utils/header/header';
import { Footer } from './src/utils/footer/footer';
import { History } from './src/srcreens/historico/history';
import { Dashboard } from './src/srcreens/Dashboard/dashboard';
import { Chat } from './src/srcreens/chat/chat';
import { Settings } from './src/srcreens/definicoes/setting';
import { Login } from './src/srcreens/lofgin/login';
import { SignUp } from './src/srcreens/SignUp/signUp';

/*export default  function App(){
  return (<Settings/>);
}*/


export interface Sair {
  logout: () => void;
}

export const LogOut = createContext<Sair>({
  logout: () => {},
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Navegador de abas para a parte principal do aplicativo
function AppTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <Footer {...props} />}
      screenOptions={{
        header: () => <Header />,
        tabBarStyle: { height: 80 },
      }}>
      <Tab.Screen name="Home" component={MainPage} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LogOut.Provider value={{ logout }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <Stack.Screen name="AppTabs" component={AppTabs} />
          ) : (
            <>
              <Stack.Screen name="Login">
                {(props: StackScreenProps<any>) => <Login {...props} onLoginSuccess={() => setIsLoggedIn(true)} />}
              </Stack.Screen>
              <Stack.Screen name="SignUp">
                {(props: StackScreenProps<any>) => <SignUp {...props} />}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LogOut.Provider>
  );
}
