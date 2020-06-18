import React from 'react'
import Skeleton from 'react-loading-skeleton';
export default function Loading() {

    return (
        <div className="col-md-3 col-sm-4">
            <div className="card mb-4">
                <div className="card-body">
                    <Skeleton count={1} height={125} width={125} circle={true} />
                    <Skeleton count={1} height={25} className="mt-3" />
                    <Skeleton count={1} height={150} className="mt-3" />
                </div>
            </div>
        </div>

    )
}
