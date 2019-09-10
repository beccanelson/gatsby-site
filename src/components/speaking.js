import React from "react"
import { rhythm } from "../utils/typography"
import Container from "./container"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery } from "gatsby"
import { format } from "date-fns"

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const Wrapper = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
`

function getFormattedDate(isoStringDate) {
  return format(new Date(isoStringDate), "MMMM D, YYYY")
}

function Engagement({ title, conference, date, url }) {
  return (
    <Wrapper>
      <Title>
        <a href={url}>{`${title} - ${conference}`}</a>
      </Title>
      <small>{getFormattedDate(date)}</small>
    </Wrapper>
  )
}

function Speaking() {
  return (
    <StaticQuery
      query={speakingEngagementsQuery}
      render={data => {
        const engagements = data.allSpeakingJson.edges
        const today = new Date()
        const upcoming = engagements.filter(
          ({ node }) => new Date(node.date) >= today
        )
        const past = engagements.filter(
          ({ node }) => new Date(node.date) < today
        )

        return (
          <section id="speaking">
            <Fade>
              <Container>
                <h2>Speaking</h2>
                <h3>Upcoming</h3>
                {upcoming.map(({ node }, i) => (
                  <Engagement key={i} {...node} />
                ))}
                <h3>Past</h3>
                {past.map(({ node }, i) => (
                  <Engagement key={i} {...node} />
                ))}
              </Container>
            </Fade>
          </section>
        )
      }}
    />
  )
}

const speakingEngagementsQuery = graphql`
  query SpeakingEngagementsQuery {
    allSpeakingJson {
      edges {
        node {
          title
          conference
          date
          url
        }
      }
    }
  }
`

export default Speaking
