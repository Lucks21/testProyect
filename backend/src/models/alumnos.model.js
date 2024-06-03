"use strict";
import mongoose from "mongoose";
const { Schema } = mongoose;

const alumnoSchema = new Schema({
  rut: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  nombre: { 
    type: String 
  },
  correoElectronico: { 
    type: String 
  },
  prestamosActivos: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Reserva' 
  }],
  historialPrestamos: [{
    type: Schema.Types.ObjectId, 
    ref: 'Reserva' 
  }]
});

const Alumno = mongoose.model("Alumno", alumnoSchema);
export default Alumno;
