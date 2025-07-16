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
              src="/static/logo_placeholder3.png"
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
        {/* OLD DIVS */}
        {/* <div className='scroll-content-container'>
          <div className='scroll-content'>
            <div className='scroll-inner'>
              <p>don't worry about your accent</p>
              <p>walk around barefoot</p>
              <p>catch fireflies</p>
              <p>say yes ma'am</p>
              <p>sweat in the summer</p>
              <p>eat crawfish</p>
              <p>listen to rain on the roof</p>
              <p>get muddy</p>
              <p>lay in the creek</p>
              <p>befriend your neighbors</p>
              <p>drink a beer</p>
              <p>write a thank-you letter</p>
              <p>run in your flip-flops</p>
              <p>leave a good tip</p>
              <p>drink the river.</p>
            </div>
            <div className='scroll-inner scroll-inner-delay'>
              <p>don't worry about your accent</p>
              <p>walk around barefoot</p>
              <p>catch fireflies</p>
              <p>say yes ma'am</p>
              <p>sweat in the summer</p>
              <p>eat crawfish</p>
              <p>listen to rain on the roof</p>
              <p>get muddy</p>
              <p>lay in the creek</p>
              <p>befriend your neighbors</p>
              <p>drink a beer</p>
              <p>write a thank-you letter</p>
              <p>run in your flip-flops</p>
              <p>leave a good tip</p>
              <p>drink the river.</p>
            </div>
          </div>
        </div> */}
        
      </div>
  );
}