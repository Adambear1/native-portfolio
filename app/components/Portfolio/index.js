import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {
  let portfolio = [
    {
      title: "Maryelle Photography",
      description: "Photography Company",
      link: "https://adam-maryelle-photography.herokuapp.com/",
    },
    {
      title: "Hooker Cleaning Company",
      description: "Janitorial Company",
      link: "https://adam-hooker-cleaning-company.herokuapp.com/",
    },
    {
      title: "Molly's Hops",
      description: "Hops and Brewing Company",
      link: "https://adam-mollys-hops.herokuapp.com/",
    },
    {
      title: "Ronalds Landscaping",
      description: "Landscaping Company",
    },
    {
      title: "Seven Sons Kitchen",
      description: "Catering and BBQ Company",
      link: "https://quality-creations-sevensons.herokuapp.com/",
    },
    {
      title: "Kristen Lashes",
      description: "Custom Eye Lash Extension Company",
      link: "https://quality-creations-kristen-lash.herokuapp.com/",
    },
  ];
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        flex: 1,
        height: "92%",
      }}
    >
      <FlatList
        data={portfolio}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 20,
              borderColor: "whitesmoke",
              borderWidth: 3,
              borderStyle: "solid",
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  transform: [{ rotate: "180deg" }],
                  width: 25,
                  height: 25,
                  // position: "absolute",
                  left: 2,
                  backgroundColor: "white",
                  color: "purple",
                  borderRadius: 500,
                  marginTop: 100 / 2,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                flexDirection: "column",
                textAlign: "center",
                fontSize: 20,
                flexShrink: 1,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                flexDirection: "column",
                textAlign: "center",
                fontSize: 10,
                flexShrink: 1,
              }}
            >
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default Portfolio;
