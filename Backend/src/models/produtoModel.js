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
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
