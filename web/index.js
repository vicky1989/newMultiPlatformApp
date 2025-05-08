import { AppRegistry } from 'react-native';
import App from '../App.web'; // assuming App.tsx
import { name as appName } from '../app.json'; // or use 'main' if you want to avoid app.json

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
