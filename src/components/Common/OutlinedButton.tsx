import Button from '@mui/material/Button';


interface IOutlinedButton{
  title: string
}

const OutlinedButton = ({title}:IOutlinedButton) => {
  return (
    <Button 
      className ="text-white font-bold text-xs border-white
       hover:bg-white hover:text-black px-7 py-3 rounded-full "
      variant={'outlined'}
    >
      {title}
    </Button>
  )
}

export default OutlinedButton;