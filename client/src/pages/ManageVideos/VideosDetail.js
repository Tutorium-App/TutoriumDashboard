import React from 'react'
import { ManageVideosTemplateDetail } from '../../components'
import VideosDB from './VideosDB'

const VideosDetail = () => {
    return (
        <>
            <ManageVideosTemplateDetail Data={VideosDB} />
        </>
      )
}

export default VideosDetail