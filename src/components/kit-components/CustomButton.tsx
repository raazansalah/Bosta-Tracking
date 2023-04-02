interface CustomButtonPropsType{
  text:string
}

function CustomButton(props:CustomButtonPropsType) {
  const {text}= props
  return (
    <button className='h-12 w-full  bg-[#E43F21] text-white rounded-2xl flex justify-center items-center'>
        <p >{text}</p>
    </button>
  )
}

export default CustomButton