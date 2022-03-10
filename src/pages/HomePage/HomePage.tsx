import React, { useCallback, useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { useDropzone } from 'react-dropzone';
import { Button, Card, CardContent, Container } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { fileToBase64 } from '../../helper/formValidation';
import Api from '../../helper/api';

interface IDropzoneProps {
  setFiles: (files: File[] | ((prevVar: File[]) => File[])) => void;
}

export function HomePage() {
  const [files, setFiles] = useState<Array<File>>([]);
  const [generatedFile, setGeneratedFile] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function Dropzone({ setFiles }: IDropzoneProps) {
    const onDrop = useCallback((acceptedFiles) => {
      console.log(acceptedFiles);
      if (acceptedFiles.length === 0) {
        alert('No files were uploaded');
      } else if (acceptedFiles.length > 1) {
        alert('Only one file can be uploaded at a time');
      } else if (acceptedFiles[0].name.split('.')[1] !== 'yaml') {
        alert('Only YAML files can be uploaded');
      } else {
        setFiles([acceptedFiles[0]]);

        fileToBase64(acceptedFiles[0]).then(function (r) {
          const api = Api.getInstance();

          api.post('/testing/generate', { file: r }).then((res) => {
            setGeneratedFile(res.data);
          });
        });

        console.log(files);
      }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      multiple: false,
    });

    return (
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        <p>Drag n drop file here, or click to select file</p>
      </div>
    );
  }

  function handleBack() {
    setFiles([]);
  }

  function download() {
    const pom = document.createElement('a');
    pom.setAttribute(
      'href',
      'data:application/json;charset=utf-8,' +
        encodeURIComponent(generatedFile),
    );
    pom.setAttribute('download', 'taver.json');
    pom.click();
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedFile);
    setIsCopied(true);
    console.log('is Copied !');
  };

  const handleTooltipClose = () => {
    setIsCopied(false);
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <Container className={styles.HomePage}>
      {files.length > 0 ? (
        <div>
          <div className={styles.download_zone}>
            <Button
              variant="contained"
              onClick={() => {
                download();
              }}
              endIcon={<DownloadIcon />}
            >
              Download
            </Button>
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
                  title="is Copied !"
                >
                  <Button
                    variant="contained"
                    onClick={() => {
                      copyToClipboard();
                    }}
                    endIcon={<ContentCopyIcon />}
                  >
                    Copy
                  </Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </div>

          <Card className={styles.fileCard}>
            <CardContent>{generatedFile}</CardContent>
          </Card>
          <Button onClick={handleBack}>Back</Button>
        </div>
      ) : (
        <Dropzone setFiles={setFiles} />
      )}
    </Container>
  );
}
