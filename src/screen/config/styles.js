import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerHeader: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    paddingRight: '8%',
  },
  containerHeaderIcon: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 32,
    color: '#242528',
  },
  notificationContainer: {
    flex: 0.7,
  },
  notification: {
    flex: 0.1,
    flexDirection: 'row',
    marginVertical: '3%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.2,
  },
  notificationText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#242528',
  },
});

export default styles;
