
import React from 'react'
import NewChat from './NewChat';

function SideBar() {
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            {/*New chat */}
            <NewChat/>
            <div>
                {/*Model selection */}
            </div>
            <div>
                {/*Map through the Chat rows */}
            </div>
        </div>
    </div>
  )
}

export default SideBar;