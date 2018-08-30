import 'package:flutter/material.dart';

import '../Components/BG.dart';
import '../Components/Button.dart';
import '../Components/ListItem.dart';
import '../Components/Logo.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BG(
        child: Center(
            child: Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        Padding(padding: EdgeInsets.only(bottom: 80.0), child: Logo()),
        Button(
          callback: () {
            Navigator.pushNamed(context, '/scan');
            // Navigator.pushNamed(context, '/success/1');
          },
          text: "Scan",
        ),
        Padding(
            padding: const EdgeInsets.only(top: 100.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                ListItem(left: 1, right: 'Open Camera.'),
                ListItem(left: 2, right: 'Scan QR code.'),
                ListItem(left: 2, right: 'Get notified.'),
              ],
            ))
      ],
    )));
  }
}
