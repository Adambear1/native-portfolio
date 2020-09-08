import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableOpacityComponent,
  Linking,
} from "react-native";
import colors from "../../assets/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fabFacebook } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Actions } from "react-native-router-flux";

export default function Home() {
  function toPortfolioPage() {
    Actions.portfolio();
  }
  function toBiographyPage() {
    Actions.biography();
  }
  function toGithub() {
    Linking.openURL("http://github.com/Adambear1");
  }
  function toGoogle() {
    Linking.openURL("mailto:adam@quality-creations.com");
  }
  function toLinkedin() {
    Linking.openURL("https://www.linkedin.com/in/abirgenheier/");
  }
  return (
    <ImageBackground
      source={require("./images/background-image.jpg")}
      blurRadius={0.9}
      style={{
        flex: 1,
        resizeMode: "cover",
        height: "92vh",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./images/headshot.jpg")}
            style={{
              height: 300,
              width: 300,
              borderRadius: 500,
              overflow: "hidden",
              borderWidth: 3,
            }}
          />
          <Text
            style={{
              color: colors.text,
              fontSize: 35,
            }}
          >
            Adam Birgenheier
          </Text>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 20,
            }}
          >
            Full Stack Developer and Software Engineer
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={toPortfolioPage}
            style={{
              borderColor: colors.secondaryBackground,
              borderWidth: 1,
              backgroundColor: colors.secondaryBackground,
              padding: 10,
              marginRight: 20,
              borderRadius: 10,
              borderColor: colors.border,
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text> View Portfolio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toBiographyPage}
            style={{
              borderColor: colors.secondaryBackground,
              borderWidth: 1,
              backgroundColor: colors.secondaryBackground,
              padding: 10,
              borderRadius: 10,
              borderColor: colors.border,
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text> View Biography</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: colors.primaryBackground,
            position: "absolute",
            paddingRight: 150,
            paddingLeft: 150,
            paddingTop: 20,
            bottom: -1,
            paddingBottom: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopWidth: 2,
            borderColor: "black",
            overflow: "hidden",
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={toGithub}>
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                color: "white",
                marginRight: 10,
                fontSize: 30,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toGoogle}>
            <FontAwesomeIcon
              icon={faGoogle}
              style={{
                color: "white",
                marginLeft: 20,
                marginRight: 20,
                fontSize: 30,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toLinkedin}>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "white", marginLeft: 10, fontSize: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
