'use client';
import LoadingRing from '@/components/loader/LoadingRing';
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { CirclePlus, Edit2, EllipsisVertical, FileImage, PenLine, SquarePen, Trash, Trash2 } from 'lucide-react'
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Page() {
    const router = useRouter();
    const { toast } = useToast();
    const [imgData, setImgData] = useState(null);
    const [img, setImg] = useState({
        url: '',
        publicId: ''
    });
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = async (TOKEN) => {
        try {
            let res = await axios.post('/api/getImages', { token: TOKEN });
            // console.log(res.data);
            setImgData(res.data.data);
            if (res.data.data.length === 0) {
                toast({
                    title: "No images found",
                    description: "You can upload a new image",
                })
            }
        } catch (error) {
            toast({
                variant: "destructive",
                description: error.response.data.message,
            })
            if (error.response.data.message === "jwt expired") {
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


    const uploadtoDB = async (imageUrl, imageId) => {
        setLoading(true);
        try {
            let data = { imageUrl: imageUrl, imageId: imageId, token };
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
        uploadtoDB(img.url, img.publicId);
    }, [img]);

    const handleDelete = async (Img_id, public_id) => {
        console.log(Img_id, public_id)
    }

    return (
        <>
            {loading === true && <LoadingRing />}
            <div className='flex w-full min-h-[calc(100vh-65px)] bg-muted/50 '>
                <div className='flex flex-col w-full max-w-7xl min-h-[100vh] h-fit mx-auto px-6 '>
                    <section className=''>
                        <h1 className='text-2xl font-semibold mb-4 pt-4'>Good to see you again</h1>

                        <CldUploadWidget uploadPreset="photoCraft"
                            onSuccess={(results) => {
                                // console.log('Public ID', results.info.public_id);
                                setImg({
                                    url: results.info.secure_url,
                                    publicId: results.info.public_id
                                });
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
                                        <span key={index} className='relative'>
                                            <Card onClick={() => {
                                                router.push(`/photoshop/${img.publicId}`)
                                            }} className="p-4 h-48 relative flex items-center justify-center hover:shadow-lg hover:cursor-pointer">
                                                <CldImage
                                                    width="500"
                                                    height="500"
                                                    src={img.publicId}
                                                    className=' h-auto max-h-full w-auto max-w-full'
                                                    loading="lazy"
                                                    sizes="100vw"
                                                    alt="Description of my image"
                                                />
                                                {/* <FileImage className='text-neutral-400 dark:text-neutral-500' size={40} /> */}
                                                <span className='absolute bottom-3 left-4'>
                                                    <p className='font-bold'>{img.name}</p>
                                                    <p className="text-muted-foreground text-sm">
                                                        createAt: {new Date(img.createdAt).toLocaleDateString("en-US", {
                                                            year: 'numeric',
                                                            month: '2-digit',
                                                            day: '2-digit'
                                                        })}
                                                    </p>
                                                </span>
                                            </Card>
                                            {/* Dorpdown menu for perform actions like edit, rename, delete */}
                                            <span className='absolute top-3 right-4'>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <button className='outline-none'><EllipsisVertical /></button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent className="w-56" align="start">
                                                        <DropdownMenuLabel>{img.name}</DropdownMenuLabel>
                                                        <DropdownMenuItem disabled>
                                                            Edit
                                                            <DropdownMenuShortcut>
                                                                <SquarePen size={16} className='text-muted-foreground' />
                                                            </DropdownMenuShortcut>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem disabled>
                                                            Rename
                                                            <DropdownMenuShortcut>
                                                                <PenLine size={16} className='text-muted-foreground' />
                                                            </DropdownMenuShortcut>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleDelete(img._id, img.publicId)} className="hover:cursor-pointer">
                                                            Delete
                                                            <DropdownMenuShortcut>
                                                                <Trash2 size={16} className='text-red-600 dark:text-red-500' />
                                                            </DropdownMenuShortcut>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </span>
                                        </span>
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