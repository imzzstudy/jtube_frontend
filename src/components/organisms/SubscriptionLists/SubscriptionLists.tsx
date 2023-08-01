import { List, Lists } from "components/molecules/Lists";
import classes from "./SubscriptionLists.module.css";

interface SubscriptionListsProps{
    children?: React.ReactNode
}

const Subscriptions = [
    {
        id:"0",
        name:"침착맨",
        src:"home"
    },
    {
        id:"1",
        name:"NewJeans Official",
        src:"home"
    },
    {
        id:"2",
        name:"T1 Faker",
        src:"home"
    },
    {
        id:"3",
        name:"자취남",
        src:"home"
    },
]

export const SubscriptionLists = ({...props}:SubscriptionListsProps) => {
    return (
        <div className={classes.subscriptions}>
            <p className={classes.title}>구독</p>
            <Lists>
                {
                    Subscriptions.map((el)=>(
                        <List
                            key={el.id}
                            avatar={el.src}
                        >
                            {el.name}
                        </List>
                        )
                    )
                }
            </Lists>
        </div>
    )
}

