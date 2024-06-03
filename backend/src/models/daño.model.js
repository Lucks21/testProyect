"use strict";
import mongoose from "mongoose";
const { Schema } = mongoose;

const dañoSchema = new Schema({
  implementoId: {
    type: Schema.Types.ObjectId,
    ref: 'Implemento',
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
    required: true
  },
  responsable: {
    type: Schema.Types.ObjectId,
    ref: 'Alumno',
    required: true
  }
});

const Daño = mongoose.model("Daño", dañoSchema);
export default Daño;
