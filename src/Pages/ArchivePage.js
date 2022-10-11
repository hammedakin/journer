import AllArchive from "../Components/Archive/AllArchive";
import Header from "../Components/Dashboard/Header";
import Wrapper from '../Wrapper'


const ArchivePage = () => {
    return (
        <Wrapper pagename={'Archive'}>

            <main>
                {/* <Header /> */}
                <AllArchive />

            </main>
        </Wrapper>
    );
}

export default ArchivePage;