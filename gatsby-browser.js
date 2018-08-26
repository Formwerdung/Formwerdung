/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const objectFitImages = require('object-fit-images');

exports.onInitialClientRender = () => objectFitImages();
