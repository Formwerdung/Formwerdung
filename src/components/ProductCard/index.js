/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { Link } from 'gatsby';
import { CardConverter, CardFooter, CardType, CardWrapper } from '../Card';
import { css } from 'emotion';
import { mq } from '../../assets/style';

export default props =>
  <li className={css(tw('sm:w-1/2 lg:w-1/3 border-grey-light border-solid border-t border-r-0 border-l-0 border-b-0 sm:border-r'),
    props.index === 'even' ? evenStyling : {},
    props.number === 'second' ? secondStyling : {},
    props.number === 'third' ? thirdStyling : {},
    props.number === 'fourth' ? fourthStyling : {})}>
    <Link to={props.link}
          className={css(tw('text-black block hover:opacity-75 transition relative pb-4 h-full'),
            props.number === 'fourth' ? fourthStylingSection : {})}>
      <section className={css(tw('md:rounded overflow-hidden p-0'))}>

        <CardWrapper>
          <CardType className={css(tw('flex justify-between'))}><span>{props.type}</span> {props.children}</CardType>
          <h3 className={css(tw('m-0 leading-2'))}>{props.title}</h3>
        </CardWrapper>

        <CardWrapper>
          <p className={css(tw('pt-0 max-w-hero'))}>{props.forWhom}</p>
        </CardWrapper>

        <CardFooter>
          <p className={css(tw('m-0 p-1 font-semibold text-right'))}>
            { props.price }
          </p>
          <CardConverter>Mehr dazu</CardConverter>
        </CardFooter>
      </section>
    </Link>
  </li>;


const evenStyling = {
  [mq[0]]: {
    'border-right-width': '0',
  },
};

const secondStyling = {
  [mq[1]]: {
    'border-right-width': '1px',
  },
};

const thirdStyling = {
  [mq[1]]: {
    'border-right-width': '0',
  },
};

const fourthStyling = {
  [mq[2]]: {
    flex: '1',
  },
};

const fourthStylingSection = {
  [mq[2]]: {
    width: '33.3333333%',
  },
};