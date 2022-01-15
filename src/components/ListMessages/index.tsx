import BoxMessage from '../BoxMessage'
import List from './List.style'

export default function index() {
    return (
        <List>
            <div>
                <input type="text" />
            </div>
            <div>
                <BoxMessage />
            </div>
        </List>
    )
}
