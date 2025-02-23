'use client';
import LoadingRing from '@/components/loader/LoadingRing';
import { Card } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { CirclePlus, FileImage } from 'lucide-react'
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Page() {
    const router = useRouter();
    const { toast } = useToast();
    const [imgData, setImgData] = useState(null);
    const [img, setImg] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = async (TOKEN) => {
        try {
            let res = await axios.post('/api/getImages', { token: TOKEN });
            setImgData(res.data.data);
        } catch (error) {
            toast({
                variant: "destructive",
                description: error.response.data.message,
            })
            if(error.response.data.message === "jwt expired"){
                if (typeof window === 'undefined') return;
                localStorage.removeItem('token');
                router.push('/auth/login');
            }
        }
    }

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let Token = localStorage.getItem('token');
        if (Token) {
            setToken(Token);
            fetchImages(Token)
        } else {
            router.push('/');
        }
    }, []);

    
    const uploadtoDB = async (imageId) => {
        setLoading(true);
        try {
            let data = { imageId: imageId, token };
            let res = await axios.post('/api/upload', data);            
            router.push(`/photoshop/${imageId}`);
        } catch (error) {
            console.log(error);
            
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        if (img === null) return;
        uploadtoDB(img);
    }, [img]);

    return (
        <>
            {loading === true && <LoadingRing />}
            <div className='flex w-full min-h-[calc(100vh-65px)] bg-muted/50 '>
                <div className='flex flex-col w-full max-w-7xl min-h-[100vh] h-fit mx-auto px-6 '>
                    <section className=''>
                        <h1 className='text-2xl font-semibold mb-4 pt-4'>Good to see you again</h1>

                        <CldUploadWidget uploadPreset="photoCraft"
                            onSuccess={(results) => {
                                console.log('Public ID', results.info.public_id);
                                setImg(results.info.public_id);
                            }}
                        >
                            {({ open }) => {
                                return (
                                    <div onClick={() => open()} className='flex justify-between items-center w-full max-w-[480px] p-5 rounded-md text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg hover:cursor-pointer'>
                                        <div>
                                            <p className='text-base font-bold' >Create new file</p>
                                            <p className='text-sm'>Start form scratch</p>
                                        </div>
                                        <div><CirclePlus /></div>
                                    </div>
                                );
                            }}
                        </CldUploadWidget>

                    </section>

                    <div className="bg-white dark:bg-[#18181b] mt-5 mb-4 p-4 rounded-lg shadow-lg w-full min-h-full h-[calc(100%-168px)] flex flex-col ">
                        <h1 className='text-xl font-semibold mb-4 pt-4'>Recent Files</h1>
                        <section>
                            {imgData === null ? <>
                                <p className='font-semibold text-neutral-500 pl-5'>No data</p>
                            </> :
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {imgData.map((img, index) => (
                                        <Card onClick={()=>{
                                            router.push(`/photoshop/${img.public_id}`)
                                        }} key={index} className="p-4 h-48 relative flex items-center justify-center hover:shadow-lg hover:cursor-pointer">
                                            <FileImage className='text-neutral-400 dark:text-neutral-500' size={40} />
                                            <span className='absolute bottom-3 left-4'>
                                                <p className='font-bold'>Untitled Image</p>
                                                <p className="text-muted-foreground text-sm">
                                                    Last edited 03/08/2024
                                                </p>
                                            </span>
                                        </Card>
                                    ))}
                                </div>
                            }

                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page