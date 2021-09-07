import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AdContainer = styled.div`
  margin-top: 7vh;
  margin-bottom: 7vh;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  text-align: center;
  /* border: 1px solid purple; */
`;

const BannerAd = (props) => {
  //console.log("Banner ad sees that it's in section", props.data.type);
  switch (props.data.type) {
    case 'NEWS':
      return (
        <AdContainer>
          <broadstreet-zone zone-id="89643"></broadstreet-zone>
        </AdContainer>
      );
    case 'Trivia Map':
      return (
        <AdContainer>
          <broadstreet-zone
            zone-id="89642"
            // style={{ width: '80%' }}
          ></broadstreet-zone>
        </AdContainer>
      );
    case 'SPORTS':
      return (
        <AdContainer>
          <broadstreet-zone
            zone-id="89644"
            responsive="true"
            // style={{ width: '80%' }}
          ></broadstreet-zone>
        </AdContainer>
      );
    case 'ARTS':
      //console.log('Banner ad arts case!');
      return (
        <AdContainer>
          <broadstreet-zone zone-id="89645"></broadstreet-zone>
        </AdContainer>
      );
    default:
      return null;
  }
};
export default BannerAd;
