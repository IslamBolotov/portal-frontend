import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import './TestingCatalog.css';
const DeleteModal = ({ modalText, deleteFunc, close, deleteModal, item }) => {
    return (
        <Dialog onClose={close} open={deleteModal} className='add-user-modal'>
            <div className='del_modal'>

                <DialogTitle onClose={close} className='header-modal'>
                    Вы действительно хотите удалить?
                    <IconButton aria-label='delete' className='close-modal' onClick={close}>
                        <CloseIcon fontSize='large' />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <div className='del_modal-buttons'>

                        <Button autoFocus color='primary' className='button' onClick={close}>Отменить</Button>
                        <Button
                            autoFocus color='primary'
                            onClick={() => {
                                deleteFunc(item);
                                close()
                            }}
                            className='button del'
                        >
                            Удалить
                        </Button>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    );
};

export default DeleteModal;