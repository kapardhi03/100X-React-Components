import CircularProgress from '@mui/material/CircularProgress';

function LoadingScreen() {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <CircularProgress className='text-twitter-blue' thickness={5}/>
    </div> 
  )
}

export default LoadingScreen