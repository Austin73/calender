import React from 'react'
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/material';
import { Button } from '@mui/material';
import { add_event, add_event_date, add_event_detail, add_event_month, add_event_name, add_event_year, change_date } from '../actions';
import { useDispatch } from 'react-redux';
const styles = {
    grid_container: {
        display: 'grid',
        gridTemplateColumns: '120px 120px 120px 120px 120px 120px 120px',
        gridTemplateRows: '80px 80px 80px 80px 80px',
        marginLeft: '190px',
        rowGap: '1px',
        columnGap: '1px'
    },
    eachDay: {
        //   border: '.1px solid black',
        gridColumn: 1 / 5,
        gridRows: 2 / 4,

    },
    selected: {

    },
    currentday: {
        cursor: "pointer",
        width: '15px',
        color: 'blue'
    },
    styleForModel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    event: {
        marginLeft: '-8px',
        fontSize: '12px',
        width: '70%',
        borderRadius: '10px',
        border: '1px solid red',
        backgroundColor: 'lightyellow',
        cursor: 'pointer'
    }
}

let flag = 0;
function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
function firstDayOfMonth(year, month) {
    return new Date(year, month, 1);
}
function DayOfWeek() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const arr = []
    let currentDate = useSelector(state => state.date)
    let newEvent = useSelector(state => state.newevent)
    const allEvent = useSelector(state => state.allevent)
    console.log(allEvent)
    console.log(daysInMonth(currentDate.year, currentDate.month))
    let dayCount = daysInMonth(currentDate.year, currentDate.month)
    console.log(currentDate.date)
    console.log(firstDayOfMonth(currentDate.year, currentDate.month - 1))
    console.log(firstDayOfMonth(currentDate.year, currentDate.month - 1).getDay())
    let firstDay = firstDayOfMonth(currentDate.year, currentDate.month - 1).getDay()
    let i;
    for (i = 0; i < firstDay; i++)
        arr[i] = '';
    for (let j = 1; j <= dayCount; j++) {
        arr[i] = j;
        i++;
    }
    return (
        <div className='grid_container' style={styles.grid_container}>
            {

                arr.map(ele => {
                    return (
                        <div className='eachDay' style={styles.eachDay} >

                            <div className='currentday' style={styles.currentday} onClick={
                                () => {
                                    dispatch(change_date(ele))

                                    handleOpen()

                                }
                            }> {ele} </div>
                            <div>
                                {
                                    allEvent.map(element => {
                                        if (element.event_date === ele && element.event_month === currentDate.month && element.event_year === currentDate.year) {
                                            return (<div className='event' style={styles.event}>{element.event_name}</div>)

                                        }
                                    })
                                }
                            </div>
                        </div>
                    )
                })

            }

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >   
                       
                <Box sx={styles.styleForModel}>
                    <h5>Event</h5>
                    <TextField id="outlined-basic"
                        onChange={(e) => {
                            dispatch(add_event_name(e.target.value))
                        }}
                        value={newEvent.event_name}
                        label="Event Name" variant="outlined" style={{ width: '60%', height: "40px" }} />
                    <br />
                    <br />
                    <br />
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Event Details"
                        style={{ width: '90%', height: "50px" }}
                        onChange={(e) => {
                            dispatch(add_event_detail(e.target.value))
                            dispatch(add_event_date(currentDate.date))
                            dispatch(add_event_month(currentDate.month))
                            dispatch(add_event_year(currentDate.year))
                        }}
                        value={newEvent.event_detail}
                    />
                    <br />
                    <br />
                    <Button variant="contained" onClick={
                        () => {

                            dispatch(add_event(newEvent))
                            handleClose()
                        }
                    }

                    >Save Event</Button>
                </Box>
                   
               


            </Modal>

        </div>
    )
}

export default DayOfWeek
