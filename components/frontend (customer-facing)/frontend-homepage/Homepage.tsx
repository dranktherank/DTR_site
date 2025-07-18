import NavBarWithBackButton from '../template-components/NavBarWithBackButton';
import CUST_ID_P_TAG from '../template-components/CUST_ID_P_TAG';
import ItemShelf from './homepage.subcomponents/itemShelf/ItemShelf';
import ResponsiveImageGallery from './homepage.subcomponents/imageGallery/ResponsiveImageGallery';


export default function HomePage() {
  return (
    <div className='page-layout-container'>
      
      <NavBarWithBackButton />

      {/* <ItemShelf /> */}

      {/* <ImageGalleryContainer /> */}
      <ResponsiveImageGallery />
      

      <div>
        <CUST_ID_P_TAG />
      </div>
    </div>
  );
}