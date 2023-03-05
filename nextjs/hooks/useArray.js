import { useState } from "react"; 

export default function useArray(defaulfValue) {
    const [array, setArray] = useState(defaulfValue)

    function push(element) {
        setArray(a => [...a, element])
    }

    function filter(callback) {
        setArray(a => a.filter(callback))
    }

    function update(index, newElement) {
        setArray(a => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length)
        ])
    }

    function remove(index) {
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
    }

    function clear() {
        setArray([])
    }

    function swapOrder(indexA, indexB) {
        let newArray = array
        var tmp = newArray[indexA];
        newArray[indexA] = newArray[indexB];
        newArray[indexB] = tmp;
        setArray(newArray)
    }

    return { array, set: setArray, push, filter, update, remove, clear, swapOrder }
}