import { StyleSheet, Platform } from "react-native";

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#022B30",
  },

  scrollContent: {
    paddingTop: Platform.OS === 'ios' ? 20 : 20,
    paddingBottom: 100,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "left",
    marginTop: 110,

  },

  // velocidade Styles
  velocidadeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  velocidade: {
    width: '100%',
    height: 160,
    borderRadius: 90,
    //backgroundColor: "#E8F4F7",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0098A9",
  },

  velocidadeValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },


  metricasContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  metricaCard: {
    width: "48%",
    //backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 120,
    borderWidth: 1,
    borderColor: "#0098A9",
  },

  metricaValor: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },

  metricaNome: {
    fontSize: 12,
    color: "#6b6b6b",
    marginTop: 5,
    textAlign: "center",
  },
});
