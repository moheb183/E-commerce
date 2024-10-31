import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementbyvalue } from "../Store/Slices/counter"


export default function ContactUs() {

    const counter = useSelector((state) => state.counter.counter_value)
    const dispatch = useDispatch()


    return (
        <main className=" container p-5  text-center">

            <p>welcome in contact us page</p>


            <p> {counter}</p>
            <button className=" btn btn-danger" onClick={() => { dispatch(increment()) }}>increment</button>
            <button className=" btn  btn-dark m-2" onClick={() => { dispatch(decrement()) }}>decrement</button>
            <button className=" btn  btn-success" onClick={() => { dispatch(incrementbyvalue(3)) }}>increment by value</button>

        </main>
    )
}