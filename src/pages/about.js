import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"


const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-direction: row;
  padding: 3em;
  white-space: pre-line;

`
const OuterContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-direction: row;
  padding-left: 5em;
`;

const Label = styled.span`
  font-family: Victorianna;
  padding-right: 1em;
  padding-top: .5em;
  font-size: 8em;
`;

const Link = styled.a`
  font-family: Victorianna;
  font-size: 1.5em;
  padding: 2em 1em;
  border: 2px solid;
  border-radius: 5px;
`;



const about = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Label>Hi!</Label>I'm Mohamed and I am a software engineer in Minneapolis,
      MN.
      {"\n\n"}My craft is software development. There's so much room to learn
      and grow in the field and I'm passionate about learning as much as
      possible. Every day I try to a new skill or build on my previous
      experience to form into projects.
      {"\n\n"}In my current role, you can find me designing ways to make
      software delivery fast, smooth, and scalable. Some of the technologies I
      have experience with are: Java, Python, Javascript, Typescript, HTML/CSS,
      Angular, Kubernetes, Docker, and AWS.
    </Container>
    <OuterContainer>
      <Link>
        <a href={`mailto:${"aden781@gmail.com"}`}>Get in Touch</a>
      </Link>
      </OuterContainer>
  </Layout>
)

export default about