import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";



const AppIcon = require("../../assets/Icon.png"); 

const Skip = ({ ...props }) => (
  <TouchableOpacity style={styles.skipBtn} {...props}>
    <Text style={styles.skipText}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={styles.nextBtn} {...props}>
    <Text style={styles.nextText}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <LinearGradient colors={["#6EC7FF", "#3AA2FF"]} style={styles.doneWrap}>
    <TouchableOpacity {...props} style={styles.doneBtn}>
      <Text style={styles.doneText}>Get Started</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const Dots = ({ selected }) => {
  return (
    <View
      style={[
        styles.dot,
        { backgroundColor: selected ? "#0B3A8A" : "#D1D5DB", width: selected ? 18 : 8 },
      ]}
    />
  );
};

export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#EAF6FF" />
      {/* Top area with app icon + app name */}
      <View style={styles.topBar}>
        <Image source={AppIcon} style={styles.appIcon} resizeMode="contain" />
        <View style={styles.titleWrap}>
          <Text style={styles.appTitle}>Field Force</Text>
          <Text style={styles.appSubtitle}>Management</Text>
        </View>
      </View>

      <Onboarding
        containerStyles={styles.container}
        showSkip={true}
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("login")}
        onDone={() => navigation.replace("login")}
        pages={[
          {
            backgroundColor: "#EAF6FF",
            image: (
              <View style={styles.slideIconWrap}>
                <Icon name="business-outline" size={110} color="#1565C0" />
              </View>
            ),
            title: "Visit Companies Easily",
            subtitle: "Plan and manage your direct visits with just a few taps.",
          },
          {
            backgroundColor: "#EAF6FF",
            image: (
              <View style={styles.slideIconWrap}>
                <Icon name="people-circle-outline" size={110} color="#0D47A1" />
              </View>
            ),
            title: "Track Meetings",
            subtitle: "Stay updated on scheduled meetings and your visit history.",
          },
          {
            backgroundColor: "#EAF6FF",
            image: (
              <View style={styles.slideIconWrap}>
                <Icon name="car-outline" size={110} color="#002171" />
              </View>
            ),
            title: "Smart Travel & Attendance",
            subtitle:
              "Select travel mode, capture check-ins and submit expenses quickly.",
          },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#EAF6FF" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 6,
    backgroundColor: "#EAF6FF",
  },
  appIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
  },
  titleWrap: {
    marginLeft: 12,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#073863",
    letterSpacing: 0.2,
  },
  appSubtitle: {
    marginTop: -2,
    fontSize: 14,
    fontWeight: "600",
    color: "#0B3A8A",
  },

  container: {
    // Onboarding internal container
    backgroundColor: "transparent",
  },

  slideIconWrap: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
    marginBottom: 18,
  },

  // Buttons
  skipBtn: {
    marginHorizontal: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  skipText: {
    color: "#0B3A8A",
    fontWeight: "600",
  },
  nextBtn: {
    marginHorizontal: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#E6F4FF",
  },
  nextText: {
    color: "#0B3A8A",
    fontWeight: "700",
  },
  doneWrap: {
    borderRadius: 12,
    marginHorizontal: 18,
  },
  doneBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  doneText: {
    color: "#fff",
    fontWeight: "800",
  },

  // Dots
  dot: {
    height: 8,
    borderRadius: 8,
    marginHorizontal: 6,
  },

  // Titles/Subtitles default of onboarding-swiper are fine; we can override a little
  titleStyles: {
    fontSize: 20,
    color: "#073863",
    fontWeight: "800",
  },
  subTitleStyles: {
    fontSize: 14,
    color: "#4B5563",
    paddingHorizontal: 30,
    textAlign: "center",
  },
});
