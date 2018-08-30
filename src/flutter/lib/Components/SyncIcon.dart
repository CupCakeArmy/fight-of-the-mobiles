import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';

class SyncIcon extends StatefulWidget {
  _SyncIcon createState() => _SyncIcon();
}

class _SyncIcon extends State<SyncIcon> with SingleTickerProviderStateMixin {
  Animation<double> animation;
  AnimationController controller;

  initState() {
    super.initState();
    controller = AnimationController(
        duration: const Duration(milliseconds: 2000), vsync: this);
    animation = Tween(begin: 0.0, end: pi * 2).animate(controller);
    animation.addListener(() => setState(() {}));
    controller.repeat();
  }

  Widget build(BuildContext context) {
    return Transform.rotate(
        angle: animation.value,
        child: Container(
          margin: EdgeInsets.symmetric(vertical: 10.0),
          height: 32.0,
          width: 32.0,
          child: Image.asset('images/sync.png'),
        ));
  }

  dispose() {
    controller.dispose();
    super.dispose();
  }
}
