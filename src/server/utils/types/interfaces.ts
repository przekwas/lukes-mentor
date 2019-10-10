import { Request } from 'express';

export interface IRegisterRequest extends Request {
	body: {
		email: string;
		password: string;
		username: string;
		mentor_key: number;
		hash?: string;
	};
}

export interface IPayload {
    userid: number;
    unique?: string;
    tokenid?: number;
}
