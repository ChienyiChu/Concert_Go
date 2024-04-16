import React from 'react';
import { SafeAreaView} from 'react-native';
import { Box, Text, Image, Center, ScrollView } from '@gluestack-ui/themed';
import Slider from '../components/Slider.js';
import carouselItems from '../json/concerts.json';
import Header from '../components/Header.js';
import HomeItem from '../components/HomeItem.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView backgroundColor="#FFFFFF">
        <Header/> 
        <ScrollView>
          <Box
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Slider items={carouselItems} />
          </Box>
          <HomeItem/>
        </ScrollView>   
      </SafeAreaView>
    );
  }
}