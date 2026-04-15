import React from 'react'

const Divider = () => {
    return (
        <div className="p-4">
            <p>Content above the divider.</p>
            {/* Basic horizontal rule with margin and a light gray border color */}
            <hr className="my-8 border-gray-200 dark:border-gray-700" />
        </div>
    )
}

export default Divider
