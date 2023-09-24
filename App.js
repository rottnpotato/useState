import React from 'react';
import { View, Button, Text, Image } from 'react-native';
import {logic} from './src/logic.js';
const App = () => {
  let {light,buttonCounter,toggleImage,increment,decrement,toggleComponentVisibility,showFlashlight,showCount,buttonDisabled,showImage1,isToggled,count}=logic();
  return (
    <View style={{ flex: 1, alignItems: 'center', height:'100%' }}>
      <View style={{flexDirection:'row', marginTop:'40px',marginBottom:'80px', justifyContent:'space-evenly',width:'390px'}}>
        <Button title="Flashlight" onPress={light} disabled={buttonDisabled}/>
        <Button title="Counter" onPress={buttonCounter} disabled={buttonDisabled} />
      </View>
      <View style={{width:'390px', justifyContent:'center',alignItems:'center'}}>
      {showFlashlight && (
        <View style={{width:'320px'}}>
          <View style={{marginBottom:'80px'}}>
          {showImage1 ? (
          <Image
          source={ require('./off.png' )} 
            style={{ width: 320, height: 320, marginBottom:'50px' }}
          />
          ) : (
          <Image
          source={ require('./on.png' )} 
            style={{ width: 320, height: 320, marginBottom:'50px' }}
          />
          )}
          {isToggled ? (
            <Button title="Off" color={'red'} onPress={toggleImage} />
          ) : (
            <Button title="On" color={'#42C32E'} onPress={toggleImage} />
          )}
          </View>
        <Button
        title={showFlashlight ? 'Back' : 'Show Component'}
        onPress={toggleComponentVisibility}
        />
        </View>
      )}

      {showCount && (
        <View style={{width:'320px'}}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{ fontSize: 200,fontWeight:'bold'}}>{count}</Text>
          </View>
          {<View style={{ flexDirection:'row', justifyContent:'space-evenly',marginTop:'60px'}}> 
            <Button title="+1" color={'#42C32E'} onPress={increment} />
            <Button title="-1" color={'#42C32E'} onPress={decrement} />
          </View>}
        <View style={{width:'320px', marginTop:'125px'}}>
        <Button
              title={showCount ? 'Back':''}
              onPress={toggleComponentVisibility}
            />
        </View>
      </View>
      )}
      </View>
    </View>
  );
};
export default App;

