interface IBox{
    title:string |null,
    subTitle:string
}

const Box = ( {title, subTitle} : IBox) => {
  return (
    <div className="flex flex-col p-5 border border-slate-600 text-center">
        <h1 className="text-slate-300 font-bold text-xl "> {title} </h1>
        <p className="text-slate-400 font-semibold text-xs mt-1"> {subTitle} </p>
    </div>
  )
}

export default Box