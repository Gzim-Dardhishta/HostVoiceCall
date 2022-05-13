import React, { lazy, Suspense } from 'react'
import Loading from '../Components/shared/Loading/Loading'
const LazyLoaded = lazy(() => import('./Home'))

const Home = () => {
    return (
        <Suspense fallback={<Loading />}>
            <LazyLoaded />
        </Suspense>
    )
}

export default Home