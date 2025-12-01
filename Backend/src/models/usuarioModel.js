import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Pedido = conn.define(
  "Pedido",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    nomeCliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    valor_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    itens: {
      type: DataTypes.JSON,
      allowNull: false,
    },


    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Em espera", // status inicial
    },

    formaPagamento: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    tempoEstimado: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  },
  {
    tableName: "pedidos",
    timestamps: true,
  }
);

export default Pedido;
