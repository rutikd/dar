import React from 'react'

export const Alert = (props) => {
    const capitel = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
                <strong>{capitel(props.alert.type)}</strong>: {props.alert.msg}
            </div>
    )
}
