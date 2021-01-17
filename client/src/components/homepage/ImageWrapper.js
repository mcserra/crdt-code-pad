import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import Image from './Image';

class ImageWrapper extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: 'banner',
  };

  render() {
    return (
      <div className='home-page-wrapper banner-wrapper' id='banner'>
        <QueueAnim type='alpha' delay={150}>
          <div className='img-wrapper' key='image'>
            <ScrollParallax location='banner' component={Image} animation={{ playScale: [1, 1.5], y: 80 }} />
          </div>
        </QueueAnim>
      </div>
    );
  }
}

export default ImageWrapper;
