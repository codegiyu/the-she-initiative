'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

export interface UseInPageNavProps {
  href: string;
}

export const useInPageNav = ({ href }: UseInPageNavProps) => {
  const [elementExists, setElementExists] = useState(false);
  const targetElRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const inHomePage = useMemo(() => pathname === '/', [pathname]);

  useEffect(() => {
    const targetDescriptor = inHomePage && href.startsWith('/#') ? href.slice(2) : '';

    targetElRef.current = document?.getElementById(targetDescriptor);
    setElementExists(!!targetElRef.current);
  }, [href, inHomePage]);

  return { elementExists, targetElRef, inHomePage };
};
