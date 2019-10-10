import { Query } from '../index';

const insert = (email: string, hash: string, username: string, mentor_key: number) => Query<{ insertId: number }>('INSERT INTO users (email, hash, username, mentor_key) VALUE (?)', [[email, hash, username, mentor_key]]);

export default {
	insert
};
