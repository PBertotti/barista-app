import MQTT from 'sp-react-native-mqtt';

const createMQTTInstance = () =>
  MQTT.createClient({
    uri: 'mqtt://test.mosquitto.org:1883',
    clientId: 'your_client_id',
  })
    .then(client => {
      client.on('connect', () => alert('client'));

      client.on('error', err => alert('err'));

      client.on('closed', event => alert('event'));

      client.connect();
    })
    .catch(err => alert('error' + err));

export default createMQTTInstance;
