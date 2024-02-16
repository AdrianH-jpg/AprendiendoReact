import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState()
    
    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0]
            console.log(firstWord)

            fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setImageUrl(response._id);
            })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}