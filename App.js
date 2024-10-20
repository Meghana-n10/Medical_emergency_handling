import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

const EmergencyApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Medical Emergency Handling</Text>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map will be shown here</Text>
      </View>

      {/* Call Ambulance and Share Location Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callButtonText}>Call Ambulance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share Location</Text>
        </TouchableOpacity>
      </View>

      {/* Home and Settings Buttons */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require("./assets/home-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require("./assets/alerts-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.footerButtonText}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require("./assets/settings-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.footerButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    marginTop: 20,
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  mapPlaceholder: {
    width: "90%",
    height: 200,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  mapText: {
    fontSize: 16,
    color: "#999",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  callButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  callButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  shareButton: {
    backgroundColor: "#4da6ff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  shareButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingBottom: 30,
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    color: "#333",
    fontSize: 14,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
});

export default EmergencyApp;
