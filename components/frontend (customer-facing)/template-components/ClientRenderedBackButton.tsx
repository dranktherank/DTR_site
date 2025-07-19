'use client'

import { usePathname } from 'next/navigation';

export default function ClientRenderedBackButton() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div>
      {!isHomePage && (
        <div className='nav-text-italic'>
            <a href="/">
            <p style={{ fontSize: '20px' }}>Home</p>
            </a>
        </div>
      )}
    </div>
  );
}
