import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts.js"

export function useCatFact () {
    const [fact, setFact] = useState()

    const refreshRandomFact = () => {
        getRandomFact().then(setFact)
    }
    useEffect(refreshRandomFact, [])

    return {fact, refreshRandomFact}
}