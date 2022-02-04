import Image from 'next/image'
import Eu from '../../../public/pp.jpg'

import styles from './BoxMessage.module.scss'

interface BoxProps{
    img?: string ;
    name: String;
}

export default function index(props: BoxProps) {
    return (
        <div className={styles.contentGeral}>
            <div className={styles.contentImageUser}>
                <Image src={props.img || Eu} width={40} height={40}/>
            </div>
            <div>
                <div>
                    {props.name}
                </div>
            </div>
        </div>
    )
}
