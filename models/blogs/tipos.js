import { gql } from 'apollo-server-express';

const tiposBlog = gql`
  type Texto {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoTexto!
  }
  input crearTexto {
    descripcion: String!
    tipo: Enum_TipoTexto!
  }
  input camposTexto{
    descripcion: String!
    tipo: Enum_TipoTexto!
  }
  input camposBlog{
    titulo: String
    fechaCreacion: Date
    categoria: Enum_TipoCategoria
    autor: String
  }
  type Blog {
    _id: ID!
    titulo: String!
    fechaCreacion: Date!
    categoria: Enum_TipoCategoria!
    autor: Usuario!
  }
  type Query {
    Blogs: [Blog]
  }
  type Mutation {
    crearBlog(
      _id: ID!
      titulo: String!
      fechaCreacion: Date!
      categoria: Enum_TipoCategoria!
      autor: Usuario!      
      textos: [crearTexto]
    ): Blog

    editarBlog(_id: String!, campos: camposBlog!): Blog

    crearTexto(idBlog: String!, campos: camposTexto!): Blog 

    editarTexto(idBlog: String!, indexTexto: Int!, campos: camposTexto!): Blog

    eliminarTexto(idBlog: String!, idTexto: String!): Blog
  }

  `;

export { tiposBlog };