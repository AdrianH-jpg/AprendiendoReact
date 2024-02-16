import './App.css'
import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from './hooks/useCatFact.js'


export function App() {

    const {fact,refreshRandomFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})
    

    const handleClick = async () => {
       refreshRandomFact()
    }
    return(
            <main className="main flow">
                <h1 className='main_heading'>App de gatitos</h1>
                <div className='main_cards cards'>
                   <div className='cards_inner'>
                    <section className='cards_card card'>
                        {fact && <p className='card_pa'>{fact.split(' ',5).join(' ')}</p>}
                        {imageUrl && <img className='image_card' src={imageUrl} alt={`Imagen obtenida con la primer palabra del siguiente texto ${fact}`}/>}
                        <button className='card__cta cta' onClick={handleClick}>Get new fact</button>
                    </section>
                   </div>
                </div>
            </main>
    )
}