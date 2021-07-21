module.exports = (sequelize, Sequelize) => {
  const History = sequelize.define("history", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sender_id: {
      type: Sequelize.INTEGER,
    },
    sender_name: {
      type: Sequelize.STRING,
    },
    receiver_id: {
      type: Sequelize.INTEGER,
    },
    receiver_name: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
    },
  });

  return History;
};
