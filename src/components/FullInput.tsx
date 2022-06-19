import React, { KeyboardEvent, ChangeEvent, useState } from "react";
import SuperButton from "./SuperButton";
import SuperInputText from "./SuperInputText";

type FullInputPropsType = {
    addGoods: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {

    let [newName, setNewName] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onClickButtonHandler = () => {
        if (newName.trim() !== "") {
            props.addGoods(newName)
            setNewName("")
            // setError('')  
        } else {
            setError("Tltle is required")
        }
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value)
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") { onClickButtonHandler() }
    }

    return (
        <div>
            <SuperInputText
                value={newName}
                type={'text'}
                onChange={onChangeInputHandler}
                onKeyPress={onKeyDown}
            />

            {error && <div className="error-message">{error}</div>}

            <SuperButton onClick={onClickButtonHandler}>+</SuperButton>
        </div>
    )
}
