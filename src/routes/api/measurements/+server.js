// api/measurements/+server.js
import { PrismaClient } from '@prisma/client';

export async function POST({request}) {
    console.log("___Requests stat")
    const userid = request.user.id;
    console.log(userid);
    const { userName, glucoseLevel } = await request.json();
    console.log(glucoseLevel)
    const prisma = new PrismaClient();
    try {
        const res = await prisma.measurement.create({
            data: {
                userid: userid,
                value: glucoseLevel
            }
        });
        console.log(res);
        return new Response("ok",{status: 201
        });
    } catch (e) {
        console.error(e);
        return {
            status: 500,
            body: 'Error adding measurement'
        };
    }
}

export async function GET({request}){
    const id = request.user.id
    const prisma  = new PrismaClient();
    const measurement = await prisma.measurement.findMany({
        where: {userid:id}
    })

    return new Response(JSON.stringify(measurement), {status:200});
}
