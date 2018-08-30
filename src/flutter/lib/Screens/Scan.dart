import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:barcode_scan/barcode_scan.dart';

import '../Components/BG.dart';
import '../Components/SyncIcon.dart';

class Scan extends StatelessWidget {
  Future scan() async {
    try {
      String barcode = await BarcodeScanner.scan();
      print('Success');
      print(barcode);
      Navigator.pushNamed(null, '/home');
    } on PlatformException catch (e) {
      if (e.code == BarcodeScanner.CameraAccessDenied)
        print('The user did not grant the camera permission!');
    } catch (e) {
      print('Nope');
      print(e);
    }
  }

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
          SyncIcon()
        ],
      )));
}
