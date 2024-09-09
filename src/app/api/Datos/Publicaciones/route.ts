import prisma from "@/app/bd.config/prisma";
import { NextResponse, NextRequest } from "next/server";
import { Publicacion } from "@/app/interfaces/interfaces"; // Asegúrate de importar el tipo correcto

export async function GET(req: NextRequest) {
  try {
    // Obtiene todas las publicaciones junto con categoría, subcategoría y subsubcategoría usando una consulta SQL
    const publicaciones = await prisma.$queryRaw<Publicacion[]>`
      SELECT p.*, 
             c.nombre AS categoria_nombre, 
             sc.nombre AS subcategoria_nombre, 
             ssc.nombre AS subsubcategoria_nombre
      FROM Publicacion p
      LEFT JOIN Categoria c ON p.publishedId = c.id
      LEFT JOIN SubCategoria sc ON sc.categoriaId = c.id
      LEFT JOIN SubSubCategoria ssc ON ssc.subCategoriaId = sc.id
    `;

    // Verifica si se encontraron publicaciones
    if (publicaciones.length === 0) {
      return NextResponse.json({ status: 400, message: `No se encontraron publicaciones` });
    }

    // Devuelve las publicaciones encontradas
    return NextResponse.json({ status: 200, message: `Estas son las publicaciones:`, publicaciones });
  } catch (error: any) {
    console.error("Error al obtener las publicaciones:", error);
    return NextResponse.json({ status: 500, message: `Error al obtener las publicaciones: ${error.message}` });
  }
}
