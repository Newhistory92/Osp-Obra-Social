import { useState, useEffect } from 'react';
import { getSuspender } from './fetchData';

export const useFetchData = <T>(url: RequestInfo | URL, options?: RequestInit) => {
  const [resource, setResource] = useState<{ read: () => T } | null>(null);

  useEffect(() => {
    const suspender = getSuspender(fetch(url, options).then((res) => res.json() as Promise<T>));
    setResource(suspender);
  }, [url, options]);

  return resource;
};
