import 'package:flutter/material.dart';

class BG extends StatelessWidget {
  BG({@required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: child,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF6FABFF), Color(0xFFE4FF71)],
          ),
        ),
      ),
    );
  }
}
