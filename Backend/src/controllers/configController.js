import Config from "../models/configModel.js";

// Buscar configurações
export const getConfig = async (req, res) => {
  try {
    const config = await Config.findByPk(1);

    if (!config) {
      return res.json({
        nomeFoodTruck: "",
        horarioInicio: "",
        horarioFim: "",
        pagamentos: [],
      });
    }

    res.json(config);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar configurações" });
  }
};

// Atualizar configurações
export const updateConfig = async (req, res) => {
  try {
    const { nomeFoodTruck, horarioInicio, horarioFim, pagamentos } = req.body;

    let config = await Config.findByPk(1);

    if (!config) {
      config = await Config.create({
        id: 1,
        nomeFoodTruck,
        horarioInicio,
        horarioFim,
        pagamentos,
      });
    } else {
      await config.update({
        nomeFoodTruck,
        horarioInicio,
        horarioFim,
        pagamentos,
      });
    }

    res.json({ message: "Configurações atualizadas com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar configurações" });
  }
};
