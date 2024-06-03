import mongoose from 'mongoose';
const { Schema } = mongoose;

const instalacionSchema = new Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
  capacidad: { type: Number, required: true },
  estado: {
    type: String,
    enum: ['disponible', 'no disponible'],
    default: 'disponible'
  }
});

const Instalacion = mongoose.model('Instalacion', instalacionSchema);
export default Instalacion;
