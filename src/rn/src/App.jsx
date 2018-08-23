import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { PushNotificationIOS } from 'react-native'
import * as PushNotification from 'react-native-push-notification'

import Home from './Screens/Home'
import Scan from './Screens/Scan'
import Success from './Screens/Success'

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification

    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  // senderID: "YOUR GCM (OR FCM) SENDER ID",

  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  popInitialNotification: true,
  requestPermissions: true,
})

const App = createStackNavigator({
  Home,
  Scan,
  Success
})

export default () => <App />