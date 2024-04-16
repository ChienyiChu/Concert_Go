import React from 'react';
import { View } from 'react-native';
import { Box, Text, Image, Center, ScrollView } from "@gluestack-ui/themed";
import concertData from '../json/concerts.json';

const HomeItem = () => {
    
    return (
        <Center marginTop={20} marginBottom={20}>
               <Text fontSize={25} fontWeight={600} marginBottom={20}>More Service</Text>
               <Box width={325} height={200} borderRadius={15} marginBottom={30} >
               <Image width={325} height={200} borderRadius={15} 
                      source={{ uri: "https://github.com/Hsieh-Lemon/App_concert_go/blob/master/src/img/concert_svt.jpg?raw=true" }}
               />
               </Box>
               <Image width={325} height={200} borderRadius={15}  marginBottom={30}
                      source={{ uri: "https://github.com/Hsieh-Lemon/App_concert_go/blob/master/src/img/phone_s23_2.jpg?raw=true" }}
               />
                <Image width={325} height={200} borderRadius={15}  marginBottom={30}
                      source={{ uri: "https://github.com/Hsieh-Lemon/App_concert_go/blob/master/src/img/lightstick_njs.jpg?raw=true" }}
               />
          </Center>
    );
}

export default HomeItem;