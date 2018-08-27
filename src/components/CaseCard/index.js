/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import config from '../../../tailwind';
import { css } from 'emotion';
import { values } from 'lodash';

export const mq = values(config.screens).map(
  bp => `@media (min-width: ${bp})`
);

const firstLi = {
  [mq[0]]: {
    'border-right': `1px solid ${config.colors['grey-light']}`,
  },
};

const middleLi = {
  [mq[0]]: {
    'text-align': 'right',
  },
  [mq[2]]: {
    'text-align': 'center',
    'border-right': `1px solid ${config.colors['grey-light']}`,
  },
};

const latestLi = {
  [mq[0]]: {

    'padding-bottom': '0.75rem',
  },
  [mq[2]]: {

    'padding-bottom': '0',
  }
};

const middleContainer = {
  [mq[0]]: {
    'margin-right': '0',
    'margin-left': 'auto',
  }, [mq[2]]: {
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

const CaseCard = props =>
  <li className={css(tw('flex-1 block sm:w-1/2 lg:w-1/3 text-center sm:text-left'),
                 props.first ? firstLi : {},
                 !(props.first || props.latest) ? middleLi : {},
                 props.latest ? latestLi : { 'border-bottom': `1px solid ${config.colors['grey-light']}` })}>
    <div className={css(tw('mx-auto sm:ml-0 sm:flex sm:flex-wrap lg:static'),
                    !(props.first || props.latest) ? middleContainer : {},
                    props.latest ? latestContainer : { 'max-width': '320px' })}>
      <div className={css(tw('flex-1'))}>
        <div className={css(tw('p-1'))}>
          <p className={css(tw('m-0'))}>Fallstudie</p>
          <h2 className={css(tw('m-0 leading-none'))}>{ props.props.title }</h2>
        </div>
        <div className="project-staerkle-device">
          <div className="project-staerkle-screen" />
        </div>
      </div>
      <div className={css(tw('p-1'), props.latest ? latestBlurb : {})}>{ props.props.callToAction }</div>
    </div>
  </li>;

export default CaseCard;