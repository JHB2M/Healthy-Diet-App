import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import Button from '../../button/Button';
import DatePicker from 'react-native-date-picker';
import FlashMessage from 'react-native-flash-message'
import {showMessage} from 'react-native-flash-message'
import Styles from '../../../styles/styles';
export default function TimePickerModal({
  visible, // modal
  onClose, // modal
  open,
  handleTimerConfirm,
  date,
}) {
  

  /*
   <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleTimerConfirm}
        onCancel={() => {
          setOpen(false);
        }}
      />
  */
      console.log(date)
  return (
    <Modal
      backdropOpacity={0.3}
      style={styles.modal}
      swipeDirection="down"
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <DatePicker
          open={visible}
          date={date}
          onConfirm={handleTimerConfirm}
          onCancel={onClose}
        />
        <View style={styles.saveArea}>
          <Button theme="first" text="Save" onPress={handleTimerConfirm} />
        </View>
      </View>
     
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: 'white',
    height: 300,
  },
  modal: {},
  saveArea: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
