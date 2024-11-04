const { productService, userService } = require('../services/cartService');

const resolvers = {
    Query: {
        products: () => productService.getAllProducts(),
        users: () => userService.getAllUsers(),
    },
    Mutation: {
        createProduct: (_, { name, description, price, category, qty, createdAt, images }) => {
            return productService.createProduct(name, description, price, category, qty, createdAt, images);
        },
        updateProduct: (_, { _id, price, qty, images }) => {
            return productService.updateProduct(_id, price, qty, images);
        },
        deleteProduct: (_, { _id }) => {
            return productService.deleteProduct(_id);
        },
        createUser: (_, { nombreCompleto, email, password, direccion, telefono, fechaRegistro, tipoUsuario, metodoPagoPreferido }) => {
            return userService.createUser(nombreCompleto, email, password, direccion, telefono, fechaRegistro, tipoUsuario, metodoPagoPreferido);
        },
        updateUser: (_, { _id, nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido }) => {
            return userService.updateUser(_id, nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido);
        },
        deleteUser: (_, { _id }) => {
            return userService.deleteUser(_id);
        }
    }
};

module.exports = resolvers;
