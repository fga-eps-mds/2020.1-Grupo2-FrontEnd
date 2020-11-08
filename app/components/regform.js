import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, 
    StyleSheet, 
    Text, 
    View, 
    StatusBar as sBar, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import styles from './componentStyles'
import {CircleArrow, FacebookIcon, GoogleIcon} from './svgs';

export default function regform() {

  return (
    <View style={styles.containerRegform}>

      <View style={styles.circle4}/>
      <View style={styles.circle5}/>

      <Text style={styles.headerRegform}>Criar Conta</Text>
      
      <TextInput style={styles.textinputRegform} placeholder='Nome:'
      underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinputRegform} placeholder='Seu e-mail:'
      securyTextEntry={true} underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinputRegform} placeholder='Senha:'
      underlineColorAndroid={'transparent'}/>

      <View style={styles.direction}>
        <Text style={styles.midTxt}>Cadastro</Text>

        <TouchableOpacity style={styles.midBtn}>
                        
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnFbGoogleRegform}>
        <Text style={styles.txtBtnFbGoogleRegform}>Fazer login com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnFbGoogleRegform}>
        <Text style={styles.txtBtnFbGoogleRegform}>Fazer login com o Google</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.txtBtnOthersRegform}>Login</Text>
      </TouchableOpacity>
          
      <StatusBar style="auto" />
      
    </View>
  );
}
