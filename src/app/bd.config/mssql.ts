// // lib/mssql.ts
// import sql from 'mssql';

// const config = {
//   user: env('DB_USER'),
//   password: env ('DB_PASSWORD'),
//   server: env('DB_SERVER'),
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//   },
// };

// const poolPromise = new sql.ConnectionPool(config)
//   .connect()
//   .then((pool: any) => {
//     console.log('Connected to MSSQL - ObraSocial');
//     return pool;
//   })
//   .catch((err: any) => console.log('Database Connection Failed! Bad Config: ', err));


// export { poolPromise, sql };