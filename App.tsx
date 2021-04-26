/**
 * author: Giuseppe Baruffaldi Scassiott
 * gitHub:https://github.com/minipepsi-trueversion
 * linkedn:https://www.linkedin.com/in/giuseppebs/ 
 *  
 * project repository:https://github.com/minipepsi-trueversion/PlantManager
 * 
 * description:
 * this is a project developed in the Next level Week 5th edition, a Rocketseat event, 
 * within the mobile react native trail. The project consists of a plant manager app, with
 * the intention to help anyone that wants to take care of plants, providing information
 * and tools, making it an easier and more enjoyable task.
 */

import React from 'react';
import AppLoading from 'expo-app-loading'

import Routes from "./src/routes/index";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

export default function App(){
  const [ isFontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!isFontsLoaded)
    return(
      <AppLoading/>
    )

  return(
    <Routes/>
  )
}