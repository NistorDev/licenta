/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import LoginScreen from "./src/screens/splash/index


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/splash/index';
import LogScr from "./src/screens/logScr/index";
import SignUp from "./src/screens/signup/index";
import MainScr from './src/screens/mainscr';
import ReactTest from './src/screens/test/index';
// import Nom_Meniu from './assets/components/meniu';
import Nom_Meniu from './src/screens/mesesrc';
import MeniuScr from './src/screens/meniusrc/index'

// import Splash from './src/screens/splash/index';
// import { createStackNavigator } from '@react-navigation/stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const stack = createNativeStackNavigator();
// const stack1 = createStackNavigator();


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <stack.Navigator>
        
        <stack.Screen 
        name={'Splash'} 
        component={Splash} 
        options={{headerShown: false}}/>

      <stack.Screen 
        name={'LogScr'} 
        component={LogScr} 
        options={{headerShown: false}}/>

      <stack.Screen 
        name={'SignUp'} 
        component={SignUp} 
        options={{headerShown: false}}/>

      <stack.Screen 
        name={'MainScr'} 
        component={MainScr} 
        options={{headerShown: false}}/>

      <stack.Screen 
        name={'ReactTest'} 
        component={ReactTest} 
        options={{headerShown: false}}/> 

        <stack.Screen 
        name={'Nom_Meniu'} 
        component={Nom_Meniu} 
        options={{headerShown: false}}/>  

<stack.Screen 
        name={'MeniuScr'} 
        component={MeniuScr} 
        options={{headerShown: false}}/> 

      </stack.Navigator>
    </NavigationContainer>

    
    // <LoginScreen/>

  );
}


// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={styles.sectionContainer}>
//       <ScrollView style={styles.sectionContainer}>
//         <Text>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//         <View>
//           <Text>
//             cortana
//           </Text>
//         </View>

//         <View>
//           <Text>text cortana doi</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
 
//   );
// }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
// export default App;
