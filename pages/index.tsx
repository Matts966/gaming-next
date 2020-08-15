import { NextPage } from 'next';
import { Composite } from 'react-composite';
import RUG from 'react-upload-gallery'
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
        console.log(objUrl);
        onSuccess(uid, {source: objUrl});
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

const IndexPage: NextPage = () => (
    <Composite>
        <h1>げーみんぐ hoge じぇねれーた</h1>
        <RUG
            action="/server/segmentation" // upload route
            customRequest={customRequest}
        />
    </Composite>
);

export default IndexPage;
