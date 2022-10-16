import { Loading } from "../Global/Loader";
import { useFetch } from "../Global/useFetch";
import QuickButton from "../Dashboard/QuickButtons";
import useLocalStorage from "use-local-storage";
import SingleNote from "../Note/SingleNote";
import EmptyList from "../Global/EmptyList";

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
                {!loading && !data?.archive?.length ?
                    <div className="py-5">
                        <EmptyList
                            icon={'bi-archive'}
                            text={`Archived note`}
                        />
                    </div>
                    : null
                }
                <div className="row">
                    {allpinned}
                    {allarchives}
                </div>
            </section>

        </>
    );
}

export default AllArchive;