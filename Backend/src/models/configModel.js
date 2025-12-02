import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Config = conn.define(
  "Config",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nomeFoodTruck: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    horarioInicio: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    horarioFim: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    pagamentos: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: ["Pix", "Crédito", "Débito", "Dinheiro"],
    }
  },
  {
    tableName: "configuracoes",
    timestamps: false,
  }
);

export default Config;
