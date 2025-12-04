const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 10;


async function hashPassword(plainPassword) {
    return bcrypt.hash(plainPassword, SALT_ROUNDS);
}

async function verifyPassword(plainPassword, passwordHash) {
    return bcrypt.compare(plainPassword, passwordHash);
}


function signToken(payload) {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN || "1d";

    if(!secret){
        throw new Error("JWT secret is not in .env");
    }
    return jwt.sign(payload,secret,{expiresIn})

}

function verifyToken(token) {
    const secret = process.env.JWT_SECRET;

    if(!secret) {
        throw new Error("JWT_SECRET is not in .env");
    }

    return jwt.verify(token , secret);
}

module.exports = {
    hashPassword,
    verifyPassword,
    signToken,
    verifyToken
};

