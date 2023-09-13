import { NftImage, nftCollections } from '../Hooks/useCollection';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import noImage from '../Images/noImage.png';
import Gallery from './Gallery';
import { useState } from 'react';

interface Props {
  imageData: NftImage[];
  nftCollection: nftCollections[];
}

const GalleryAlbum = ({ imageData, nftCollection }: Props) => {
  const [albumSelected, setAlbumSelected] = useState<boolean>(false);
  const [testing, setTesting] = useState<string | null>('');

  const handleClick = (collection: string | null) => {
    setAlbumSelected(!albumSelected);
    setTesting(collection);
  };

  const albumElement = nftCollection.map((data, index) => {
    const imageIncluded = imageData.some(
      (obj) =>
        obj.collection === data.collection &&
        data.image !== undefined &&
        data.image !== 'none'
    );

    return (
      <Card key={data.id}>
        <CardMedia
          className='cursor-pointer'
          onClick={() => handleClick(data.collection)}
          component='img'
          alt={`Album ${index}`}
          height='148'
          image={imageIncluded ? data.image : noImage}
        />
        <CardContent>
          <Typography variant='subtitle1' component='div'>
            {imageIncluded ? data.image : 'No Name'}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <>
      {albumSelected ? (
        <Gallery imageData={imageData} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {albumElement}
        </div>
      )}
    </>
  );
};

export default GalleryAlbum;
