import { NextPage } from 'next';
import { Composite } from 'react-composite';
import RUG, { DragArea, Card } from 'react-upload-gallery'
import axios from 'axios'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { ResizeUtil } from '../resize_util/resize_util';

async function uploadToImgurAndOpen(image, addToast) {
    if (!window.confirm('Share on imgur?')) {
        return
    }

    const blob = await fetch(image.source).then(r => r.blob());              
    const form = new FormData();

    // send file
    form.append('image', blob)
    form.append('title', "#げーみんぐhogeじぇねれーた")
    form.append('description', "#げーみんぐhogeじぇねれーた")

    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    axios.post(
        "https://api.imgur.com/3/image",
        form,
        {
            cancelToken: source.token,
            headers: {
                'Authorization': 'Client-ID 568bdee252e3d2e',
            },
        }
    ).then(({ data: response }) => {
        addToast(<a href={response.data.link}>Share success! Click here to open!</a>, { appearance: 'success' })
    }).catch(error => {
        addToast(error.message, { appearance: 'error' })
    })
}

function getUploadToImgurAndOpen(image, addToast) {
    return () => {
        uploadToImgurAndOpen(image, addToast)
    }
}

function customRequest(addToast) {
    return ({ uid, file, send, action, headers, onProgress, onSuccess, onError }) => {
        const CancelToken = axios.CancelToken
        const source = CancelToken.source()

        const form = new FormData();

        const resize_util = new ResizeUtil()
        resize_util.compress(file, 500, (file) => {
            // send file 
            form.append('image', file)

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
                addToast(
                    <a onClick={getUploadToImgurAndOpen({ source: objUrl }, addToast)}>
                        Gamingify success! Click image or here to share!
                    </a>, { appearance: 'success' })
                onSuccess(uid, { source: objUrl });
            })
            .catch(error => {
                addToast(error.message, { appearance: 'error' })
                onError(uid, {
                    action,
                    status: error.request,
                    response: error.response
                })
            })
        })

        return {
            abort() {
                source.cancel()
            }
        }
    }
}

const RUGWithToasts = () => {
    const { addToast } = useToasts()
  
    return <RUG
        action="/server/segmentation" // upload route
        customRequest={customRequest(addToast)}
        onConfirmDelete={(currentImage, images) => {
            return window.confirm('Are you sure you want to delete?')
        }}
        onClick={(image) => {
            uploadToImgurAndOpen(image, addToast)
        }}>
    </RUG>
  }

const IndexPage: NextPage = () => (
    <ToastProvider>
        <Composite>
            <h1>げーみんぐ hoge じぇねれーた</h1>
            <RUGWithToasts />
        </Composite>
    </ToastProvider>
);

export default IndexPage;
