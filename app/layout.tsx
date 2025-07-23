import '../styles/globals.css';
import InitGuest from '../components/middleware/InitGuest';

export const metadata = {
  title: 'Drink The River',
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='debug'>
        <InitGuest />
        {children}
      </body>
    </html>
  );
}