import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default function Signup({ setPage }) {
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior='padding'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Receta</Text>
            <TextInput
              placeholder='Username'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder='Email'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder='Password'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <TextInput
              placeholder='Confirm Password'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                Register
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 80,
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 15 }}>Have An Account? {` `}</Text>
              <TouchableOpacity onPress={() => setPage('login')}>
                <Text style={{ color: 'blue', fontSize: 15 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
