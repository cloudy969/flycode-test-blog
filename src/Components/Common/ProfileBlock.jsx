import React from 'react'
import { Button } from 'react-bootstrap'
import AddNewPost from './AddNewPost'
import style from './ProfileBlock.module.css'


export default function ProfileBlock(props) {
    return (
        <div className={style.wrapper}>
            <AddNewPost {...props} />
            {props.userName}
            <Button onClick={props.logout} variant="outline-danger">Выход</Button>
        </div>

    )
}
