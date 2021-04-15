import noImage from './noimage.png';
const requireImage = require.context('../../assets', false, /.jpg$/);

export const loadImage = imageName => {
  let image;
  try {
    return (image = requireImage(`./${imageName}.jpg`).default);
  } catch (error) {
    console.log('error', error.message);
    return noImage;
  }
  return image;
};
