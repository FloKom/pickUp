import React, {Component} from 'react';
import {View} from 'react-native';
import Item from './Item';

class ItemsContainer extends Component {
  render() {
    return (
      <View style={styles.containterStyle}>
        <Item data={this.props.data} />
      </View>
    );
  }
}

const styles = {
  containterStyle: {
    flex: 3,
    width: 330,
  },
};

export default ItemsContainer;
