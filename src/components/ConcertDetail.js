import React from 'react';
import { View } from 'react-native';
import { Box, Text, Image, Center, ScrollView } from "@gluestack-ui/themed";
import concertData from '../json/concerts.json';

const ConcertDetail = () => {
    
    return (
        <ScrollView>
            <Box>
                {concertData.map((concert, index) => (
                    <Box key={index}>
                        <Center marginTop={30} marginBottom={20}>
                            <Text fontSize={25} fontWeight={600} marginLeft={25} marginRight={25}>{concert.name}</Text>
                        </Center>
                        <Center>
                            <Image
                                width={325}
                                height={200}
                                borderRadius={15}
                                source={{ uri: concert.image }}
                            />
                        </Center>
                        <Box margin={30}>
                            <Box style={{ backgroundColor: '#F197DF' }} borderRadius={15} marginBottom={15} padding={18}>  
                                <Text fontSize={20} paddingBottom={7}>{concert.time1}</Text>
                                <Text fontSize={20} paddingBottom={7}>{concert.time2}</Text>
                            </Box>
                            <Box style={{ backgroundColor: '#F8CE58' }} borderRadius={15} marginBottom={15} padding={18}> 
                                <Text fontSize={20} paddingBottom={3}>Place：{concert.place}</Text>
                            </Box>
                            <Box style={{ backgroundColor: '#93A5E5' }} borderRadius={15} padding={18} marginBottom={15}>
                                <Text fontSize={20} paddingBottom={3}>Host：</Text>
                                <Text fontSize={20} paddingBottom={3}>{concert.host}</Text>
                            </Box>
                            <Box style={{ backgroundColor: '#459E94' }} borderRadius={15} padding={18}> 
                                <Text fontSize={20} paddingBottom={3} color={'white'}>Price：</Text>
                                <Text fontSize={20} paddingBottom={3} color={'white'}>{concert.price}</Text>
                                <Text fontSize={20} paddingBottom={3} color={'white'}>Ticket System：{concert.system}</Text>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </ScrollView>
    );
}

export default ConcertDetail;