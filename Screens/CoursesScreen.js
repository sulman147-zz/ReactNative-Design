import React from "react";
import styled from "styled-components";

class CoursesScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Courses Screen</Text>
      </Container>
    );
  }
}

export default CoursesScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
