import { Link } from '../../Link.jsx'

export default function AboutPage () {
    return(
      <>
        <h1>About</h1>
        <div>
        <img width='300px' style={{borderRadius:'300px'}} src='https://avatars.githubusercontent.com/u/74754357?s=400&u=3670145b3138d707e31ac1ad702c935e8673c5b2&v=4'
          alt='Imagen del creador'/>
          <p>Hola! me llamo Adrian y estoy creando un clon React Router desde cero</p>
        </div>
        <Link to='/'>Ir a Home</Link>
      </>
    )
  }