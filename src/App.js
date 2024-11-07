import { useState, useEffect } from "react";

import Items from "./component/singelItem";
import Cart from "./component/cart";
import data from './json-file/data.json'
function App() {
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
    function setCartArrayFunc(){
        setCartArray(() =>{
            let array = []
            for(let i = 0;i < howManyFood.length;i++){
                let pushData = data[i]
                pushData = {...pushData,key:i}
                pushData = {...pushData,key:i}
                howManyFood[i] > 0 ? array.push(pushData) : array.splice(i,1)
            }
            return array
        })
    }
    useEffect(() => {
        setCartArrayFunc();
    }, [howManyFood]);
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
    return (
        <>
        <div className=" w-full h-fit grid grid-cols-1  lg:grid-cols-[70%,30%]">
            <div  className=" w-fit m-auto">
                <header>
                    <h1 className=" text-4xl font-bold mb-[30px] ">Desserts</h1>
                </header>
                <main className="grid  items-stretch xl:grid-cols-3 md:grid-cols-2  justify-between desserts-meanu">
                    <Items data={data} func={onClickBtn} foods={howManyFood} />
                </main>
            </div>
            <Cart totalFoods={totalFoods} cartArray={cartArray} howManyFood={howManyFood} addTotalPrice={addTotalPrice} removeBtn={removeBtn}/>
        </div>
        </>
    );
}

export default App;