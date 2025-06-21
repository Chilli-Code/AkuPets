// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform, View } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconEstadia, IconHome, IconPaseo, IconTienda, IconVeterinaria } from '@/components/icons';

// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

// const tabBarIconWithUnderline = (IconComponent: any) => ({
//   tabBarIcon: ({ color, focused }: any) => (
//     <View style={{ alignItems: 'center' }}>
//       <IconComponent color={color} size={24} />
//       {focused && (
//         <View
//           style={{
//             height: 2,
//             width: 30,
//             backgroundColor: '#3B82F6',
//             marginTop: 4,
//             borderRadius: 2,
//           }}
//         />
//       )}
//     </View>
//   ),
// });


//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "#000",
//         // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,

//         tabBarShowLabel: true, // mantenemos esto activo
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             position: 'absolute',
//             height: 75,
//             borderTopWidth: 0,
//             backgroundColor: 'rgba(255,255,255,0.9)',
//           },
//           android: {
//             height: 75,
//             backgroundColor: '#fff',
//             elevation: 5,
//             borderTopWidth: 0,
//           },
//         }),
//       }}
//     >

// <Tabs.Screen
//   name="tienda"
//   options={{
//     title: 'Tienda',
//     ...tabBarIconWithUnderline(IconTienda),
//   }}
// />

// <Tabs.Screen
//   name="veterinarias"
//   options={{
//     title: 'Veterinarias',
//     ...tabBarIconWithUnderline(IconVeterinaria),
//   }}
// />

// <Tabs.Screen
//   name="index"
//   options={{
//     title: 'Inicio',
//     ...tabBarIconWithUnderline(IconHome),
//   }}
// />

// <Tabs.Screen
//   name="paseos"
//   options={{
//     title: 'Paseos',
//     ...tabBarIconWithUnderline(IconPaseo),
//   }}
// />

// <Tabs.Screen
//   name="estadias"
//   options={{
//     title: 'Estadias',
//     ...tabBarIconWithUnderline(IconEstadia),
//   }}
// />
//     </Tabs>
//   );
// }



import { HapticTab } from '@/components/HapticTab';
import {
  IconEstadia,
  IconHome,
  IconPaseo,
  IconTienda,
  IconVeterinaria,
} from '@/components/icons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Tabs } from 'expo-router';
import React from 'react';
import {
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return null;

  // Establecer fuente global
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = [{ fontFamily: 'Roboto_400Regular' }];

  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.style = [{ fontFamily: 'Roboto_400Regular' }];

  const tabBarIconWithUnderline = (IconComponent: any) => ({
    tabBarIcon: ({ color, focused }: any) => (
      <View style={{ alignItems: 'center' }}>
        <IconComponent color={color} size={24} />
        {focused && (
          <View
            style={{
              height: 2,
              width: 30,
              backgroundColor: '#3B82F6',
              marginTop: 4,
              borderRadius: 2,
            }}
          />
        )}
      </View>
    ),
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            height: 75,
            borderTopWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.9)',
          },
          android: {
            height: 55,
            backgroundColor: '#fff',
            elevation: 5,
            borderTopWidth: 0,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="tienda"
        options={{
          title: 'Tienda',
          ...tabBarIconWithUnderline(IconTienda),
        }}
      />
      <Tabs.Screen
        name="veterinarias"
        options={{
          title: 'Veterinarias',
          ...tabBarIconWithUnderline(IconVeterinaria),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          ...tabBarIconWithUnderline(IconHome),
        }}
      />
      <Tabs.Screen
        name="paseos"
        options={{
          title: 'Paseos',
          ...tabBarIconWithUnderline(IconPaseo),
        }}
      />
      <Tabs.Screen
        name="estadias"
        options={{
          title: 'Estadias',
          ...tabBarIconWithUnderline(IconEstadia),
        }}
      />
    </Tabs>
  );
}

