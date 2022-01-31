import React, { useCallback, useState } from 'react';
import styles from './HomePage.module.css';
import {useDropzone} from 'react-dropzone';
import { Button, Card, CardContent, Container } from '@mui/material';
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

  return (
    <Container className={styles.HomePage}>
      {generate ?
        <div>
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

export default HomePage;
