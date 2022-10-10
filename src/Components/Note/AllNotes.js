import { useState } from "react";
import { Loading } from "../Global/Loader";
import AddNoteDiv from "./AddNoteDiv";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Global/useFetch";
import QuickButton from "../Dashboard/QuickButtons";
import useLocalStorage from "use-local-storage";
import SingleNote from "./SingleNote";

const AllNotes = () => {
    let navigate = useNavigate()

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
    console.log(data);
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
                    {allpinned}
                    {allnotes}
                </div>
            </section>

        </>
    );
}

export default AllNotes;