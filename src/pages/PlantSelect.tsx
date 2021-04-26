import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native';

import { Header } from '../components/Header'
import { EnvironmentButton } from '../components/EnvironmentButton'
import { PlantCardPrimary } from '../components/PlantCardPrimary';

import api from '../services/api'
import Style from '../../styles/PlantSelect'

interface EnvironmentProps{
    key: string;
    title: string;
}

interface PlantProps{
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency:{
        times:number;
        repeat_every: string;
    }
}

export function PlantSelect(){
    const[environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const[plants, setPlants] = useState<PlantProps[]>([]);
    const[filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const[environmentSelected, setEnvironmentSelected] = useState('all')

    function handleEnvironmentSelected(environment: string){
        setEnvironmentSelected(environment)
   
        if(environment === 'all')
            return setFilteredPlants(plants);
        
        const filtered = plants.filter(plant =>  plant.environments.includes(environment));
    
        setFilteredPlants(filtered)
    }

    useEffect(()=>{
        async function fetchEnvironment() {
            const{ data } = await api.get('plants_environments?_sort=title&_order=asc')
            setEnvironments([
            {
                key:'all',
                title:'Todos',
            },
            ...data])
        }

        fetchEnvironment();
    },[])

    useEffect(()=>{
        async function fetchPlants() {
            const{ data } = await api.get('plants?_sort=name&_order=asc')
            setPlants(data)
        }

        fetchPlants();
    },[])

    return(
        <View style={Style.container}> 
            <View style={Style.header}>           
                <Header/>

                <Text style={Style.title}>Em qual ambiente</Text>     
                <Text style={Style.subtitle}>você quer colocar sua planta?</Text>       
            </View>

            <View>
                <FlatList
                    data={environments}
                    renderItem={({item})=>(
                        <EnvironmentButton 
                            title={item.title}
                            active={item.key === environmentSelected}
                            onPress={() => handleEnvironmentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={Style.enviromentList}
                />
            </View>
            <View style={Style.plants}>
                <FlatList
                    data={filteredPlants}
                    renderItem={({ item })=>(
                        <PlantCardPrimary data={item}/>
                    )}
                    showsVerticalScrollIndicator = {false}
                    numColumns={2}
                    contentContainerStyle={Style.plantsList}
                />
            </View>
        </View>
    )
}