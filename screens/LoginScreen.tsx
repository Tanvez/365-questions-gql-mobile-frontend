import * as React from 'react';
import { Image, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import Button from '../components/Button';
import FormTextInput from '../components/FormTextInput';
import colors from '../config/colors';
import strings from '../config/strings';

import imageLogo from '../assets/fillmurray400x300.jpg';

interface State {
  email: string;
  password: string;
}

export default class LoginScreen extends React.Component<{}, State> {
  readonly state: State = {
    email: '',
    password: '',
  };

  handleEmailChange = (email: string) => {
    this.setState({ email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password });
  };

  handleLoginPress = () => {
    // TODO send to login and write to localhost storate token/cookies
    console.log('login button pressed');
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
          <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
});
