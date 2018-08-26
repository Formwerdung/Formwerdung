/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { css } from 'emotion';

const CaseCard = ({props}) =>
  <li className={css(tw('flex-1 p-1 block'))}>

      <p className={css(tw('m-0'))}>Fallstudie</p>
      <h2 className={css(tw('m-0 leading-none'))}>{ props.title }</h2>
      <p className={css(tw('m-0 pt-1'))}>{ props.callToAction }</p>

  </li>;

export default CaseCard;