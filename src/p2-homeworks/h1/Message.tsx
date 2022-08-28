import React from 'react'
import s from './Message.module.css'

export type MessagesPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message(props: MessagesPropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>

            <div className={s.corner}/>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export function AlternativeMessage(props: MessagesPropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>

            <div className={s.corner}/>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
