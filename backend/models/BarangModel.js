import { Sequelize, UUID } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";
import { FOREIGNKEYS } from "sequelize/lib/query-types";

const {DataTypes} = Sequelize;

const Users = db.define('barang', {
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
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lokasi: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

}, {
    freezeTableName: true
});

Users.hasMany(Barang);
Barang.belongsTo(Users, {FOREIGNKEYS: 'UserId'})

export default Barang;