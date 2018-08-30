import 'dart:async';

import 'package:flutter/material.dart';
import 'package:qr_reader/qr_reader.dart';

void main() {
  runApp(MaterialApp(
    home: MyHomePage(),
  ));
}

class MyHomePage extends StatefulWidget {
  @override
  createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Future<String> _barcodeString;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
          child: FutureBuilder<String>(
              future: _barcodeString,
              builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
                return Text(snapshot.data != null ? snapshot.data : '');
              })),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            _barcodeString = QRCodeReader()
                .setAutoFocusIntervalInMs(200)
                .setForceAutoFocus(true)
                .setTorchEnabled(false)
                .setHandlePermissions(true)
                .setExecuteAfterPermissionGranted(true)
                .scan();
          });
        },
        tooltip: 'Reader the QRCode',
        child: Icon(Icons.add_a_photo),
      ),
    );
  }
}
