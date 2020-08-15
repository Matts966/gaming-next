import { NextPage } from 'next';
import { Composite } from 'react-composite';
import RUG from 'react-upload-gallery'

const IndexPage: NextPage = () => (
    <Composite>
        <h1>げーみんぐ hoge じぇねれーた</h1>
        <RUG
            customRequest={({
                uid,
                file,
                data, // blob
                send,
                action,
                headers,
                onProgress,
                onSuccess,
                onError
            }) => {
                const response = { url: 'ec2-54-203-205-102.us-west-2.compute.amazonaws.com:5000' }

                onProgress(uid, response)
                onSuccess(uid, response)
                onError(uid, {
                    action,
                    status,
                    response
                })
            }}
            action="/segmentation" // upload route
            source={response => response.url}
        />
    </Composite>
);

export default IndexPage;
