import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ModalGenre = (props) => {
    const { title, open, children } = props;
  
    return (
      <div>
        <Dialog open={open}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            {children}
          </DialogContent>
        </Dialog>
      </div>
    );
};

export default ModalGenre;