import { values } from 'lodash';
import config from '../../tailwind';

export const mq = values(config.screens).map(
  bp => `@media (min-width: ${bp})`,
);