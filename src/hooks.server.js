import jwt from "jsonwebtoken";
import { env } from '$env/dynamic/private';

export async function handle({ event, resolve }) {
    const path = event.url.pathname;
    const cookie = event.cookies.get('token');
    if (['/', '/login', '/api/login'].includes(path)) {
        return await resolve(event);
    } else {
        if (cookie) {
            try {
                const decoded = jwt.verify(cookie, env.JWT_SECRET);
                console.log("User on context")
                console.log(decoded)
                event.request.user = decoded;
                return await resolve(event);
            } catch (e) {
                return new Response('Unauthorized: ' + e, 
{ status: 401 });
            }
        }
    }
    return new Response('Unauthorized', { status: 401 });
}
