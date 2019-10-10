export interface IUsersTable {
	id: number;
	email: string;
	hash: string;
	username: string;
	role: string;
	mentor_key: number;
	_created: Date;
}

export interface ITokensTable {
	id: number;
	userid: number;
	unique_val: string;
	token: string;
	_expires: Date;
	_created: Date;
}
