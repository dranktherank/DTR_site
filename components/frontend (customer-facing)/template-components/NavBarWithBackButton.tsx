import ClientRenderedBackButton from "./ClientRenderedBackButton";
import Marquee from "./Marquee";

export default function NavBarWithBackButton() {
  return (
      <div className='nav-and-scroll-container'>
        <div className='nav-container'>
          <div className='nav-logo-and-brandname-container'>
            <a href="/">
            <img
              className='nav-logo'
              src="/logo_webp.webp"
              alt="DTR Logo"
            />
            </a>
          <div className='nav-text-italic'>
            <p>Drink the River</p>
          </div>
          </div>
          <div className='nav-text-italic'>
            <a href="/shop">
            <p>Shop</p>
            </a>
          </div>
          <div className='nav-text-italic'>
            <a href="/info">
            <p>Info</p>
            </a>
          </div>
          <div className='nav-text-italic'>
            <p>FAQ</p>
          </div>
        </div>

        <ClientRenderedBackButton />
        <Marquee/>
    
        
      </div>
  );
}