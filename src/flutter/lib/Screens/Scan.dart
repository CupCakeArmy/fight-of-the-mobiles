import 'package:flutter/material.dart';
import 'package:qr_mobile_vision/qr_camera.dart';

import '../Components/BG.dart';
import '../Components/SyncIcon.dart';

class Scan extends StatelessWidget {
  @override
  Widget build(BuildContext context) => BG(
          child: Center(
              child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Text(
            'Scanning...',
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          SyncIcon(),
          SizedBox(
            width: 280.0,
            height: 280.0,
            child: new QrCamera(
              qrCodeCallback: (code) {
                Navigator.pushNamed(context, '/success/$code');
              },
            ),
          )
        ],
      )));
}
