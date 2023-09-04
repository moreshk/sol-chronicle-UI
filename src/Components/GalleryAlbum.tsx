import { NftImage } from '../Hooks/useCollection';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  imageData: NftImage[];
}

const GalleryAlbum = ({ imageData }: Props) => {
  console.log(imageData);

  const albumElement = imageData.map((collection, index) => (
    <Card key={collection.id} onClick={() => onAlbumClick(album.photos)}>
      <CardMedia
        component='img'
        alt={`Album ${collection.id}`}
        height='140'
        image={
          imageData[0].id === imageData[0].id ? imageData[0].image : 'blank'
        } // Display the first photo as the album cover
      />
      <CardContent>
        <Typography variant='subtitle1' component='div'>
          {collection.id}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {albumElement}
      </div>
    </div>
  );
};

export default GalleryAlbum;
