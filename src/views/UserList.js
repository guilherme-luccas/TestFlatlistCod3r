import React, { useContext, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import UsersContext from "../context/UsersContext";

export default (props) => {
  // function getUserItem({ item: user }) {

  //   return (
  //     <ListItem
  //       leftAvatar={{ source: { uri: user.avatarUrl } }}
  //       key={user.id}
  //       title={user.name}
  //       subtitle={user.email}
  //       bottomDivider
  //       onPress={() => props.navigation.navigate("UserForm")}
  //     />
  //   );
  // }
  const { state } = useContext(UsersContext);

  const [follow, setFollow] = useState(true);

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("UserForm", item)}
          >
            <View style={styles.listItem}>
              <Image style={styles.avatar} source={{ uri: item.avatarUrl }} />
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.email}</Text>
              </View>
              <View style={styles.buttonFollowContatiner}>
                <TouchableOpacity style={styles.buttonFollow}>
                  {!follow ? (
                    <Text style={styles.buttonText1}>Following</Text>
                  ) : (
                    <Text style={styles.buttonText0}>Follow</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "blue",
    fontSize: 25,
  },
  subtitle: {
    color: "grey",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    padding: 10,
  },
  avatar: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  buttonFollowContatiner: {
    flex: 1,
    alignItems: "flex-end",
  },
  buttonFollow: {
    width: 70,
    backgroundColor: "purple",
    borderRadius: 5,
  },
  buttonText1: {
    color: "white",
    textAlign: "center",
  },
  buttonText0: {
    color: "white",
    textAlign: "center",
  },
});
