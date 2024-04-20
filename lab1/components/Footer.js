import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Задніпрянець Артур Артрович, ІПЗ-20-1
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: { fontStyle: "italic" },
  footer: {
    alignItems: "center",
  },
});

export default Footer;
