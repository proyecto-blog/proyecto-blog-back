import mongoose from "mongoose";

const { Schema, model } = mongoose;

const blogSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    required: true,
  },
  categoria: {
    type: String,
    enum: ['FULL-STACK', 'FRONT-END', 'BACK-END', 'METODOLOGÍAS', 'MACHINE-LEARNING', 'OTRO'],
  },
  autor: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UserModel,
  },
  texto: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: ['CORTO', 'LARGO'],
        required: true,
      },
    },
  ],
},
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);




const BlogModel = model('Blog', blogSchema);

export { BlogModel };