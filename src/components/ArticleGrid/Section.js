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
import {
  Grid,
  SectionContainer,
  SectionHeader,
  SectionCaption,
  StyledArticleCard,
} from './SectionElements'

const Section = (props) => {
  const BYLINE_COLORS = [colors.pastelRed, colors.pastelGreen, colors.pastelBlue, colors.pastelYellow];
  const HEADLINE_COLORS = [
    colors.pastelLightRed,
    colors.pastelLightGreen,
    colors.pastelLightBlue,
    colors.pastelLightYellow,
  ]
  const NUM_COLORS = BYLINE_COLORS.length;
  if (props.data.type === 'Trivia Map') {
    return (
      <SectionContainer id={props.data.type}>
        <SectionHeader>{props.data.type}</SectionHeader>
        <SpotFinder></SpotFinder>
        <BannerAd data={props.data} />
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
            <img src={NEWS_HEADLINE_SVG} alt="NEWS HEADLINE" />
          )}
          {props.data.type === 'SPORTS' && (
            <img src={SPORTS_HEADLINE_SVG} alt="SPORTS HEADLINE" />
          )}
          {props.data.type === 'ARTS' && (
            <img src={ARTS_HEADLINE_SVG} alt="ARTS HEADLINE" />
          )}
          {props.data.type === 'OPINION' && (
            <img src={OPINION_HEADLINE_SVG} alt="OPINION HEADLINE" />
          )}
          {props.data.type === 'QUAD' && (
            <img src={QUAD_HEADLINE_SVG} alt="QUAD HEADLINE" />
          )}
          {props.data.type === 'PRIME' && (
            <img src={PRIME_HEADLINE_SVG} alt="PRIME HEADLINE" />
          )}
          {props.data.type === 'MULTIMEDIA' && (
            <img src={MULTIMEDIA_HEADLINE_SVG} alt="MULTIMEDIA HEADLINE" />
          )}
        </SectionHeader>
        <BannerAd data={props.data} />
        {props.data.content[0].type === 'paragraph' ? (
          <SectionCaption> {props.data.content[0].content}</SectionCaption>
        ) : null}
        <Grid size={props.data.content.length}>{articles}</Grid>
      </SectionContainer>
    )
  }
}

export default Section
