import 'package:flutter/material.dart';

import 'Screens/Home.dart';
import 'Screens/Scan.dart';
import 'Screens/Success.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) => MaterialApp(
          routes: {
            '/': (context) => Home(),
            '/scan': (context) => Scan(),
          },
          onGenerateRoute: (routeSettings) {
            var path = routeSettings.name.split('/');
            final number = path.length > 1 ? int.parse(path[2]) : null;

            return MaterialPageRoute(
              builder: (context) => Success(result: number),
              settings: routeSettings,
            );
          });
}
