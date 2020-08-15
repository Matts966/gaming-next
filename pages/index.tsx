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
                onProgress(uid, Math.round(loaded / total * 100));
            },
            cancelToken: source.token
        }
    ).then(({ data: response }) => {
        onSuccess(uid, response);
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
            source={(response) => {
                console.log(response);
                return response.body;
            }}
        />
    </Composite>
);

export default IndexPage;
