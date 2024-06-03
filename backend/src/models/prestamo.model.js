"use strict";
import mongoose from "mongoose";

const prestamoSchema = new mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true // indica que el campo es obligatorio
        },
        implementoId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Implemento'
        },
        instalacionId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Instalacion'
        },
        fechaInicio:{
            type: Date,
            required: true
        },
        fechaFin:{
            type: Date
        },
        estado:{
            type: String,
            enum: ['activo','finalizado'],
            default: 'activo'
        }
    }
)
const Prestamo = mongoose.model("Prestamo",prestamoSchema);
export default Prestamo;