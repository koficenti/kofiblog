import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { supabase } from '@/db/Client';

export async function GET(req: any, res: any){
    const id = res["params"]["id"]
    const {data: posts} = await supabase.from("post").select(`*`).eq('id', id);
    return NextResponse.json(posts);
}