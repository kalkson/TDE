import React from 'react';
import propTypes from 'prop-types';
import StyledAttachment from './Attachment.styled';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

const Attachment = () => (
  <StyledAttachment>
    <FeaturedItem heading="think deeply">
      TDE is a simple set of rules to make your life better. But as with the rules, you have to follow them fairly and
      accurately - only then will you see the effects of your hard work. In today's world taken over by computers and
      social media, it is hard for us people to focus on taking responsibility for our lives. We like to complain and
      blame everything else, but not ourselves for our fate. TDE is a way of thinking that will allow us to see and
      understand how to approach life and what to do so that the above problems do not affect us.
    </FeaturedItem>
    <FeaturedItem heading="do wisely">
      TDE is a simple set of rules to make your life better. But as with the rules, you have to follow them fairly and
      accurately - only then will you see the effects of your hard work. In today's world taken over by computers and
      social media, it is hard for us people to focus on taking responsibility for our lives. We like to complain and
      blame everything else, but not ourselves for our fate. TDE is a way of thinking that will allow us to see and
      understand how to approach life and what to do so that the above problems do not affect us.
    </FeaturedItem>
    <FeaturedItem heading="enjoy">
      TDE is a simple set of rules to make your life better. But as with the rules, you have to follow them fairly and
      accurately - only then will you see the effects of your hard work. In today's world taken over by computers and
      social media, it is hard for us people to focus on taking responsibility for our lives. We like to complain and
      blame everything else, but not ourselves for our fate. TDE is a way of thinking that will allow us to see and
      understand how to approach life and what to do so that the above problems do not affect us.
    </FeaturedItem>
  </StyledAttachment>
);

Attachment.propTypes = {};

export default Attachment;
