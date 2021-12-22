import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from "../content"; 
import Typical from 'react-typical';
import {Link as ScrollLink} from 'react-scroll';
 
export default function Header() {
    return (
        <div className='min-h-screen flex items-center justify-center' style={{background:"#091c29",}}>
            <div className='flex flex-col md:flex-row-reverse items-center justify-between '>
                <div className='w-full md:w-2/5'>
                    <LazyLoadImage src={content.header.img} effect="blur" />
                </div>
                <div className='text-white font-dosis text-center md:text'>
                    <h2 className='text-30xl md:text-5xl font-bold '>
                        {content.header.text[0]}
                        <br/>
                        {content.header.text[1]}
                    </h2>
                    <h1 className='font-bold text-2xl text-gray-500'>
                    {content.header.text[2]}{' '}
                    <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h1>
                    <ScrollLink to="stack" smooth="true">
                    <button className='animate-refloat bg-indigo-500 px-10 py-3 text-xl uppercase my-10 rounded-lg  '>
                        {content.header.btnText}
                    </button>
                    </ScrollLink>
                </div>
            /</div>
        </div>
    );
}
