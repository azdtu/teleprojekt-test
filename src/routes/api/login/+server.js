import { PrismaClient } from '@prisma/client';
import { env } from '$env/dynamic/private';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export async function POST({ request, cookies }) {
    const body = await request.json();
    const { email, pass } = body;
    console.log(body)
    const prisma = new PrismaClient({ log: ['query'] });
    const user = await prisma.user.findFirst({ where: { email: email } });
    console.log(user);
    if (!user) {
        return new Response('Forbudt', { status: 401 });
    }
    const match = bcrypt.compareSync(pass, user.hashPass);
    if (match) {
        const token = jwt.sign({ id: user.id, email: user.email }, env.JWT_SECRET);
        cookies.set('token', token, { httpOnly: true, path: '/' }); // cookies
        return new Response('OK', { status: 200 });
    } else {
        return new Response('Forbudt', { status: 401 });
    }
}
