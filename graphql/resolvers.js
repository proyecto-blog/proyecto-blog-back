import { resolversUsuario } from '../models/usuario/resolvers.js';
import { resolversBlog } from '../models/blogs/resolvers.js';

export const resolvers = [
  resolversUsuario,
  resolversBlog,
];