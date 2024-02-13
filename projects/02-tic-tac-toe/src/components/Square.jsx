

export const Square = ({children, isSelected, updateBoard, index, board}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () =>{
      updateBoard(index, board)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }