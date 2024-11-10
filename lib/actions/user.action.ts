'use server';

import User from '@/lib/models/user.model';
import { connect } from '@/lib/db';

// triggered by clerk when a new user is created
export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    throw error;
  }
}
