import { create } from 'zustand'
import { baseService } from '@/Services/base.service'
import { URL_TAGS } from '@/constants/service.constant'
import { Tag } from '@/Models/Tag'
import { DirectionPage } from '@/Models/DirectionPage'
import { Pagination } from '@/Models/Pagination'

interface Props {
    tag: Tag[],
    tags: Tag[],
    loading: boolean
    listByCursor: (cursor:string, limit:number, direction: DirectionPage) => Promise<Pagination<Tag[]>>
    getTagByName: (name:string) => Promise<Tag[]>
    getTagById: (id:string) => Promise<Tag[]>
    createTag: (name: any)=> Promise<Tag>
}

export const useTagStore = create<Props>(
    (set, get) => ({
        tag: [],
        tags: [],
        loading: false,
        listByCursor: (cursor, limit = 5, direction) => {
            return baseService(`${URL_TAGS}GetTagsByCursor?cursor=${cursor}&limit=${limit}&direction=${direction}`)
                .list<Pagination<Tag[]>>()
                .then(pays => {
                    return pays
                })
        },
        getTagByName: async (name: string) => {
            set({loading: true})
            console.log(URL_TAGS)
            return baseService(`${URL_TAGS}getByName/`)
                .getById<Tag[]>(name)
                .then(tag => {
                    set({tag,loading: false})
                    return tag
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        getTagById: async (id: string) => {
            set({loading: true})
            return baseService(`${URL_TAGS}getGPById/`)
                .getById<Tag[]>(id)
                .then(tag => {
                    set({tag,loading: false})
                    return tag
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        },
        createTag : async (name:any) => {
            set({loading: true})
            return baseService(URL_TAGS)
                .create<Tag>(name)
                .then(tag=>{
                    set({loading: false})
                    return tag
                })
                .catch(error=>{
                    set({loading: false})
                    throw error
                })
        }
    })
)