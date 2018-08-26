/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { css } from 'emotion';
import { ChevronsDown } from 'react-feather';

const ServiceCard = props =>
  <div className={css(tw('mx-1 md:w-1/2'))}>
    <section className={css(tw('rounded border border-grey border-solid  p-1 '), { opacity: props.disabled ? '0.5' : '1'})}>
      <h3 className={css(tw('m-0 text-sm leading-2 text-center'))}>{ props.title }</h3>
      <div className={css(tw('text-sm leading-2 text-center'))}>{ props.description }</div>
    </section>
    <div>
      <ChevronsDown className={css(tw('mx-auto block w-4 h-4 p-1 stroke-current text-grey'))} />
    </div>
  </div>;

export default ServiceCard;