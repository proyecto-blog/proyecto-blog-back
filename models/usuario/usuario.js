
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    correo: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: 'El formato del correo electrónico está malo.',
    },
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: ['USUARIO', 'ADMINISTRADOR'],
  },
  estado: {
    type: String,
    enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
    default: 'PENDIENTE',
  },
});

userSchema.virtual('blogsCreados', {
  ref: 'Blog',
  localField: '_id',
  foreignField: 'usuario',
});

userSchema.virtual('actualizacionesCreadas', {
  ref: 'Actualizaciones',
  localField: '_id',
  foreignField: 'creadoPor',
});


const UserModel = model('User', userSchema);

export { UserModel };