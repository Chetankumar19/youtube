import React from 'react'

const Button = ({name}) => {
    return (
        <div>
            <button className="px-3 py-0.5 m-4 bg-gray-200 rounded  font-semibold shadow cursor-pointer">
                {name}
            </button>
        </div>
    )
}

export default Button;