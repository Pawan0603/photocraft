'use client';
import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { Button } from '@/components/ui/button';

const Page = () => {
    const [image, setImage] = useState("w5ceok3wmwjacsq5ymsp");
    return (
        <main>
            <CldUploadWidget uploadPreset="photoshop"
                onSuccess={(results) => {
                    console.log('Public ID', results.info.public_id);
                    setImage(results.info.public_id);
                }}
            >
                {({ open }) => {
                    return (
                        <Button onClick={() => open()}>
                            Upload an Image
                        </Button>
                    );
                }}
            </CldUploadWidget>

            {image &&
                <CldImage
                    width="500"
                    height="1000"
                    src={image}
                    sizes="100vw"
                    alt="Description of my image"
                    // blur="100"
                    // fillBackground
                    // remove={{
                    //     prompt: 'text',
                    //     removeShadow: true
                    //   }}
                    // enhance
                    // extract="main subject" // crop to main subject & remove background
                    // background="blue"
                    // zoompan="loop"
                    // restore
                    // blurFaces="1000"
                    replace={['cloth', 'hoodie']}
                    // quality={20}
                />
            }
            {image &&
                <CldImage
                    width="500"
                    height="300"
                    src={image}
                    sizes="100vw"
                    alt="Description of my image"

                />
            }
        </main>
    )
}

export default Page