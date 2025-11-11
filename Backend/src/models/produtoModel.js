import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Produto = conn.define("Produto", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: { msg: "O nome do produto é obrigatório." },
        },
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: { msg: "A categoria é obrigatória." },
        },
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: { msg: "O preço deve ser um número válido." },
            min: { args: [0.01], msg: "O preço deve ser maior que zero." },
        },
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: "O estoque deve ser um número inteiro." },
            min: { args: [0], msg: "O estoque não pode ser negativo." },
        },
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    disponibilidade: {
        type: DataTypes.ENUM("Disponível", "Indisponível"),
        allowNull: false,
        defaultValue: "Disponível",
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "produtos",
    timestamps: true, 
});

export default Produto;
