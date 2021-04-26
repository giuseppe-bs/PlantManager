//installed libraries imports
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

//componnents imports
import { Header } from '../components/Header'
import { EnvironmentButton } from '../components/EnvironmentButton'
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load';
import { PlantProps } from '../libs/storage';

//other imports
import api from '../services/api'
import Style from '../styles/PlantSelect'
import colors from '../styles/colors'

//interfaces declarations
interface EnvironmentProps{
    key: string;
    title: string;
}

/*
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
}*/

export function PlantSelect(){
    const[environments, setEnvironments] = useState<EnvironmentProps[]>([])
    const[plants, setPlants] = useState<PlantProps[]>([])
    const[filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
    const[environmentSelected, setEnvironmentSelected] = useState('all')
    const [loading, setLoading] = useState(true)

    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)

    const navigation = useNavigation()

    function handleEnvironmentSelected(environment: string){
        setEnvironmentSelected(environment)
   
        if(environment === 'all')
            return setFilteredPlants(plants)
        
        const filtered = plants.filter(plant =>  plant.environments.includes(environment))
    
        setFilteredPlants(filtered)
    }

    /*
    //previous data fetching method
    useEffect(()=>{
        async function fetchPlants() {
            const{ data } = await api.get('plants?_sort=name&_order=asc')
            setPlants(data)
        }

        fetchPlants();
    },[])*/

    async function fetchPlants(){
        const { data } = await api
        .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);        

        if(!data)
            return setLoading(true);

        if(page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        }else {
            setPlants(data);
            setFilteredPlants(data);
        }
        
        setLoading(false);
        setLoadingMore(false);
    }

    function handleFetchMore(distance: number) {
        if(distance < 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', { plant });
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

    useEffect(() => {        
        fetchPlants();
    },[])

    if(loading)
        return(
            <Load/>
        )

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
                    keyExtractor={(item) => String(item.key)}
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
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item })=>(
                        <PlantCardPrimary 
                            data={item}
                            onPress={() => handlePlantSelect(item)}
                        />
                    )}
                    showsVerticalScrollIndicator = {false}
                    numColumns={2}
                    contentContainerStyle={Style.plantsList}
                    onEndReachedThreshold={0.1}                          
                    onEndReached={({ distanceFromEnd }) => 
                        handleFetchMore(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore 
                        ? <ActivityIndicator color={colors.green} />
                        : <></>
                    }
                />
            </View>
        </View>
    )
}