import React from 'react'
import BannerAd from '../BannerAd'
import SpotFinder from '../SpotFinder'
import NEWS_HEADLINE_SVG from '../../assets/NEWS_HEADLINE.svg'
import SPORTS_HEADLINE_SVG from '../../assets/SPORTS_HEADLINE.svg'
import ARTS_HEADLINE_SVG from '../../assets/ARTS_HEADLINE.svg'
import OPINION_HEADLINE_SVG from '../../assets/OPINION_HEADLINE.svg'
import QUAD_HEADLINE_SVG from '../../assets/QUAD_HEADLINE.svg'
import PRIME_HEADLINE_SVG from '../../assets/PRIME_HEADLINE.svg'
import MULTIMEDIA_HEADLINE_SVG from '../../assets/MULTIMEDIA_HEADLINE.svg'
import { colors } from '../../shared/config'
import styled from 'styled-components'
import {
  Grid,
  SectionContainer,
  SectionHeader,
  SectionCaption,
  StyledArticleCard,
} from './SectionElements'
const ImageContainer = styled.img`
  max-width: 100%;
`
const Section = (props) => {
  const BYLINE_COLORS = [
    colors.pastelRed,
    colors.pastelGreen,
    colors.pastelBlue,
    colors.pastelYellow,
  ]
  const HEADLINE_COLORS = [
    colors.pastelLightRed,
    colors.pastelLightGreen,
    colors.pastelLightBlue,
    colors.pastelLightYellow,
  ]
  const NUM_COLORS = BYLINE_COLORS.length
  if (props.data.type === 'GraphicsInteractive') {
    return (
      <SectionContainer id={props.data.type}>
        <SpotFinder></SpotFinder>
        {/* <BannerAd data={props.data} /> */}
      </SectionContainer>
    )
  } else {
    const rawArticles = props.data.content
    //console.log("section's props.data", props.data);
    const prunedArticles = rawArticles.reduce(function (filtered, item) {
      if (
        item.type === 'article_card' ||
        item.type === 'image_card' ||
        item.type === 'ad'
      ) {
        // TODO: modify this to make ads show up
        filtered.push(item)
      }
      return filtered
    }, [])

    const articles = prunedArticles.map((article, i) => (
      <StyledArticleCard
        article={article}
        key={i}
        bylineColor={BYLINE_COLORS[i % NUM_COLORS]}
        headlineColor={HEADLINE_COLORS[i % NUM_COLORS]}
        size={article.cardSize}
      />
    ))
    //('grid length is', props.data.content.length);
    return (
      <SectionContainer id={props.data.type}>
        <SectionHeader>
          {props.data.type === 'NEWS' && (
            <ImageContainer src={NEWS_HEADLINE_SVG} alt="NEWS HEADLINE" />
          )}
          {props.data.type === 'SPORTS' && (
            <ImageContainer src={SPORTS_HEADLINE_SVG} alt="SPORTS HEADLINE" />
          )}
          {props.data.type === 'ARTS' && (
            <ImageContainer src={ARTS_HEADLINE_SVG} alt="ARTS HEADLINE" />
          )}
          {props.data.type === 'OPINION' && (
            <ImageContainer src={OPINION_HEADLINE_SVG} alt="OPINION HEADLINE" />
          )}
          {props.data.type === 'THE QUAD' && (
            <ImageContainer src={QUAD_HEADLINE_SVG} alt="QUAD HEADLINE" />
          )}
          {props.data.type === 'PRIME' && (
            <ImageContainer src={PRIME_HEADLINE_SVG} alt="PRIME HEADLINE" />
          )}
          {props.data.type === 'MULTIMEDIA' && (
            <ImageContainer
              src={MULTIMEDIA_HEADLINE_SVG}
              alt="MULTIMEDIA HEADLINE"
            />
          )}
        </SectionHeader>
        {props.data.content[0].type === 'paragraph' ? (
          <SectionCaption> {props.data.content[0].content}</SectionCaption>
        ) : null}
        <Grid size={props.data.content.length}>{articles}</Grid>
        {/* <BannerAd data={props.data} /> */}
      </SectionContainer>
    )
  }
}

export default Section
