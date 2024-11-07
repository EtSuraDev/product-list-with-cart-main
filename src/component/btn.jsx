


export default function Btn(props){
    let incrementIcon = (
        <div className="border-[1px] border-[rgb(225,225,205)]  rounded-[50%] flex items-center justify-center w-[18px] h-[18px]  hover:cursor-pointer hover:stroke-[hsl(14,86%,42%)] hover:bg-white " onClick={() =>  props.func(props.index, 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
            </svg>
        </div>
                    )
    let decrementIcon = (
        <div className="border-[1px] border-[rgb(225,225,205)]  rounded-[50%] flex items-center justify-center w-[18px] h-[18px]  hover:cursor-pointer hover:stroke-[hsl(14,86%,42%)] hover:bg-white " onClick={() =>props.func(props.index,-1) }>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" className=" fill-current  ">
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
            </svg>
        </div>
    )
    let button = props.foods > 0 ?
                                <div className=" w-[160px] border-[1px]  flex  justify-between items-center rounded-[23px] px-[18px] py-[8px] space-x-[6px] absolute bg-[hsl(14,86%,42%)] top-[56%] left-[50%] translate-x-[-50%] ">
                                    {decrementIcon}
                                    <p className=" text-white "> {props.foods} </p>
                                    {incrementIcon}
                                </div>
                                :
                                <div className=" w-[160px] border-[1px] border-[rgb(134,133,133)] flex flex-nowrap rounded-[23px] px-[25px] py-[8px] space-x-[6px] absolute bg-white  hover:text-[hsl(14,86%,42%)] hover:border-[hsl(14,86%,42%)] hover:cursor-pointer top-[56%] left-[50%] translate-x-[-50%] "onClick={() => props.func(props.index,0)}>
                                    <img src="./image/icon-add-to-cart.svg  " alt="" />
                                    <p> Add to cart</p>
                                </div>
    return(
        button
    )
}
