import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Image, HStack,Pressable } from '@gluestack-ui/themed';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from "@react-navigation/native";

const Slider = ({ items })=> {
  const { navigate } = useNavigation();
  const _renderItem = ({ item }) => {
    return (
      <Box height={450} padding={0} marginTop={30}>
    
        <HStack justifyContent="center">
        <Pressable
                    onPress={() => navigate('Concert', items)}
                >
          <Image style={styles.image} source={{ uri: item.image }} />
        </Pressable>
        </HStack>
        
      </Box>
    );
  };

  return (
    <Carousel
      layout={'default'}
      data={items}
      sliderWidth={400}
      itemWidth={300}
      sliderHeight={400}
      renderItem={_renderItem}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
    marginTop: 20,
    borderRadius: 20,
  },
});

export default Slider;