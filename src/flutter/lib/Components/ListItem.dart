import 'package:flutter/material.dart';

class ListItem extends StatelessWidget {
  ListItem({this.left, this.right});

  final int left;
  final String right;

  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        Container(
            margin: const EdgeInsets.only(right: 4.0),
            child: Text('${left.toString()}.',
                style: TextStyle(fontWeight: FontWeight.bold))),
        Text(right, style: TextStyle())
      ],
    );
  }
}
