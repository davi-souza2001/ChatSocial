import Image from 'next/image'
import Eu from '../../../public/pp.jpg'

import styles from './BoxMessage.module.css'

export default function index() {
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentImageUser}>
                <Image src={Eu} width={40} height={40}/>
            </div>
            <div>
                <div>
                    Augusto Silva
                </div>
                <div>
                    Ultima mensagem
                </div>
            </div>
        </div>
    )
}
