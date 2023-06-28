import React from 'react';
import {View, Button} from 'react-native';

import {showMessage, hideMessage} from 'react-native-flash-message';

export default function MyScreen() {
  return (
    /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
    showMessage({
      message: 'Simple message',
      type: 'info',
    })
  );
}
