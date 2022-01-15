import { useEffect, useState } from 'react';

export const useMediaQueryMatcher = (mediaQueries) => {
  const [match, setMatch] = useState(false);

  const handleOrientationChange = (mql) => {
    setMatch(mql.matches);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueries);

    mediaQueryList.addEventListener('change', handleOrientationChange);

    // Run the orientation change handler once
    handleOrientationChange(mediaQueryList);

    return () =>
      mediaQueryList.removeEventListener('change', handleOrientationChange);
  }, []);

  return match;
};
