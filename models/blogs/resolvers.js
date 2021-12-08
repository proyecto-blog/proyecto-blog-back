import { BlogModel } from './blogs';

const resolversBlog = {
  Query: {
    Blogs: async (parent, args, context) => {
      const blogs = await BlogModel.find();
      return blogs;
    },
  },
  Mutation: {
    crearBlog: async (parent, args, context) => {
      const blogCreado = await BlogModel.create({
        titulo: args.titulo,
        fechaCreacion: args.fechaCreacion,
        categoria: args.categoria,
        autor: args.autor,
        textos: args.textos,
      });
      return blogCreado;
    },
    editarBlog: async (parent, args) => {
      const blogEditado = await BlogModel.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        { new: true }
      );
      return blogEditado;
    },
    crearTexto: async (parent, args) => {
      const blogConTexto = await BlogModel.findByIdAndUpdate(
        args.idBlog,
        {
          $addToSet: {
            textos: { ...args.campos },
          },
        },
        { new: true }
      );

      return blogConTexto;
    },
    editarTexto: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $set: {
            [`textos.${args.indexTexto}.descripcion`]: args.campos.descripcion,
            [`textos.${args.indexTexto}.tipo`]: args.campos.tipo,
          },
        },
        { new: true }
      );
      return proyectoEditado;
    },
    eliminarTexto: async (parent, args) => {
      const proyectoTexto = await ProjectModel.findByIdAndUpdate(
        {_id: args.idProyecto},
        {
          $pull: {
            textos: {
              _id: args.idTexto,
            },
          },
        },
        {new: true}
      );
      return proyectoTexto;
    },
  },

};

export { resolversBlog };
