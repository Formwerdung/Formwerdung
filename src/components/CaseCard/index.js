/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { Link } from 'gatsby';
import { CardConverter, CardFooter, CardType, CardWrapper } from '../Card';
import config from '../../../tailwind';
import { css } from 'emotion';
import { mq } from '../../assets/style';

const CaseCard = props =>
  <li className={css(tw('flex-1 lg:flex-none block sm:w-1/2 lg:w-1/3 text-center sm:text-left '),
                 props.first ? firstLi : {},
                 !(props.first || props.latest) ? middleLi : {},
                 props.latest ? latestLi : { 'border-bottom': `1px solid ${config.colors['grey-light']}` })}>
    <Link to={`${props.props.fields.collection}${props.props.fields.slug}`}
          className={css(tw('text-black block hover:opacity-75 transition relative pb-8 h-full'))}>
      <div className={css(tw('mx-auto sm:ml-0 sm:flex sm:flex-wrap lg:static'),
                      !(props.first || props.latest) ? middleContainer : {},
                      props.latest ? latestContainer : { 'max-width': '320px' })}>
        <div className={css(tw('flex-1'))}>
          <CardWrapper>
            <CardType>Fallstudie</CardType>
            <h2 className={css(tw('m-0 leading-none'))}>{ props.props.frontmatter.title }</h2>
          </CardWrapper>
          <div className="project-staerkle-device">
            <div className="project-staerkle-screen" />
          </div>
        </div>
        <CardWrapper className={css(props.latest ? latestBlurb : {})}>{ props.props.frontmatter.callToAction }</CardWrapper>
        <CardFooter>
          <CardConverter>Weiterlesen</CardConverter>
        </CardFooter>
      </div>
    </Link>
  </li>;

export default CaseCard;

const firstLi = {
  [mq[0]]: {
    'border-right': `1px solid ${config.colors['grey-light']}`,
  },
  [mq[2]]: {
    width: 'calc(33.333333% - ((33.333333% - 320px) / 4))',
  },
};

const middleLi = {
  [mq[0]]: {
    'text-align': 'right',
  },
  [mq[2]]: {
    'text-align': 'center',
    'border-right': `1px solid ${config.colors['grey-light']}`,
    width: 'calc(33.333333% + ((33.333333% - 320px) / 2))',
  },
};

const latestLi = {
  [mq[0]]: {
    'padding-bottom': '0.75rem',
  },
  [mq[2]]: {
    'padding-bottom': '0',
    width: 'calc(33.333333% - ((33.333333% - 320px) / 4))',
  }
};

const middleContainer = {
  [mq[0]]: {
    'margin-right': '0',
    'margin-left': 'auto',
  },
  [mq[2]]: {
    'margin-right': 'auto'
  },
};

const latestContainer = {
  'max-width': '320px',
  [mq[0]]: {
    'max-width': '640px',
  },
  [mq[2]]: {
    'text-align': 'right',
    'max-width': '320px',
    'margin-right': '0',
    'margin-left': 'auto',
  },
};

const latestBlurb = {
  [mq[0]]: {
    'max-width': '320px',
    'margin-top': '3.75rem',
    'margin-left': '48px', // magic number to evade screen gfx
  },
  [mq[2]]: {
    'max-width': 'auto',
    'margin-top': '0',
    'margin-left': '0',
  }
};