import { marked } from "marked";
import { useEffect, useState } from "react";

export function useReadMeFileData() {
    const [data,setData]=useState('');
    useEffect(()=>{
        const getData=async()=>{
            const res = await fetch('https://raw.githubusercontent.com/nocobase/nocobase/main/README.md');
            const resdata = await res.text();
            const htmlMarkedown = await marked(resdata);
            setData(htmlMarkedown);
            const preHTML=document.querySelector('#htmlreadmeFile') as HTMLPreElement;
            preHTML.innerHTML=htmlMarkedown;
        }
        getData();
    },[])
    return data;
}