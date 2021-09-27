const server = {
    host: "mycycles.in",
    port: "5000",
  };
  
  server.baseURL = `https://${server.host}/`;
  server.graphqlQueryURL = `${server.baseURL}server/graphql?query=`;
  server.tickerPriceURL = `${server.baseURL}flask/`;
  server.restURL = `${server.baseURL}server/api/`;

  
  export default server;
  
  // const server = {
  //   host: "3.94.82.83",
  //   port: "5000",
  // };
  
  // server.baseURL = `http://${server.host}/`;
  // server.graphqlQueryURL = `${server.baseURL}server/graphql?query=`;
  // server.tickerPriceURL = `${server.baseURL}flask/`;
  // server.restURL = `${server.baseURL}server/api/`;
  
  // export default server;
  
  
  
  
  // const server = {
  //   host: "localhost:5000",
  //   port: "5000",
  // };
  
  // server.baseURL = `http://${server.host}/`;
  // server.graphqlQueryURL = `${server.baseURL}graphql?query=`;
  // server.tickerPriceURL = `${server.baseURL}flask/`;
  // server.restURL = `${server.baseURL}api/`;
  
  // export default server;
  