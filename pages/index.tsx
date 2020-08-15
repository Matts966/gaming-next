import { NextPage } from 'next';
import { Composite } from 'react-composite';
import RUG from 'react-upload-gallery'

const IndexPage: NextPage = () => (
    <Composite>
        <h1>げーみんぐ hoge じぇねれーた</h1>
        <RUG
            action="/server/segmentation" // upload route
            source={ response => response }
        />
    </Composite>
);

export default IndexPage;
