import React, {
  Component,
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'
import DayItem from './src/day_item'

const DAYS = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday' ]

class Weekdays extends Component {
  renderDays() {
    return DAYS.map( day => <DayItem day={day} key={day} /> )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
        {this.renderDays()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('weekdays', () => Weekdays )
