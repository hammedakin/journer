import React from 'react';
import { toast } from 'react-toastify';


const ShareButton = ({form}) => {

    const {title, content} = form

    const shareData = {
        title: title,
        text: content,
        url: 'https://hammedakin.xyz'
    }

    async function shareFn() {
        try {
            await navigator.share(shareData)
            toast.success('shared successfully')
        } catch (err) {
            toast.success('err')
            console.error();
        }
    }
    // function shareFn(e) {
    //     if (navigator.canShare) {
    //         navigator.canShare(ShareData).then(() => {
    //             toast.success('shared successfully')
    //         }).catch((err) => {
    //             toast.success(err)
    //         }
    //         )
    //     } else {

    //     }

    // }

    return (
        <>
            <i
                className='bi bi-share h5 sec-bold p-2 br-sm me-2 pry-bold-text'
                onClick={e => shareFn(e)}
            />
        </>
    );
}

export default ShareButton;