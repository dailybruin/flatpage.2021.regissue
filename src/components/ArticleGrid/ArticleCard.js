import React from 'react'
import {
  Article,
  ArticleImage,
  ArticleLink,
  FlexDiv10,
  FlexDiv15,
  FlexDiv75,
  FlexDiv85,
} from './ArticleCardElements'

const ArticleCard = ({ article, key, bylineColor, headlineColor, size }) => {
  if (article.type === 'paragraph') {
    return <div></div>
  }
  if (article.type === 'ad') {
    console.log('ad!!')
    return (
      <Article>
        <broadstreet-zone zone-id="89668"></broadstreet-zone>
      </Article>
    )
  }
  if (article.type === 'image_card') {
    // -30- card
    return (
      <ArticleLink href={article.url}>
        <Article>
          <FlexDiv85>
            <ArticleImage src={article.image_url} />
          </FlexDiv85>
          <FlexDiv15 color={bylineColor}>{article.image_name}</FlexDiv15>
        </Article>
      </ArticleLink>
    )
  }
  if (article.cardSize === undefined || article.cardSize === 'hamburger') {
    return (
      <ArticleLink href={article.news_url}>
        <Article>
          <FlexDiv75>
            <ArticleImage src={article.image_url} />
          </FlexDiv75>
          <FlexDiv10 color={bylineColor}>By {article.byline}</FlexDiv10>
          <FlexDiv15 color={headlineColor}>{article.image_headline}</FlexDiv15>
        </Article>
      </ArticleLink>
    )
  }
}

export default ArticleCard
