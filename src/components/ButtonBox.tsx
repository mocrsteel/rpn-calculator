export const Button = ({id}: {id: string}) => {
  return (
    <button id={id} className='btn'>{id}</button>
  )
}

export const ButtonRow = ({row}: {row: string[]}) => {
  return (
    <div className='btnRow'>
      {row&&
        row.map(btn => <Button id={btn} />)
      }
    </div>
  )
}

const ButtonBox = ({keys}: {keys: string[][]}) => {
  return(
    <div className='btnBox'>
      {keys&&
        keys.map(row => <ButtonRow row={row} />)
      }
    </div>
  )
}

export default ButtonBox