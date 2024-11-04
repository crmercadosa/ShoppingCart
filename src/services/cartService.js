const { Product, User } = require('../models/cartModel');

const productService = {
    getAllProducts: async () => await Product.find(),
    createProduct: async (name, description, price, category, qty, createdAt, images) => {
        const product = new Product({ name, description, price, category, qty, createdAt, images });
        return await product.save();
    },
    updateProduct: async (_id, price, qty, images) => {
        return await Product.findByIdAndUpdate(
            _id, 
            { price, qty, images },
            {new: true}
        );
    },
    deleteProduct: async (_id) => await Product.findByIdAndDelete(_id)
};

const userService = {
    getAllUsers: async () => await User.find(),
    createUser: async (nombreCompleto, email, password, direccion, telefono, fechaRegistro, tipoUsuario, metodoPagoPreferido) => {
        const user = new User({ nombreCompleto, email, password, direccion, telefono, fechaRegistro, tipoUsuario, metodoPagoPreferido });
        return await user.save();
    },
    updateUser: async (_id, nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido) => {
        return await User.findByIdAndUpdate(
            _id,
            { nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido },
            { new: true }
        );
    },
    deleteUser: async (_id) => await User.findByIdAndDelete(_id)
};

module.exports = { productService, userService };
