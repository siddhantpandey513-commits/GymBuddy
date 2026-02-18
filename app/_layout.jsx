// import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
// import { useEffect } from "react";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
