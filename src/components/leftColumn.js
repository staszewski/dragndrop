import React from 'react'

const leftColumn = ({tasks, dragOver, dropItem}) => {
  return (
    <div className="wip"
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => dropItem(e, "wip")}>
      <span className="task-header">TO DO</span>
      {tasks}
    </div>
  )
}

export default leftColumn
