import React from 'react';
import galleryImages from './GalleryImages';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter='1rem'>
        {galleryImages.map((item, index) => (
          <div  key={index} style={{ 'overflow': 'hidden', "borderRadius": "10px" }}>
            <img src={item} alt='' className='masonery__img' style={{ "width": "100%", "display": "block", "borderRadius": "10px" }} />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery;