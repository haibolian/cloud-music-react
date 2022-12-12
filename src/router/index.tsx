import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import Layout  from '../layout'
import Rank from '../pages/find-music/rank'
import Recommend from '../pages/find-music/recommend'
import PlayList from '../pages/find-music/playlist'
import Singers from '../pages/find-music/singer'
import PrivateFM from '../pages/private-fm'
import Album from '../pages/my-save/album'
import Video from '../pages/my-save/video'
import Singer from '../pages/my-save/singer'
import CloudDisk from '../pages/my-cloud-disk';
import RecentPlay from '../pages/recent-play';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='find-music' />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'find-music',
        element: <Navigate to='recommend' />,
      },
      {
        path: 'find-music',
        handle: {
          title: '发现音乐'
        },
        children: [
          {
            path: 'recommend',
            element: <Recommend />,
            handle: {
              title: '个性推荐'
            }
          },
          {
            path: 'rank',
            element: <Rank />,
            handle: {
              title: '排行'
            }
          },
          {
            path: 'singer',
            element: <Singers />,
            handle: {
              title: '歌手'
            }
          },
          {
            path: 'playlist',
            element: <PlayList />,
            handle: {
              title: '歌单'
            }
          }
        ]
      },
      {
        path: 'private-fm',
        element: <PrivateFM />,
        handle: {
          title: '私人FM'
        }
      },
      {
        path: 'recent-play',
        element: <RecentPlay></RecentPlay>,
        handle: {
          title: '最近播放'
        }
      },
      {
        path: 'my-cloud-disk',
        element: <CloudDisk></CloudDisk>,
        handle: {
          title: '我的音乐云盘'
        }
      },
      {
        path: 'my-save',
        element: <Navigate to='album' />
      },
      {
        path: 'my-save',
        handle: {
          title: '我的收藏'
        },
        children: [
          {
            path: 'album',
            element: <Album></Album>,
            handle: {
              title: '专辑'
            }
          },
          {
            path: 'video',
            element: <Video></Video>,
            handle: {
              title: '视频'
            }
          },
          {
            path: 'singer',
            element: <Singer></Singer>,
            handle: {
              title: '歌手'
            }
          }
        ]
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router
