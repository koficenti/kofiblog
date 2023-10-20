import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { supabase } from '@/db/Client';

export async function GET(req: any, res: any){
    const {data: posts} = await supabase.from("post").select(`*`).eq('featured', true);
    return NextResponse.json(posts);
}