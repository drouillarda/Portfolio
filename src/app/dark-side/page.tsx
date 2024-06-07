import '../../../styles/_global.scss';
import Navbar from '../../../components/ui/Nav/Nav';
import "./darkside.scss";

export default function DarkSide () { 

    return (
        <main className='darkSide'>
            <Navbar />
            <section>
                <h1>Hello World</h1>
            </section>
        </main>
    )
}