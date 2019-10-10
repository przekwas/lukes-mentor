import { Query } from '../index';

const insert = (userid: number) => Query<{ insertId: number }>('INSERT INTO tokens (userid) VALUE (?)', [[userid]]);
const update = (token: string, unique: string, _expires: Date, id: number) => Query('UPDATE tokens SET token = ?, unique_val = ?, _expires = ? WHERE id = ?', [token, unique, _expires, id]);

export default {
	insert,
	update
};
