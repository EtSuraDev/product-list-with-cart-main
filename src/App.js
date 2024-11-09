import { useState, useEffect, useRef, useCallback } from "react";

import Items from "./component/singelItem";
import Cart from "./component/cart";
import data from './json-file/data.json'
function App() {
    let lastItem = useRef()
    let [howManyFood, setHowManyFood] = useState(() =>{
        let array = []
        for(let i = 0; i < data.length ; i++){
            array.push(0)
        }
        return array
    })
    let [cartArray, setCartArray] = useState([])
    function addTotalPrice(){
        let price = 0
        for(let i = 0;i < cartArray.length;i++){
            price += Number(cartArray[i].price) * howManyFood[cartArray[i].key]
        }
        return price
    }
    const setCartArrayFunc = useCallback(() => {
        setCartArray(() => {
            const array = data.reduce((acc, item, index) => {
                if (howManyFood[index] > 0) {
                    acc.push({ ...item, key: index });
                }
                return acc;
            }, []);
            return array;
        });
    }, [howManyFood]);
    useEffect(() => {
        setCartArrayFunc();
    }, [setCartArrayFunc]);

    function onClickBtn(index,num){
        num === 0 ?
            setHowManyFood((prev) => {
                let array = [...prev]
                array.splice(index,1,1)
                return array
            })
        :
        setHowManyFood((prev) => {
            let array = [...prev]
            array.splice(index,1,array[index] + (num))
            return array
        })
        setCartArrayFunc()
    }
    function totalFoods() {
        let num = 0
        for(let i = 0;i < howManyFood.length;i++){
            num += howManyFood[i]
        }
        return num
    }
    function removeBtn(num){
        setHowManyFood(prev => {
            return prev.map((item, index) => index === num ? 0 : item);
        })
    } 
    function setLastItem(){
        lastItem.current.style.display = "block"
    }
    function startNewOrder(){
        lastItem.current.style.display = "none"
        setHowManyFood(prev =>{
        let array = []
        for(let i = 0; i < data.length ; i++){
            array.push(0)
        }
        console.log(lastItem.current.style.display = "none")
        return array
        })
    }
    console.log(1)
    return (
        < >
            <div className=" w-full h-fit grid grid-cols-1  lg:grid-cols-[70%,30%]">
                <div  className=" w-fit m-auto">
                    <header>
                        <h1 className=" text-4xl font-bold mb-[30px] ">Desserts</h1>
                    </header>
                    <main className="grid  items-stretch xl:grid-cols-3 md:grid-cols-2  justify-between desserts-meanu">
                        <Items data={data} func={onClickBtn} foods={howManyFood} />
                    </main>
                </div>
                <Cart totalFoods={totalFoods} cartArray={cartArray} howManyFood={howManyFood} addTotalPrice={addTotalPrice} removeBtn={removeBtn} setLastItem={setLastItem}/>
                <div ref={lastItem} className=" order w-[100%] p-[30px] absolute bg-white left-[50%]  translate-x-[-50%] top-[100px] hidden rounded-[14px]">
                    <img src="./image/icon-order-confirmed.svg" className=" w-[30px] mb-[10px]" alt=""/>
                    <h1 className=" font-bold text-3xl mb-[8px]">Order Confirmed</h1>
                    <p className=" font-light text-sm mb-[22px]">we hope you enjoy your food!</p>
                    <div className="bg-[hsl(20,23%,95%)] p-[26px] rounded-[10px]">
                        {cartArray.map((item, index) => {
                            return(
                                <div className="mb-[16px]">
                                    <div className=" flex  space-x-[20px] mb-[16px] relative">
                                        <div>
                                            <img src={item.thumbnail} className=" w-[50px] rounded-[3px]" alt="" />
                                        </div>
                                        <div>
                                            <p className=" font-semibold"> {item.fullName} </p>
                                            <p className=" inline-block text-[hsl(14,86%,42%)] font-semibold"> {howManyFood[item.key]}x </p>
                                            <p className=" inline-block ml-[15px] text-[#858484]"> @ ${item.price} </p>
                                        </div>
                                        <div className=" absolute right-0 font-bold">
                                            <h3> ${Number(item.price) * howManyFood[item.key]} </h3>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    <div className=" flex justify-between items-center">
                        <p className=" text-[14px]">Order Total</p>
                        <h3 className=" font-bold text-2xl"> ${addTotalPrice()} </h3>
                    </div>
                    </div>
                    <button className=" mt-[30px] font-semibold w-full bg-[hsl(14,86%,42%)] border-none rounded-[22px] text-white py-2" onClick={startNewOrder}>Start New Order</button>
                </div>
                </div>
            
        </>
    );
}
export default App;