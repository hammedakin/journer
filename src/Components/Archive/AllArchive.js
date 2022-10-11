import { Loading } from "../Global/Loader";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Global/useFetch";
import QuickButton from "../Dashboard/QuickButtons";
import useLocalStorage from "use-local-storage";
import SingleNote from "../Note/SingleNote";
import AddNoteDiv from "../Note/AddNoteDiv";

const AllArchive = () => {

    // Get All Note
    const { loading, data, fetchData } = useFetch('archive')

    const [column, setcolumn] = useLocalStorage('column' ? false : true);


    const allarchives = data.archive?.filter((x) => x.pinned === false).map((item) => {
        const { _id } = item
        return (

            <SingleNote
                column={column}
                item={item}
                key={_id}
            />
        )
    }).reverse();
    const allpinned = data.archive?.filter((x) => x.pinned === true).map((item) => {
        const { _id } = item
        return (
            <SingleNote
                column={column}
                item={item}
                key={_id}
            />
        )
    }).reverse();

    return (
        <>
            {<Loading load={loading} />}

            <section className="allnotes mt-2">

                <QuickButton
                    fetchData={fetchData}
                    loading={loading}
                    column={column}
                    setcolumn={setcolumn}
                    data={data}
                />
                <div className="row">
                    {/* <AddNoteDiv column={column} /> */}
                    {allpinned}
                    {allarchives}
                </div>
            </section>

        </>
    );
}

export default AllArchive;