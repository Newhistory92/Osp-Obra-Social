


const getSuspender = (promise: Promise<any>) => {
    let status = "pending";
    let response: any;
  
    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );
  
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
  
    return { read };
  };
  
   function fetchData(url: RequestInfo | URL,  options?: RequestInit) {
    const promise = fetch(url,options)
      .then((response) => response.json())
      .then((json) => json);
  
    return getSuspender(promise);
  }

  
  export default fetchData