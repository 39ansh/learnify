import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../Context/AuthContext.js';
import { useEffect, useState } from 'react';
import Services from '../Shared/Services.js';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './../Navigations/HomeNavigation';
import Login from './../Pages/Login';

export default function App() {

  const [userData,setUserData]=useState();
  useEffect(()=>{
    Services.getUserAuth().then(resp=>{
      console.log(resp); 
      if(resp)
      {
        setUserData(resp)
      }
      else{
        setUserData(null)
      }
    })
  },[]) 
  return (
    <View style={styles.container}>
      <AuthContext.Provider 
      value={{userData,setUserData}}>
      {userData?
      <NavigationContainer>
          <HomeNavigation/>
      </NavigationContainer>
      :<Login/>}
      
      </AuthContext.Provider>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F8FC',
  },
});
