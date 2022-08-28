import React from 'react'
import Message, {AlternativeMessage} from "./Message";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const alternativemessageData = {
    avatar: 'https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg',
    name: 'Anton Sokolov',
    message: 'Hello, how are you?',
    time: '16:25',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={alternativemessageData.avatar}
                name={alternativemessageData.name}
                message={alternativemessageData.message}
                time={alternativemessageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
