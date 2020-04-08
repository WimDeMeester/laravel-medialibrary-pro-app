import * as React from 'react';
import MediaSingleComponent from '@spatie/medialibrary-pro-react-single';

export default function() {
    function afterMediaUpload({ success }: { success: boolean }) {
        if (success) {
            // TODO: form submit
        }
    }

    return (
        <form method="POST">
            <h1 className="h1 mt-16">Single image (avatar, …)</h1>

            <input type="hidden" name="_token" defaultValue={window.csrfToken}></input>

            <p>
                <input type="text" name="name" />
            </p>

            <MediaSingleComponent
                name="media"
                initialValue={window.oldValues.singleMedia}
                tempEndpoint={window.tempEndpoint}
                translations={{
                    hint: { singular: 'Add a file!', plural: 'Add some files!' },
                    replace: 'drag or click to replace',
                }}
                validation={{ accept: ['image/png'], maxSize: 1048576 }}
                initialErrors={window.errors}
                beforeUpload={() => new Promise(resolve => resolve())}
                afterUpload={afterMediaUpload}
            ></MediaSingleComponent>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                Submit
            </button>
        </form>
    );
}