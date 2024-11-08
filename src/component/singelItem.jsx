import Btn from "./btn"

export default function Items(props, {childern}){
    let dataMap = props.data.map((item,index) => {
        return(
            <>
                <div className=" relative mb-[25px] max-w-[280px] mr-[20px] " key={index}>
                    
                    <div className="  mb-[30px]" > 
                        <img src={item.imgInMobile} className="  rounded-[10px] " alt="" />
                        <Btn func={props.func} foods={props.foods[index]}  index={index} />
                    </div>
                    <div className="">
                        <p className=" font-normal text-[rgb(77,77,78)] text-[14px]"> {item.name} </p>
                        <h3 className="  font-bold "> {item.fullName} </h3>
                        <p className=" text-[hsl(14,86%,42%)] font-semibold "> {`$${item.price}`} </p>
                    </div>
                </div>
            </>
        )
    })
    return (
        dataMap
        
    )
}
