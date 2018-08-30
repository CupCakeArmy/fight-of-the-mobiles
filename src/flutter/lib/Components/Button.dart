import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  Button({@required this.text, @required this.callback});

  final String text;
  final Function callback;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onTap: this.callback,
        child: Container(
            width: 180.0,
            height: 45.0,
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(100.0),
                border: Border.all(width: 1.0, color: const Color(0xFF000000))),
            child: Center(
                child: Text(
              text,
              style: TextStyle(fontSize: 20.0),
            ))));
  }
}
