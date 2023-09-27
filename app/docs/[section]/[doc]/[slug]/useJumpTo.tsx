'use client';

import { useEffect } from 'react';

// Hack to jump to a section of document
export default function useJumpTo(id) {

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'instant'});
    }
  }, [id]);

}
