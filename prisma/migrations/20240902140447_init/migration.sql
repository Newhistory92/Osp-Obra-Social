BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Afiliado] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] VARCHAR(50) NOT NULL,
    [email] VARCHAR(200) NOT NULL,
    [password] VARCHAR(200) NOT NULL,
    [imageUrl] VARCHAR(800) NOT NULL,
    [dni] VARCHAR(8) NOT NULL,
    [phone] VARCHAR(13) NOT NULL,
    [address] VARCHAR(200),
    [coordinatesLat] INT,
    [coordinatesLon] INT,
    [dependencia] NVARCHAR(1000),
    [role] NVARCHAR(1000) CONSTRAINT [Afiliado_role_df] DEFAULT 'USER',
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Afiliado_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Afiliado_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Afiliado_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Afiliado_id_key] UNIQUE NONCLUSTERED ([id]),
    CONSTRAINT [Afiliado_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [Afiliado_dni_key] UNIQUE NONCLUSTERED ([dni])
);

-- CreateTable
CREATE TABLE [dbo].[Prestador] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] VARCHAR(50) NOT NULL,
    [email] VARCHAR(200) NOT NULL,
    [password] VARCHAR(200) NOT NULL,
    [phone] VARCHAR(13) NOT NULL,
    [checkedPhone] BIT CONSTRAINT [Prestador_checkedPhone_df] DEFAULT 0,
    [phoneOpc] VARCHAR(13),
    [imageUrl] VARCHAR(800) NOT NULL,
    [matricula] VARCHAR(5) NOT NULL,
    [especialidad] VARCHAR(100) NOT NULL,
    [especialidad2] VARCHAR(100),
    [especialidad3] VARCHAR(100),
    [descripcion] VARCHAR(600),
    [role] NVARCHAR(1000) CONSTRAINT [Prestador_role_df] DEFAULT 'PROVIDER',
    [tipo] NVARCHAR(1000),
    [address] VARCHAR(200),
    [coordinatesLat] INT,
    [coordinatesLon] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Prestador_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Prestador_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Prestador_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Prestador_id_key] UNIQUE NONCLUSTERED ([id]),
    CONSTRAINT [Prestador_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [Prestador_matricula_key] UNIQUE NONCLUSTERED ([matricula])
);

-- CreateTable
CREATE TABLE [dbo].[Operador] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] VARCHAR(50) NOT NULL,
    [email] VARCHAR(200) NOT NULL,
    [password] VARCHAR(200) NOT NULL,
    [phone] VARCHAR(13) NOT NULL,
    [imageUrl] VARCHAR(800) NOT NULL,
    [numeroOperador] VARCHAR(5) NOT NULL,
    [role] NVARCHAR(1000) CONSTRAINT [Operador_role_df] DEFAULT 'EMPLOYEE',
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Operador_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Operador_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Operador_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Operador_id_key] UNIQUE NONCLUSTERED ([id]),
    CONSTRAINT [Operador_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [Operador_numeroOperador_key] UNIQUE NONCLUSTERED ([numeroOperador])
);

-- CreateTable
CREATE TABLE [dbo].[Publicacion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [titulo] NVARCHAR(1000) NOT NULL,
    [contenido] TEXT NOT NULL,
    [imagen] TEXT,
    [video] NVARCHAR(1000),
    [autorId] NVARCHAR(1000) NOT NULL,
    [publishedId] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Publicacion_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Publicacion_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Publicacion_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Categoria] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Categoria_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SubCategoria] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [categoriaId] INT,
    CONSTRAINT [SubCategoria_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SubSubCategoria] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [subCategoriaId] INT,
    CONSTRAINT [SubSubCategoria_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Denuncia] (
    [id] INT NOT NULL IDENTITY(1,1),
    [motivo] TEXT NOT NULL,
    [nombrePrestador] VARCHAR(50) NOT NULL,
    [especialidad] VARCHAR(50) NOT NULL,
    [practica] VARCHAR(50) NOT NULL,
    [fechadelsuceso] NVARCHAR(1000) NOT NULL,
    [prestadorId] VARCHAR(5),
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [Denuncia_status_df] DEFAULT 'Nuevo',
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Denuncia_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Denuncia_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Notificacion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [titulo] NVARCHAR(1000) NOT NULL,
    [contenido] TEXT NOT NULL,
    [autorId] NVARCHAR(1000) NOT NULL,
    [receptorId] NVARCHAR(1000) NOT NULL,
    [receptorPrestadorId] NVARCHAR(1000),
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [Notificacion_status_df] DEFAULT 'No_leido',
    [url] TEXT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Notificacion_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Notificacion_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Notificacion_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Carrusel] (
    [id] INT NOT NULL IDENTITY(1,1),
    [tituloprincipal] NVARCHAR(1000) NOT NULL,
    [titulosecundario] NVARCHAR(1000) NOT NULL,
    [contenido] NVARCHAR(1000) NOT NULL,
    [urlImagen] TEXT NOT NULL,
    CONSTRAINT [Carrusel_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Opinion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [contenido] TEXT NOT NULL,
    [autorId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Opinion_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Opinion_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Opinion_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Publicacion] ADD CONSTRAINT [Publicacion_publishedId_fkey] FOREIGN KEY ([publishedId]) REFERENCES [dbo].[Categoria]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Publicacion] ADD CONSTRAINT [Publicacion_autorId_fkey] FOREIGN KEY ([autorId]) REFERENCES [dbo].[Operador]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SubCategoria] ADD CONSTRAINT [SubCategoria_categoriaId_fkey] FOREIGN KEY ([categoriaId]) REFERENCES [dbo].[Categoria]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SubSubCategoria] ADD CONSTRAINT [SubSubCategoria_subCategoriaId_fkey] FOREIGN KEY ([subCategoriaId]) REFERENCES [dbo].[SubCategoria]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Denuncia] ADD CONSTRAINT [Denuncia_prestadorId_fkey] FOREIGN KEY ([prestadorId]) REFERENCES [dbo].[Prestador]([matricula]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Notificacion] ADD CONSTRAINT [Notificacion_autorId_fkey] FOREIGN KEY ([autorId]) REFERENCES [dbo].[Operador]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Notificacion] ADD CONSTRAINT [Notificacion_receptorId_fkey] FOREIGN KEY ([receptorId]) REFERENCES [dbo].[Afiliado]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Notificacion] ADD CONSTRAINT [Notificacion_receptorPrestadorId_fkey] FOREIGN KEY ([receptorPrestadorId]) REFERENCES [dbo].[Prestador]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Opinion] ADD CONSTRAINT [Opinion_autorId_fkey] FOREIGN KEY ([autorId]) REFERENCES [dbo].[Afiliado]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;

-- Levantar el error capturado
DECLARE @ErrorMessage NVARCHAR(4000);
DECLARE @ErrorSeverity INT;
DECLARE @ErrorState INT;

SELECT 
    @ErrorMessage = ERROR_MESSAGE(),
    @ErrorSeverity = ERROR_SEVERITY(),
    @ErrorState = ERROR_STATE();

RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);

END CATCH;