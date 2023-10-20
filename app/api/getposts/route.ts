import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { supabase } from '@/db/Client';

export async function GET(req: NextApiRequest){
    const {data: posts} = await supabase.from("post").select("*");
    return NextResponse.json(posts);
}