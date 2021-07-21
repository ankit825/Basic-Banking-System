module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define("customer", {
	  id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	  },
	  name: {
		type: Sequelize.STRING,
	  },
	  email: {
		type: Sequelize.STRING,
	  },
	  balance: {
		type: Sequelize.INTEGER,
	  },
	});
  
	return Customer;
  };
  
