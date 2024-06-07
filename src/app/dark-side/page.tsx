import '../../../styles/_global.scss';
import Image from 'next/image';
import Navbar from '../../../components/ui/Nav/Nav';
import "./darkside.scss";

export default function DarkSide () { 

    return (
        <main className='darkSide'>
            <Navbar />
            <section className='darkSide__img'>
                <Image 
                src="/Vader.png"
                alt="Vader"
                width={384}
                height={214.5}
                />
                <h1 >Welcome to my Portfolio</h1>
            </section>
        </main>
    )
}