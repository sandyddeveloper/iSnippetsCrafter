import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SwiperSelection from "./ui/SwiperSelection";
import { SiJavascript } from 'react-icons/si';
import { atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useEffect, useState } from 'react';

export default function TagArea() {


    return (
        <div className="mt-5">
            <SwiperSelection />
            <AllNotesSection />
        </div>
    )
}

function AllNotesSection() {
    return (
        <div className="mt-5 flex flex-wrap gap-4 dark:bg-gray-800 p-3 transition-colors duration-300">
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
        </div>
    )
}

function SingleNote() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // This effect could be replaced with a more complex logic depending on how you manage theme
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);
    return (
        <div className="max-sm:w-full w-[320px] rounded-md py-4 bg-white shadow-lg dark:bg-black transition-colors duration-300">
            <NoteHeader />
            <NoteDate />
            <NoteTag />
            <NoteDescription />
            <CodeBlock language='javascript' isDarkMode={isDarkMode}/>
            <NoteFooter />
        </div>
    )
}

function NoteHeader() {
    return (
        <div className="flex justify-between mx-4">
            <span className="font-bold text-lg w-[87%] text-gray-800 dark:text-white">
                idhu verum Heading kaga dha
            </span>
            <FavoriteBorderIcon className='text-slate-400 cursor-pointer' />
        </div>
    )
}

function NoteTag() {
    return (
        <div className="text-slate-500 text-[11px] mx-4 flex-wrap flex gap-1 mt-4">
            <span className='bg-purple text-white p-1 rounded-md px-2'>Function</span>
            <span className='bg-purple text-white p-1 rounded-md px-2'>Function</span>
            <span className='bg-purple text-white p-1 rounded-md px-2'>Function</span>
            <span className='bg-purple text-white p-1 rounded-md px-2'>Function</span>
        </div>
    )
}

function NoteDate() {
    return (
        <div className='text-slate-500 text-[11px] flex gap-1 font-light mx-4 mt-1'>
            <span className=''>11th October 2024</span>
            {/* <span>*</span>
            <span>31 min ago</span> */}
        </div>
    )
}

function NoteDescription() {
    return (
        <div className='text-slate-600 text-[13px] mt-4 mx-4 pb-2 dark:text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dignissimos hic consectetur soluta ratione, accusantium ducimus possimus illum eveniet esse eaque et quae, quisquam maxime, temporibus quis ullam. Voluptate, repudiandae?
        </div>
    )
}

interface CodeBlockprops {
    language: string;
    isDarkMode: boolean;
}

const CodeBlock: React.FC<CodeBlockprops> = ({ language,isDarkMode }) => {
    const codeString = `
    import React from 'react';

    function HelloWorld() {
        return <h1>Hello, World!</h1>;
    }
    export default HelloWorld;
    `;

    return (
        <div className="rounded-md overflow-hidden text-sm">
            <SyntaxHighlighter
                language={language}
                style={isDarkMode ? atomOneDark : atomOneLight}
                // style={atomOneDark}
                // showLineNumbers
                wrapLongLines
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

function NoteFooter() {
    return (
        <div className='flex justify-between text-[13px] text-slate-400 mx-4 mt-3'>
            <div className="flex gap-1 items-center">
                <SiJavascript size={15} className='mc-[2px]' />
                JavaScript
            </div>
            <DeleteOutlineIcon sx={{ fontSize: 20 }} className='cursor-pointer' />
        </div>
    )
}
