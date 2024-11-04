const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    category: {type: String, require: true},
    qty: {type: String, default: 0},
    createdAt: {type: String, require: true},
    images: {type: Array, require: true},
});

const userSchema = new mongoose.Schema({
    nombreCompleto: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    direccion: {type: String, require: true},
    telefono: {type: String, require: true},
    fechaRegistro: {type: String, require: true},
    tipoUsuario: {type: String, require: true},
    metodoPagoPreferido: {type: String, require: true},
});

const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Product, User };
