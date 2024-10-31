import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementbyvalue } from "../Store/Slices/counter"


export default function ContactUs() {

    const counter = useSelector((state) => state.counter.counter_value)
    const dispatch = useDispatch()


    return (
        <main className=" container p-5 text-center">

            <div className=" text-center p-3 mt-3 ">
                <p className=" text-dark">welcome in contact us page</p>
            </div>

        </main>
    )
}