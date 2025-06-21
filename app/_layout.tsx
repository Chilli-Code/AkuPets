

import { Stack } from 'expo-router';

export default function Layout() {
  const isAuthenticated = false;

  return (
    <Stack
      screenOptions={{
        headerShown: false, // Aplica esto globalmente
      }}
    >
      {!isAuthenticated ? (
        <Stack.Screen name="login" />
      ) : (
        <>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="screens/food" />
        </>
      )}
    </Stack>
  );
}


// import { Stack } from 'expo-router';

// export default function Layout() {
//   const isAuthenticated = true;

//   return (
//     <Stack>
//       {!isAuthenticated ? (
//         <Stack.Screen name="login" options={{ headerShown: false }} />
//       ) : (
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       )}
//     </Stack>
//   );
// }
