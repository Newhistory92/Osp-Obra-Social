import { Context } from "@/app/api/datos/graphql";

export const resolvers = {
	Query: {
		//get novel by id
		prestador: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.Prestador.findUnique({
				where: {
					id: args.id,
				},
			});
		},
		// get all novels
		prestadores: async (_parent: any, _args: any, context: Context) => {
			return await context.prisma.Prestador.findMany({
				
			});
		},
	},


};