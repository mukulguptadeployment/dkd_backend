const bcrypt = require('bcrypt');
const { Users } = require('../models'); // Assuming the Users model is defined in the models folder

const saltRounds = 10;

const createUser = async (userData) => {
    try {
        // Hash the password before saving
        userData.password = await bcrypt.hash(userData.password, saltRounds);
        const user = await Users.create(userData);
        return user;
    } catch (error) {
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await Users.findByPk(id);
        return user;
    } catch (error) {
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const users = await Users.findAll();
        return users;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, updatedData) => {
    try {
        if (updatedData.password) {
            // Hash the password if it's being updated
            updatedData.password = await bcrypt.hash(updatedData.password, saltRounds);
        }
        const [updated] = await Users.update(updatedData, {
            where: { id },
        });
        if (updated) {
            const updatedUser = await Users.findByPk(id);
            return updatedUser;
        }
        throw new Error('User not found');
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        const deleted = await Users.destroy({
            where: { id },
        });
        if (deleted) {
            return 'User deleted successfully';
        }
        throw new Error('User not found');
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
};