import { NextPage } from 'next';
import { Composite } from 'react-composite';
import RUG, { DragArea, Card } from 'react-upload-gallery'
import axios from 'axios'

function customRequest({ uid, file, send, action, headers, onProgress, onSuccess, onError }) {
    const form = new FormData();

    // send file 
    form.append('image', file)

    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    axios.post(
        action,
        form,
        {
            onUploadProgress: ({ total, loaded }) => {
                onProgress(uid, Math.round(loaded / total * 50));
            },
            onDownloadProgress: ({ total, loaded }) => {
                onProgress(uid, Math.round(50 + loaded / total * 50));
            },
            cancelToken: source.token,
            responseType: 'arraybuffer',
        }
    ).then(({ data: response }) => {
        const url = window.URL || window.webkitURL;
        const blob = new Blob([response], { type: 'image/gif' })
        const objUrl = url.createObjectURL(blob);
        alert("Gamingify success! Click image to share!")
        onSuccess(uid, { source: objUrl });
    })
    .catch(error => {
        onError(uid, {
            action,
            status: error.request,
            response: error.response
        })
    })

    return {
        abort() {
            source.cancel()
        }
    }
}

async function uploadToImgurAndOpen(image) {
    if (!window.confirm('Share on imgur?')) {
        return
    }

    const blob = await fetch(image.source).then(r => r.blob());              
    const form = new FormData();

    // send file
    form.append('image', blob)
    form.append('description', "#げーみんぐhogeじぇねれーた")

    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    axios.post(
        "https://api.imgur.com/3/image",
        form,
        {
            cancelToken: source.token,
            headers: {
                'Authorization': 'Client-ID 4409588f10776f7',
            },
        }
    ).then(({ data: response }) => {
        const win = window.open(response.data.link, '_blank');
        win.focus();
    }).catch(error => {
        alert(error)
    })
}

const IndexPage: NextPage = () => (
    <Composite>
        <h1>げーみんぐ hoge じぇねれーた</h1>
        <RUG
            action="/server/segmentation" // upload route
            customRequest={customRequest}
            onConfirmDelete={(currentImage, images) => {
                return window.confirm('Are you sure you want to delete?')
            }}
            onClick={(image) => uploadToImgurAndOpen(image)}>
        </RUG>
    </Composite>
);

export default IndexPage;
