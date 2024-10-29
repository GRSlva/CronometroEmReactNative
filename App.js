import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Image, View, TouchableOpacity } from 'react-native';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

export default function App() {
  let cronometro = "./assets/cronometro.png"
  let cacarola = "./assets/cacarola.jpg";

  let [time, settime] = useState(0);
  let [timer, settimer] = useState(0.0);
  let [title, settitle] = useState('Start');
  let [img, setImg] = useState(require(cronometro));
  let [buttonOpacity, setButtonOpacity] = useState(0)


  function action(){

    if (title == 'Start'){
      let counter = timer;
      settime( setInterval(() => {
        counter += .1;
        settimer(counter)
        if (counter >= 10){
          setImg(require(cacarola));
        }else{
          setImg(require(cronometro));
        }
      }, 100))
      settitle('Stop');
      setButtonOpacity(0);
    }else{
      clearInterval(time);
      settime(0);
      setImg(require(cronometro));
      settitle('Start');
      setButtonOpacity(1);
    }
  }

function clear(){
  settimer(0.0)
  setImg(require(cronometro));
}

  return (
    <View style={styles.container}>

      <Image source={img}></Image>
      <Text style={styles.timer}>{timer.toFixed(1)}</Text>

      <View style={styles.buttonArea}>
        <View style={{padding:12}}>
          <TouchableOpacity style={styles.btn} onPress={action}>
              <Text style={styles.btnText}>{title}</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding:12, opacity:buttonOpacity}}>
          <TouchableOpacity style={styles.btn} onPress={clear}>
              <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    color: '#fff',
    fontSize:32,
    marginTop: -140,
  },
  buttonArea:{
    flexDirection:'column',
    marginTop:140,
    padding: 12,
  },
  btn:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 64,
    width: 128,
    borderRadius: 9,
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
});
