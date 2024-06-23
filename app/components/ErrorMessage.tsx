const ErrorMessage = ({msg}: {msg: string}) => {
  return (
    <div className="flex justify-center items-center py-[10em]">
        <p className="font-sec font-bold text-priColor text-[3em] text-center">Error Occured: <br/>
            <span className="text-[#e44848]">{msg}</span>
        </p>
    </div>
  )
}

export default ErrorMessage