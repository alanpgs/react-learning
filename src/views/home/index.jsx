import Banner from '../home/banner/banner';
import HomeCollections from './collections/collection';

function IndexHome() {
    return (
     <main className='urv_home'>
        <Banner />
        <HomeCollections />
     </main>
    )
}

export default IndexHome;