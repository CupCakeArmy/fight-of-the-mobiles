import 'package:flutter/material.dart';

class Logo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(overflow: Overflow.visible, children: <Widget>[
      Text(
        "QR NOTIFICATOR",
        style: TextStyle(fontFamily: "Jaapokki", fontSize: 30.0),
      ),
      Positioned(
        right: -20.0,
        top: -5.0,
        child: Container(
            width: 20.0,
            height: 20.0,
            child: Center(
                child: Text('2', style: TextStyle(fontFamily: "Jaapokki"))),
            decoration: new BoxDecoration(
              color: Colors.orange,
              shape: BoxShape.circle,
            )),
      )
    ]);
  }
}
