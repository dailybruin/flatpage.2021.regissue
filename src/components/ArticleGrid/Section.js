import React from 'react';
import BannerAd from '../BannerAd';
import MyMap from '../Map';
import SeniorAdvice from '../senior_advice/SeniorAdvice';
// import ArticleCard from './ArticleCard';
import {
  Grid,
  SectionContainer,
  SectionHeader,
  SectionCaption,
  StyledArticleCard,
} from './SectionElements';

const Section = (props) => {
  if (props.data.type === 'Trivia Map') {
    return (
      <SectionContainer id={props.data.type}>
        <SectionHeader>{props.data.type}</SectionHeader>
        <MyMap></MyMap>
        <BannerAd data={props.data} />
      </SectionContainer>
    );
  } else if (props.data.type === 'Senior Advice') {
    return (
      <SectionContainer id={props.data.type}>
        <SectionHeader>{props.data.type}</SectionHeader>
        <SeniorAdvice></SeniorAdvice>
      </SectionContainer>
    );
  } else {
    const rawArticles = props.data.content;
    //console.log("section's props.data", props.data);
    const prunedArticles = rawArticles.reduce(function (filtered, item) {
      if (item.type === 'article_card' || item.type === 'image_card' || item.type === 'ad') {
        // TODO: modify this to make ads show up
        filtered.push(item);
      }
      return filtered;
    }, []);

    const articles = prunedArticles.map((article, i) => (
      <StyledArticleCard article={article} key={i} size={article.cardSize} />
    ));
    //('grid length is', props.data.content.length);
    return (
      <SectionContainer id={props.data.type}>
        <SectionHeader>{props.data.type}</SectionHeader>
        <BannerAd data={props.data} />
        {props.data.content[0].type === 'paragraph' ? (
          <SectionCaption> {props.data.content[0].content}</SectionCaption>
        ) : null}
        <Grid size={props.data.content.length}>{articles}</Grid>
      </SectionContainer>
    );
  }
};

export default Section;
