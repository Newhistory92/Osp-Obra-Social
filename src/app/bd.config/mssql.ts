
import sql from 'mssql';

const config = {
    user: process.env.DB_USER,          
    password: process.env.DB_PASSWORD, 
    server: process.env.DB_SERVER,  
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool: any) => {
    console.log('Connected to MSSQL - ObraSocial');
    return pool;
  })
  .catch((err: any) => console.log('Database Connection Failed! Bad Config: ', err));


export { poolPromise, sql };