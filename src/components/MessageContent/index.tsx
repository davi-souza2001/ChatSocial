import Chat from './Chat.style'

export default function index() {
    return (
        <Chat>
            <section className="chat-left">
                <p>Teste</p>
            </section>
            <section className="chat-right">
                <p>Teste</p>
            </section>
            <div>
                <input type="text" />
                <input type="submit"/>
            </div>
        </Chat>
    )
}
