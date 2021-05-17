import MQTT from 'sp-react-native-mqtt';

const createMQTTInstance = () =>
  MQTT.createClient({
    uri: 'mqtt://test.mosquitto.org:1883',
    clientId: 'your_client_id',
  })
    .then(client => {
      client.connect();
    })
    .catch(err => alert('error' + err));

export default createMQTTInstance;
