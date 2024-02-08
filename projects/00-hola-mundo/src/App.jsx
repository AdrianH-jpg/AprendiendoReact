import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'Adrian_Darioo',
        name: 'Adrian Hahn',
        isFollowing: true
    }
]

export function App () {
    return(
        <section className='App'>
           {
            users.map(user => {
                const { userName, name, isFollowing} = user
                return(
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                    {name}
                    </TwitterFollowCard>
                )
            })
           }
        </section>
    )
}