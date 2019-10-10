export default {
	mysql: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		databse: process.env.DB_SCHEMA
	},
	auth: {
		secret: process.env.SECRET
	}
};
