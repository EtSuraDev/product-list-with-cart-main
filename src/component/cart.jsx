

export default function Cart(props){
    let cartVar = (
        <div className=" md:w-[400px] w-[350px] max-w-[400px] h-fit p-[34px] bg-white rounded-[10px] lg:w-[100%] m-auto lg:m-0 ">
                <h1 className=" text-3xl font-bold text-[hsl(14,86%,42%)] mb-[40px]">
                    Your Cart ({props.totalFoods()}) 
                </h1>
            {
                props.cartArray.length === 0 ? 
                <>
                    <img src="./image/illustration-empty-cart.svg" alt="" className=" m-auto " />
                    <p className=" ml-[40px]  mt-[20px]">Your added items will appear here</p>
                </>
                :
                <div>
                    { 
                        props.cartArray.map((item, index) => {
                            return (
                                <div>
                                    <p> {item.fullName}</p>
                                    <div className=" flex relative">
                                        <div className=" flex space-x-[16px]">
                                            <p className=" text-[hsl(14,86%,42%)] font-bold "> {props.howManyFood[item.key]}x </p>
                                            <p className=" text-[rgb(115,114,114)] "> @ ${item.price} </p>
                                            <p className=" text-[#242323] "> ${ Number(item.price) *  props.howManyFood[item.key]} </p>
                                        </div>
                                        <div className="w-[18px] h-[18px] border-[1px] border-[#CAAFA7] hover:border-black absolute cursor-pointer rounded-full flex justify-center hover:stroke-black items-center right-2 " onClick={() => props.removeBtn(item.key)}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                                                <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    
                                    <hr className="mb-[15px] mt-[15px]" />
                                </div>
                            )
                        })
                    }
                    <div className=" mt-[30px]">
                        <div className=" flex justify-between items-center">
                            <p className=" ">Order Total</p>
                            <h1 className=" text-[28px]  font-extrabold "> ${props.addTotalPrice()} </h1>
                        </div>
                        <div className=" flex bg-[hsl(20,23%,95%)] px-[10px] py-[16px] rounded-[8px] space-x-[8px] md:px-[40px] mt-[30px] ">
                            <img src="./image/icon-carbon-neutral.svg" alt="" />
                            <p>
                                this is a carbon-neutral delivery
                            </p> 
                        </div>
                        <button className=" mt-[30px] w-[100%] text-white font-semibold h-[50px] rounded-full bg-[hsl(14,86%,42%)] " 
                        onClick={() => props.setLastItem()}>
                            Confirm Order
                        </button>
                    </div>
                </div>
            }
        </div>
    )
    return cartVar
}