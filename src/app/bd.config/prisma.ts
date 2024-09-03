// import { PrismaClient } from '@prisma/client';

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   let globalWithPrisma = global as typeof globalThis & {
//     prisma: PrismaClient;
//   };
//   if (!globalWithPrisma.prisma) {
//     globalWithPrisma.prisma = new PrismaClient();
//   }
//   prisma = globalWithPrisma.prisma;
// }

// async function main() {
//   try {
//     await prisma.$connect();
//     console.log("Connected to the database.");

//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     throw error; 
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });



  // async function executePrismaOperation(operation: () => Promise<void>) {
  //   try {
  //     await prisma.$connect();
  //     await operation(); // Ejecuta la operación pasada como argumento
  //   } catch (error) {
  //     console.error("Error during Prisma operation:", error);
  //     throw error; // Propaga el error para que el código llamante lo maneje
  //   } finally {
  //     await prisma.$disconnect();
  //   }
  // }
  
// export default prisma;

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: ["query"],
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;