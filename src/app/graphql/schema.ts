


export const typeDefs = `#graphql 
    type Prestador {
     id:string,
  name: string;
  matricula?:string;
  phone: string;
  phoneOpc: string;
 
  especialidad:string,
 

  IdPrestador:number,

  }

    type Address {
    Domicilio: ID!
    Localidad: String
   
  }

  type Query {
	prestador(id: ID!):Prestador 
    prestadores: [Prestador]

  }


`;