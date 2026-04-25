'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function LanguageSwitcher() {
  const pathname = usePathname();

  const isEnglish = pathname.startsWith('/en');

  const switchPath = isEnglish
    ? pathname.replace(/^\/en/, '/pl')
    : pathname.replace(/^\/pl/, '/en');

  return (
      <Link
        href={switchPath}
        className="inline-block m-2 px-2 py-1 border rounded"
      >
        {isEnglish ? 'PL' : 'EN'}
      </Link>
  );
}