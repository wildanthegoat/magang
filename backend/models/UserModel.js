import { Sequelize, UUID } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Users = db.define('users', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len:[3, 50]
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },    
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

}, {
    freezeTableName: true
});

export default Users;