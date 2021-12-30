import {useState, useEffect} from 'react'


export default function FileSelectedHandler (event)  {
    console.log(event);
    const [selectedFile, setSelectedFile] = useState(null) 
    useEffect (x => {
        console.log(selectedFile)
    }, [selectedFile]);

    function uploadHandler(e) {
        
    }
    return (
        <>        
            <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>
        </>
    ) 
}

  