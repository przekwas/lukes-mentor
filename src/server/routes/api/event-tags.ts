import * as express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
	try {
		res.json('Test');
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
    