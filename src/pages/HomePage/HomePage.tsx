import React, { useCallback, useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import {useDropzone} from 'react-dropzone';
import { Button, Card, CardContent, Container, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import axios from 'axios';


interface IDropzoneProps {
  files: Array<File>;
  setFiles: (files: File[] | ((prevVar: File[]) => File[])) => void;
}

function getSizeText(size: number) {
  if (size < 1024) {
    return `${size} bytes`;
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  } else {
    return `${(size / 1024 / 1024).toFixed(1)} MB`;
  }
}

function Dropzone({files, setFiles}: IDropzoneProps) {
  
  const onDrop = useCallback(acceptedFiles => {
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
        <List disablePadding>
          {files.map(file => (
            <ListItem key={file.name}>
              <ListItemIcon>
                <FileIcon />
              </ListItemIcon>
              <Typography>{file.name}</Typography>
              <Typography sx={{fontSize: 12, color: 'gray', marginLeft: 1}}>{getSizeText(file.size)}</Typography>
            </ListItem>
          ))}
        </List>
      }
    </div>
  )
}

export function HomePage() {
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
      setGeneratedFile(res.data)
    })
  }

  function download(){
    const pom = document.createElement('a');
    pom.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(generatedFile));
    pom.setAttribute('download','taver.json');
    pom.click()
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedFile);
    setIsCopied(true)
  }

  const handleTooltipClose = () => {
    setIsCopied(false)
  } 

  return (
    <Container className={styles.HomePage}>
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
    </Container>
  );
}