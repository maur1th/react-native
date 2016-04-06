import React, { Component, Text, StyleSheet } from 'react-native'

export default class Weekdays extends Component {
  render() {
    return (
      <Text style={styles.day}>
        {this.props.day}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});
