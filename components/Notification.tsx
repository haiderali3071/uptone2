import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
const api = require('../api.json');

const photo_url = api.photo;

export default function Notification(props: {
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  time:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  profile:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <TouchableOpacity style={styles.notificationCard}>
      <Image
        style={styles.profilepic}
        source={{uri:props.profile ? photo_url+props.profile: 'data:image/png;base64,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'}}
      />
      <View style={styles.notificationButton}>
        <Text style={styles.notificationText}>{props.title}</Text>
        <Text style={styles.timeText}>{props.time}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profilepic: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 70,
    marginTop: 15,
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 15,
  },
  notificationText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 12,
    color: "#4F4F4F",
  },
  timeText: {
    fontFamily: "Montserrat",
    fontSize: 12,
    marginTop: 5,
    color: "#4F4F4F",
  },
  notificationButton: {
    marginLeft: 5,
  },
});
