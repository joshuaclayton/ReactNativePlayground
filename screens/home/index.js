import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import * as actionCreators from "./actions";
import { HOME_REDUCER_NAME } from "./reducer";
import PropTypes from "prop-types";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const { count } = params || {};
    return {
      title: "Welcome: " + count
    };
  };

  componentDidMount() {
    actionCreators.setNavigationStateFromProps(
      this.props.navigation,
      this.props
    );
  }

  render() {
    const { doSomething, navigation, foo } = this.props;

    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>{foo}</Text>
        <Button title="Up" onPress={() => doSomething(navigation)} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  doSomething: PropTypes.func.isRequired,
  foo: PropTypes.number,
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return state[HOME_REDUCER_NAME];
};

export default connect(mapStateToProps, actionCreators)(HomeScreen);
