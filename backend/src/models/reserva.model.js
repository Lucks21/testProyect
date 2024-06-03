"use strict";
import mongoose from "mongoose";
const { Schema } = mongoose;

const reservaSchema = new Schema({
  alumnoId: {
    type: Schema.Types.ObjectId,
    ref: 'Alumno',
    required: true
  },
  implementoId: {
    type: Schema.Types.ObjectId,
    ref: 'Implemento'
  },
  instalacionId: {
    type: Schema.Types.ObjectId,
    ref: 'Instalacion'
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: {
    type: Date
  },
  estado: {
    type: String,
    enum: ['activo', 'cancelado', 'completado'],
    default: 'activo'
  }
});

const Reserva = mongoose.model("Reserva", reservaSchema);
export default Reserva;
