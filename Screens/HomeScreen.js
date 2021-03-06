import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import styled from "styled-components";
import Card from "../components/card";
import Logo from "../components/Logo";
import Course from "../components/Course";
import { Ionicons } from "@expo/vector-icons";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import Avatar from "../components/Avatar";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();
      StatusBar.setBarStyle("light-content", true);
    }
    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();
      StatusBar.setBarStyle("dark-content", true);
    }
  };
  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>{this.props.name}</Name>

                <Ionicons
                  name="ios-notifications"
                  size={32}
                  color="#4775f2"
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30
                }}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} text={logo.text} image={logo.image} />
                ))}
              </ScrollView>
              <Subtitle>Continue Learning</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("Section");
                    }}
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      caption={card.caption}
                      logo={card.logo}
                      subtitle={card.subtitle}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Subtitle>Popular Courses</Subtitle>
              {Courses.map((course, index) => (
                <Course
                  key={index}
                  title={course.title}
                  subtitle={course.subtitle}
                  image={course.image}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px; */
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framerx"
  },
  {
    image: require("../assets/logo-invision.png"),
    text: "Invivion"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-vue.png"),
    text: "Vue"
  },
  {
    image: require("../assets/logo-xcode.png"),
    text: "Xcode"
  },
  {
    image: require("../assets/logo-xd.png"),
    text: "Xd"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    caption: "React Native",
    logo: require("../assets/logo-react.png"),
    subtitle: "1 of 12 sections"
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    caption: "React Native",
    logo: require("../assets/logo-react.png"),
    subtitle: "2 of 12 sections"
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    caption: "React Native",
    logo: require("../assets/logo-react.png"),
    subtitle: "3 of 12 sections"
  },
  {
    title: "Statics Data and Loop",
    image: require("../assets/background14.jpg"),
    caption: "React Native",
    logo: require("../assets/logo-react.png"),
    subtitle: "4 of 12 sections"
  },
  {
    title: "States and Animations",
    image: require("../assets/background15.jpg"),
    caption: "React Native",
    logo: require("../assets/logo-react.png"),
    subtitle: "5 of 12 sections"
  },
  {
    title: "Redux",
    image: require("../assets/background16.jpg"),
    caption: "React Native",
    logo: require("../assets/logo-react.png"),
    subtitle: "6 of 12 sections"
  }
];

const Courses = [
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require("../assets/background1.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design With Figma"
  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require("../assets/background2.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn Wireframe"
  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require("../assets/background3.jpg"),
    logo: require("../assets/logo-invision.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and intrective prototype"
  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require("../assets/background4.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Build Website with React"
  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require("../assets/background5.jpg"),
    logo: require("../assets/logo-sketch.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and intrective prototype"
  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-swift.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create Your Own IOS App"
  }
];
