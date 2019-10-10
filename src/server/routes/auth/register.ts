import * as express from 'express';
import db from '../../db';
import { IRegisterRequest } from '../../utils/types/interfaces';
import { hashPassword } from '../../utils/security/passwords';
import { createToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', async (req: IRegisterRequest, res, next) => {
	try {
		const user = { ...req.body };
		user.hash = hashPassword(req.body.password);
		let { insertId: userid } = await db.users.insert(user.email, user.hash, user.username, user.mentor_key);
		let token = await createToken({ userid });
		res.json({
			token,
			userid,
			role: 'guest'
		});
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
