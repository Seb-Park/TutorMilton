/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import Modal from "react-modal";
import Datetime from 'react-datetime';

export default function ({isOpen, onClose, onEventAdded}) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [reoccurrence, setReoccurrence] = useState();

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end,
            reoccurrence
        })
        onClose();
    }
    
    return(
        
        <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className="App-bg">
            <form onSubmit={onSubmit}>
                <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

                <div>
                    <label>Start Date</label>
                
                    <Datetime value={start} onChange={date => setStart(date)} />
                </div>
                
                <div>
                    <label>End Date</label>
                
                    <Datetime value={end} onChange={date => setEnd(date)} />
                </div>
                <div>
                    <label>Reoccurrence</label>
                
                    {/* <Datetime value={start} onChange={date => setEnd(date)} /> */}
                </div>

                <button>Add Event</button>
            </form>
            </div>
        </Modal>
    )
}