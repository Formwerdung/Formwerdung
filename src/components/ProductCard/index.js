/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';

const ProductCard = props =>
  <li className={css(tw('md:w-1/2 lg:w-1/3 xl:w-1/4 md:pr-2 md:pb-2 border-grey-light border-solid border-t border-r-0 border-l-0 border-b-0 md:border-t-0'))}>
    <section className={css(tw('md:rounded overflow-hidden md:shadow-lg p-0'))}>

      <div className={css(tw('bg-black text-white p-1'))}>
        <p className={css(tw('m-0 flex justify-between'))}><span>{props.type}</span> {props.children}</p>
        <h3 className={css(tw('m-0 leading-2'))}>{props.title}</h3>
      </div>

      <div className={css(tw('bg-blue-lightest p-1'))}>
        <p className={css(tw('m-0'))}>{props.forWhom}</p>
      </div>

      <div className={css(tw('p-1'))}>
        <h4 className={css(tw('m-0 text-sm leading-2'))}>Features</h4>
        <ul className={css(tw('p-0 pl-1 text-sm leading-2'))}>
          { props.features.map((string, i) => <li key={i}>{ string }</li>) }
        </ul>
      </div>

      <p className={css(tw('m-0 p-1 border-grey-light border-solid md:border-t border-r-0 border-l-0 border-b-0 border-t-0 font-semibold bg-blue-lightest'))}>
        { props.price }
      </p>
      <Link to={'/angebot/klein/'}>Mehr dazu</Link>
    </section>
  </li>;

export default ProductCard;