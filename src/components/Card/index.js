/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import styled, { css } from 'react-emotion';
import config from '../../../tailwind';
import { ArrowRightCircle } from 'react-feather';

export const CardConverter = ({ children }) =>
  <CardWrapper className={css(tw('block flex border-grey-light border-left'))}>
    <span className={css(tw('pr-1'), `a:hover & { color: ${config.colors['blue']} }`)}>{ children }</span>
    <ArrowRightCircle className={css(tw('h-2 stroke-current hover:text-blue relative z-10 transition-all'), `a:hover & { color: ${config.colors['blue']} }`)} />
  </CardWrapper>;

export const CardFooter = styled('div')`
${tw('w-full flex justify-end pin-b pin-l absolute')}
`;

export const CardType = styled('p')`
${tw('pt-0')}
`;

export const CardWrapper = styled('div')`
${tw('p-1')}
`;

  /*
<div className={css(tw('p-1'))}>
  <p className={css(tw('m-0'))}>Fallstudie</p>
  <h2 className={css(tw('m-0 leading-none'))}>{ props.props.frontmatter.title }</h2>
</div>

<div className={css(tw('text-black p-1'))}>
<p className={css(tw('m-0 pt-0 flex justify-between'))}><span>{props.type}</span> {props.children}</p>
<h3 className={css(tw('m-0 leading-2'))}>{props.title}</h3>
</div>*/