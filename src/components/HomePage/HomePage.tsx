import React, { useCallback, useState } from 'react';
import styles from './HomePage.module.css';
import {useDropzone} from 'react-dropzone';
import { Button, Card, CardContent } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import axios from 'axios';


interface IDropzoneProps {
  files: Array<File>;
  setFiles: (files: File[] | ((prevVar: File[]) => File[])) => void;
}

function Dropzone({files, setFiles}: IDropzoneProps) {
  

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file: File) => {
      if (file.type === 'application/json') {
        setFiles(files => [...files, file]);
      } else {
        alert('Please select a JSON file');
      }
    });
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className={styles.dropzone}>
      <input {...getInputProps()} />
      {
        files.length == 0 ?
        <p>Drag n drop some files here, or click to select files</p> :
        <ul>
          {files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

function HomePage() {
  const [files, setFiles] = useState<Array<File>>([])
  const [generate, setGenerate] = useState<boolean>(false)
  const [generatedFile, setGeneratedFile] = useState<string>("")

  const [isCopied,setIsCopied] = useState<boolean>(false)
  
  function handleBack() {
    setGenerate(false)
    setFiles([])
  }

  function handleGenerate() {
    setGenerate(true)
    axios.get('/mock/test.tavern.yaml').then(res => {
      console.log(res.data)
      setGeneratedFile(res.data)
    })
  }

  function download(){
    const pom = document.createElement('a');
    pom.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(generatedFile));
    pom.setAttribute('download','taver.json');
    pom.click()

    console.log('is Download!')
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedFile);
    setIsCopied(true)
    console.log('is Copied !')
  }

  const handleTooltipClose = () => {
    setIsCopied(false)
  } 



  return (
    <div className={styles.HomePage}>
      {generate ?
        <div>
          <div className={styles.download_zone}>
          <Button 
          variant="contained"
          onClick={()=>{download()}}
          endIcon={<DownloadIcon />}
          >Download</Button>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={isCopied}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="is Copied !  "
              >
                <Button 
                  variant="contained"
                  onClick={()=>{copyToClipboard()}}
                  endIcon={<ContentCopyIcon />}
                  >Copy</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
          </div>

          <Card className={styles.fileCard}>
            <CardContent>
              {generatedFile}
            </CardContent>
          </Card>
          <Button onClick={handleBack}>Back</Button>
        </div>
      :
        <div>
          <Dropzone files={files} setFiles={setFiles} />
          {files.length > 0 && <Button variant='outlined' onClick={handleGenerate}>Generate tavern file</Button>}
        </div>
      }
    </div>
  );
}

export default HomePage;
