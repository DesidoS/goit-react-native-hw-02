import React from "react";
import { View, Text, Image, FlatList } from "react-native";

export const Post = ({ route }) => {
  // const photo = route?.params?.photo;
  // const [posts, setPosts] = React.useState([]);

  // React.useEffect(() => {
  //   if (!route.params) return;
  //   setPosts((prevState) => [...prevState, route.params]);
  // }, [route.params]);

  return (
    <View>
      <Text>Post</Text>

      {/* <FlatList
        data={posts}
        keyExtractor={(_, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              // justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ height: 400, width: "90%" }}
            />
          </View>
        )}
      /> */}
    </View>
  );
};
