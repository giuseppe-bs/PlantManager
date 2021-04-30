//import react, react-native and other external libs components
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

//import project components
import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';

//import project colors for styling
import colors from '../styles/colors';

//creates a botton tab for
const AppTab = createBottomTabNavigator();

//each authRoutes screens refer to a screen acessible through the bottom tab
const AuthRoutes = () => {
    return(
        //this refers to the bottom tab redered component
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88
                },
            }}>
                {/* button referent to the PlantSlect Screen*/}
                <AppTab.Screen
                    name="Nova Planta"
                    component={PlantSelect}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="add-circle-outline"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />
                {/* button referent to the myPlants Screen*/}
                <AppTab.Screen
                    name="Minhas Plantas"
                    //ataches the myPlants page to the button on the tab
                    component={MyPlants}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="format-list-bulleted"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />
        </AppTab.Navigator>
    )
}
/* export the bottom tab with the routes with the capabilitie 
 * to switch from myplants and the plantSelector
 */
export default AuthRoutes;