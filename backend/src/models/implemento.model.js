import mongoose from 'mongoose';
const { Schema } = mongoose;

const implementoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  cantidad: { type: Number, required: true, default: 0 },
  estado: {
    type: String,
    enum: ['disponible', 'no disponible'],
    default: 'disponible'
  }
});

const Implemento = mongoose.model('Implemento', implementoSchema);
export default Implemento;
