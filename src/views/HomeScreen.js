//src/views/HomeScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { Appbar, Text, Button } from "react-native-paper";

const HomeScreen = () => {
  const [name, setName] = useState("VKMT");

  const _handleCart = () => console.log("Pressed cart");
  const _handleNotify = () => console.log("Pressed notify");

  const renderSectionHeader = (title) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
      <Pressable>
        <Text style={styles.viewMoreText}>View more</Text>
      </Pressable>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content
          title={
            <View style={styles.headerContent}>
              <Text style={styles.headerTextLarge}>Hello, {name}!</Text>
              <Text style={styles.headerTextSmall}>
                What do you want to learn today?
              </Text>
            </View>
          }
        />
        <Appbar.Action
          icon="cart"
          color="white"
          size={30}
          onPress={_handleCart}
        />
        <Appbar.Action
          icon="bell"
          color="white"
          size={30}
          onPress={_handleNotify}
        />
      </Appbar.Header>

      <View
        style={{
          width: "90%",
          height: "30vh",
          marginHorizontal: "auto",
          marginVertical: 20,
          backgroundColor: "#f1c933",
          justifyContent: "center",
        }}
      >
        <View style={{ position: "absolute", marginLeft: 20 }}>
          <Text style={{ color: "#19145e", fontSize: 20 }}>
            PROJECT MANAGEMENT
          </Text>

          <Text
            style={{
              color: "#19145e",
              fontSize: 40,
              fontWeight: "900",
              marginVertical: 20,
            }}
          >
            20% OFF
          </Text>

          <Button
            mode="contained"
            style={{
              backgroundColor: "#525bec",
              borderRadius: 10,
              width: "auto",
            }}
            labelStyle={{ color: "white" }}
            onPress={() => console.log("Pressed")}
          >
            JOIN NOW
          </Button>
        </View>
      </View>

      {/* Section 1 */}
      {renderSectionHeader("Categories")}

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {Categories.map((category, index) => (
          <View
            key={category.id}
            style={{
              width: `${index % 2 === 0 ? "45%" : "45%"}`, // Adjusting width dynamically
              height: 100,
              // backgroundColor: "#f1c933",
              borderWidth: 1,
              borderColor: "lightgrey",
              margin: 10,
              borderRadius: 10,
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              paddingLeft: 20,
            }}
          >
            <Image source={category.image} style={{ width: 50, height: 50 }} />
            <Text style={{ color: "#19145e", fontSize: 20, paddingLeft: 10 }}>
              {category.name}
            </Text>
          </View>
        ))}
      </View>

      {/* Section 2 */}
      {renderSectionHeader("Popular courses")}

      {/* Scroll view horizontal */}

      <ScrollView
        horizontal
        style={{ marginHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        {PopularCourses.map((course) => (
          <View
            key={course.id}
            style={{
              width: 250,
              height: 300,
              backgroundColor: "#f1c933",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image source={course.image} style={{ width: 250, height: 150 }} />
            <Text style={{ color: "#19145e", fontSize: 20, padding: 10 }}>
              {course.name}
            </Text>
            <Text style={{ color: "#19145e", fontSize: 15, padding: 10 }}>
              {course.author}
            </Text>
            <Text style={{ color: "#19145e", fontSize: 15, padding: 10 }}>
              {course.price}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Section 3 */}
      {renderSectionHeader("Recommended for you")}

      {/* Scroll view horizontal */}

      <ScrollView
        horizontal
        style={{ marginHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        {Recommended.map((course) => (
          <View
            key={course.id}
            style={{
              width: 250,
              height: 300,
              backgroundColor: "#f1c933",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image source={course.image} style={{ width: 250, height: 150 }} />
            <Text style={{ color: "#19145e", fontSize: 20, padding: 10 }}>
              {course.name}
            </Text>
            <Text style={{ color: "#19145e", fontSize: 15, padding: 10 }}>
              {course.author}
            </Text>
            <Text style={{ color: "#19145e", fontSize: 15, padding: 10 }}>
              {course.price}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Section 4 */}
      {renderSectionHeader("Course that inspires")}

      {/* map item 1 collumn */}

      {Courses.map((course) => (
        <View
          key={course.id}
          style={{
            width: "90%",
            height: 300,
            backgroundColor: "#f1c933",
            margin: 10,
            borderRadius: 10,
            marginHorizontal: "auto",
          }}
        >
          <Image source={course.image} style={{ width: "100%", height: 150 }} />
          <Text style={{ color: "#19145e", fontSize: 20, padding: 10 }}>
            {course.name}
          </Text>
          <Text style={{ color: "#19145e", fontSize: 15, padding: 10 }}>
            {course.author}
          </Text>
          <Text style={{ color: "#19145e", fontSize: 15, padding: 10 }}>
            {course.price}
          </Text>
        </View>
      ))}

      {/* Section 5 */}
      {renderSectionHeader("Top teachers")}

      {/* Scroll view horizontal */}

      <ScrollView
        horizontal
        style={{ marginHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        {Teachers.map((teacher) => (
          <View
            key={teacher.id}
            style={{
              width: 250,
              height: 300,
              backgroundColor: "#f1c933",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image source={teacher.image} style={{ width: 250, height: 150 }} />
            <Text style={{ color: "#19145e", fontSize: 20, padding: 10 }}>
              {teacher.name}
            </Text>
            <Text style={{ color: "#19145e", fontSize: 15, padding: 10 }}>
              {teacher.u}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#535ce8",
  },
  headerContent: {
    paddingVertical: 20,
  },
  headerTextLarge: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  headerTextSmall: {
    color: "white",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  sectionHeaderText: {
    fontWeight: "900",
    fontSize: 20,
  },
  viewMoreText: {
    fontSize: 20,
    marginRight: 20,
    color: "#2d24aa",
  },
});

export default HomeScreen;

const Categories = [
  { id: 1, name: "Business", image: require("../img/i1.png") },
  { id: 4, name: "Design", image: require("../img/i4.png") },
  { id: 2, name: "Code", image: require("../img/i2.png") },
  { id: 5, name: "Writing", image: require("../img/i5.png") },
  { id: 3, name: "Movie", image: require("../img/i3.png") },
  { id: 6, name: "Language", image: require("../img/i6.png") },
];

const PopularCourses = [
  {
    id: 1,
    name: "PHP in One Click",
    author: "Ramono Wultschner",
    price: "$59",
    rating: 4.5,
    r: 1233,
    l: 18,
    image: require("../img/ii1.png"),
  },
  {
    id: 2,
    name: "Python Introduction",
    author: "Ramono Oscar Wilde",
    price: "$39",
    rating: 4.5,
    r: 1267,
    l: 12,
    image: require("../img/ii2.png"),
  },
];

const Recommended = [
  {
    id: 1,
    name: "Website Design",
    author: "Ramono Wultschner",
    price: "$59",
    rating: 4.5,
    r: 1233,
    l: 9,
    image: require("../img/iii1.png"),
  },
  {
    id: 2,
    name: "UX Research For...",
    author: "Oscar Wilde",
    price: "$29",
    rating: 4.5,
    r: 1782,
    l: 12,
    image: require("../img/iii2.png"),
  },
];

const Courses = [
  {
    id: 1,
    name: "Digital Portrait",
    author: "Ramono Wultschner",
    price: "$67",
    rating: 4.5,
    r: 657,
    l: 12,
    image: require("../img/iv1.png"),
  },
  {
    id: 2,
    name: "Workspace Decor",
    author: "Ruth Domiguez",
    price: "$19",
    rating: 4.5,
    r: 33,
    l: 17,
    image: require("../img/iv2.png"),
  },
  {
    id: 3,
    name: "Packaging Design",
    author: "Hul Anderson",
    price: "$89",
    rating: 4.5,
    r: 1233,
    l: 14,
    image: require("../img/iv3.png"),
  },
];

const Teachers = [
  {
    id: 1,
    name: "Christan Hayes",
    u: "University of London",
    rate: 4.5,
    r: 1233,
    image: require("../img/v1.png"),
  },
  {
    id: 2,
    name: "Dennis Sweeney",
    u: "University of Chicago",
    rate: 4.5,
    r: 1233,
    image: require("../img/v2.png"),
  },
  {
    id: 3,
    name: "Hul Anderson",
    u: "University of London",
    rate: 4.5,
    r: 1233,
    image: require("../img/v3.png"),
  },
];
