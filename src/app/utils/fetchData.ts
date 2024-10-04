type Suspender<T> = {
  read: () => T;
};


export const getSuspender = <T>(promise: Promise<T>): Suspender<T> => {
  let status = 'pending';
  let response: T;
  let error: any;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      error = err;
    }
  );

  return {
    read(): T {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw error;
      return response;
    },
  };
};


export function fetchData<T>(url: RequestInfo | URL, options?: RequestInit) {
  // Realiza la petición y devuelve la respuesta JSON.
  const promise = fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as Promise<T>;
  });

  return getSuspender(promise);
}


  
  export default fetchData