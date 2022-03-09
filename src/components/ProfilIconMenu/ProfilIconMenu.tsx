import { Avatar, Button, Popover, Box } from '@mui/material';
import React, { FC } from 'react';
import styles from './ProfilIconMenu.module.css';

interface ProfilIconMenuProps {
  popoverContent: JSX.Element;
}

export const ProfilIconMenu: FC<ProfilIconMenuProps> = ({popoverContent}) => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
        <Avatar />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 2 }}>
          {popoverContent}
        </Box>
      </Popover>
    </div>
  );
}