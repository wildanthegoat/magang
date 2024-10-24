import { Where } from "sequelize/lib/utils";
import Users from "../models/UserModel.js";
import argon2, { argon2i } from "argon2";

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            Where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createUser = async(req, res) =>{
    const {name, username, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Passowrd tidak cocok"});
    const hassPassword = await argon2.hash(password);
    try {
        await User.create({
            name: name,
            username: username,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Register Berhasil"});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateUser = (req, res) =>{
    
}

export const deleteUser = (req, res) =>{
    
}