import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';

import '../Components/BG.dart';
import '../Components/Button.dart';

class Success extends StatelessWidget {
  final int result;

  Success({@required this.result}) {
    final initializationSettings = InitializationSettings(
        AndroidInitializationSettings('app_icon'), IOSInitializationSettings());
    final flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin()
      ..initialize(initializationSettings);

    flutterLocalNotificationsPlugin.show(
      this.result,
      '🚀 Scan succeded!',
      'Your super sercret code is: $result',
      NotificationDetails(
          AndroidNotificationDetails('your channel id', 'your channel name',
              'your channel description',
              importance: Importance.Max, priority: Priority.High),
          IOSNotificationDetails()),
    );
  }

  @override
  Widget build(BuildContext context) => BG(
          child: Center(
              child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Padding(
            padding: EdgeInsets.only(top: 150.0, bottom: 100.0),
            child: Button(
              text: 'Back',
              callback: () =>
                  Navigator.popUntil(context, ModalRoute.withName('/')),
            ),
          ),
          Text(
            'Success',
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          Container(
            margin: EdgeInsets.symmetric(vertical: 10.0),
            height: 32.0,
            width: 32.0,
            child: Image.asset('images/check.png'),
          )
        ],
      )));
}
