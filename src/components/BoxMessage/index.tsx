import Image from 'next/image'
import Eu from '../../../public/pp.jpg'
import Box from './Box.style'

export default function index() {
    return (
        <Box>
            <div>
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
        </Box>
    )
}