import { Loading } from "../Global/Loader";
import AddNoteDiv from "./AddNoteDiv";
import { useFetch } from "../Global/useFetch";
import QuickButton from "../Dashboard/QuickButtons";
import useLocalStorage from "use-local-storage";
import SingleNote from "./SingleNote";
import EmptyList from "../Global/EmptyList";

const AllNotes = () => {

    // Get All Note
    const { loading, data, fetchData } = useFetch('note')

    const [column, setcolumn] = useLocalStorage('column' ? false : true);


    const allnotes = data.note?.filter((x) => x.pinned === false).map((item) => {
        const { _id } = item
        return (

            <SingleNote
                column={column}
                item={item}
                key={_id}
            />
        )
    }).reverse();
    const allpinned = data.note?.filter((x) => x.pinned === true).map((item) => {
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
                    <AddNoteDiv column={column} />

                    {!loading && !data.note ?
                        <div className={`mb-4 ${column === true ? 'col-lg-3 col-md-4 col-6' : ' col-md-6 col-12'} `}>
                            <EmptyList
                                icon={'bi-journal'}
                                text={'Note'}
                            />
                        </div>
                        : null
                    }

                    {allpinned}
                    {allnotes}
                </div>
            </section>

        </>
    );
}

export default AllNotes;