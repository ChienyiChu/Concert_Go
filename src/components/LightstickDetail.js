import React from "react";
import { Box, HStack, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const LightstickDetail = ({ product }) => {
    const { navigate } = useNavigation();
    return (

        <VStack mx="$3">

            <Box my="$3">
                <Pressable
                    onPress={() => navigate('Detail', product)}
                >
                    <Image
                        width={200}
                        height={200}
                        borderRadius={20}
                        source={{ uri: product.image }}
                        alt="itemname"
                    />
                </Pressable>
            </Box>
            <VStack justifyContent="space-around" flexDirection="column" paddingLeft={12}>
                <Text bold>{product.itemname}</Text>
                <Text>{product.artist}</Text>
            </VStack>

        </VStack>


    )
};

export default LightstickDetail;
