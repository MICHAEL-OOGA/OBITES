import { images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const totalItems = 10;
  return (
    <TouchableOpacity className="cart-btn" onPress={() => {}}>
      <Image className="size-5 " resizeMode="contain" source={images.bag} />
      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white ">{totalItems} </Text>
        </View>
      )}
      cart-badge
    </TouchableOpacity>
  );
};

export default CartButton;
