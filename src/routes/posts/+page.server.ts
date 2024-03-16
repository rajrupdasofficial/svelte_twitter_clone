//this file is made to secure route

import { redirect } from '@sveltejs/kit';

export const load = async () => {
	throw redirect(303, '/');
};
