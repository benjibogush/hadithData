import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Home = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const handlePress = () => {
    setBackgroundColor("#f2f2f2");
  };

  const handleRelease = () => {
    setBackgroundColor("#ffffff");
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Home Page</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Page components in detail and how the router works:
        </Text>
        <Text style={styles.descriptionText}>
          The router works by mapping URL paths to components. When a user visits
          a URL, the router looks for a corresponding component to render based
          on the URL path.
        </Text>
        <Text style={styles.descriptionText}>
          Navigation setup:
        </Text>
        <Text style={styles.descriptionText}>
          Navigation is set up by defining a list of routes and linking each
          route to a component. The routes can be displayed in a Navbar or
          any other custom component.
        </Text>
        <Text style={styles.descriptionText}>
          Project tree:
        </Text>
        <Text style={styles.descriptionText}>
          |--src
          |  |--components
          |  |  |--Home.js
          |  |  |--Login.js
          |  |  |--Signup.js
          |  |  |--Dashboard.js
          |  |  |--Navbar.js
          |  |--App.js
          |  |--index.js
        </Text>
      </View>
      <Text style={styles.accessibility}>
        Styling for accessibility:
      </Text>
      <Text style={styles.accessibility}>
        For accessibility, it's important to use high-contrast colors and
        clear, readable text styles. The text size and font should be
        easily readable by people with visual impairments.
      </Text>
      <Text style={styles.counterTitle}>Click and Hover Game:</Text>
      <View style={styles.gameContainer}>
        <TouchableOpacity
          style={styles.gameButton}
          onPress={incrementCounter}
          onPressIn={handlePress}
          onPressOut={handleRelease}
        >
          <Text style={styles.gameButtonText}>Click Me!</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  descriptionContainer: {
    width: "80%",
    marginBottom: 20
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10
  },
  accessibility: {
    fontSize: 16,
    marginBottom: 20
  },
  counterTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20
  },
  gameContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  gameButton: {
    backgroundColor: "#3f51b5",
    padding: 10,
    borderRadius: 5,
    marginRight: 10
  },
  gameButtonText: {
    color: "#ffffff",
    fontWeight: "bold"
  },
  counterText: {
    fontSize: 16
  }
});





// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import { Container } from "react-bootstrap";

// class Home extends Component {
//   render() {
//     return (
//       <Container>
//         <h1>Home</h1>
     
//         <p>
//           <Link to="/login">Login</Link>
//         </p>
//         <p>
//           <Link to="/signup">Sign up</Link>
//         </p>
//         <p>
//           <Link to="/dashboard">Dashboard</Link>
//         </p>
//       </Container>
//     );
//   }
// }

// export default Home;

