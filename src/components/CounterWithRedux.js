import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "../redux/features/Counter.feature.js";

let CounterRedux = () => {

    let dispatch = useDispatch();

    let counterState = useSelector((state) => {
        return state["counter"];
    });

    let { count } = counterState;

    let clickIncr = () => {
        dispatch(increment());
    };

    let clickDecr = () => {
        dispatch(decrement());
    };

    let clickIncrBy = () => {
        dispatch(incrementBy(5));
    };

    return (
        <div> <h1>This Button saves the Data in the Store </h1>
            <div container mt-5>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='card border-top-0 dorder-dark'>
                            <div className='card-body'>
                                <h1 className='text-center'>{count}</h1>
                                <button className='btn btn-primary m-1' onClick={clickIncr}>Count + 1</button>
                                <button className='btn btn-secondary m-1' onClick={clickDecr}>Count - 1</button>
                                <button className='btn btn-info' onClick={clickIncrBy}>Increment + 5</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default CounterRedux;