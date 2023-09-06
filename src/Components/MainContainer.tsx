import Gallery from './Gallery';
import { NftImage, nftCollections } from '../Hooks/useCollection';
import GalleryAlbum from './GalleryAlbum';

interface Props {
  imageData: NftImage[];
  nftCollection: nftCollections[];
}

const MainContainer = ({ imageData, nftCollection }: Props) => {
  return (
    <div>
      <div>
        <GalleryAlbum nftCollection={nftCollection} imageData={imageData} />
      </div>
      <div>{/* <Gallery imageData={imageData} /> */}</div>
    </div>
  );
};

export default MainContainer;
