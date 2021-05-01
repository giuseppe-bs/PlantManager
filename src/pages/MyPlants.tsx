//react and react native imports
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Alert
} from 'react-native';

//external components imports
import { pt } from 'date-fns/locale';
import { formatDistance } from 'date-fns';

//internal components imports
import { Header } from '../components/Header';
import { PlantProps, loadPlant, removePlant } from '../libs/storage';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { Load } from '../components/Load';

//visual options of the projects
import waterdrop from '../assets/waterdrop.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

/**
 * Page with the list of the plants the user setted as theirs 
 * used to also manage the plants
 * @returns this page element
 */
export function MyPlants() {
    //states declarations
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);    
    const [nextWaterd, setNextWatered] = useState<string>();

    /**
     * this handler function removes the plant from the myplants list
     * @param plantprops
     */
    function handleRemove(plant: PlantProps) {
        //pop-ups a alert when the button is pressed
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`,[
            {
                text: 'Não 🙏🏼',
                style: 'cancel'
            },
            {
                text: 'Sim 🥲',
                //removes the plant from the storage
                onPress: async () => {
                    try {
                        //remove plant from storage
                        await removePlant(plant.id);
                        //updates the myplants state by removing the plant
                        setMyPlants((oldData) => 
                            oldData.filter((item) => item.id !== plant.id)
                        );                        
                    } catch (error) {
                        Alert.alert('Não foi possível remover! 🥲');
                    }
                }
            }
        ])
        
    }

    useEffect(() => {
        /**
         * calls the loading script and sets the next plant that must be watered
         * @param void
         * @returns void
         */
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();

            //gets and formats the date time for the next watering
            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            );

            //sets the date time
            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
            ) 
            
            //copy the storaged plants to the variable
            setMyPlants(plantsStoraged);
            //finished loading
            setLoading(false);
        }

        //calls the loading function
        loadStorageData();
    },[])

    //if loading shows the loading screen animation
    if(loading)
        return <Load />

    return (
        <View style={styles.container}>
            <Header/>

            <View style={styles.spotlight}>
                <Image 
                    source={waterdrop}
                    style={styles.spotlightImage}
                />
                <Text style={styles.spotlightText}>
                    {nextWaterd}
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList 
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                       <PlantCardSecondary 
                            data={item} 
                            handleRemove={() => {handleRemove(item)}}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
    
}

//sets this pages styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {
     backgroundColor: colors.blue_light,
     paddingHorizontal: 20,
     borderRadius: 20,
     height: 110,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center'
    },
    spotlightImage: {
        width: 60,
        height: 60
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    }
});