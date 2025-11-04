import { Checkbox } from "@@/ui/checkbox"
import { useEffect, useState } from "react"
import { useSubCategoryStore } from "@/libs/store/zustand/useSubCategoryStore"
import { useParams } from "react-router-dom"
import { RadioGroupComponent } from "@@/ui/adaptable/RadioGroupComponent/RadioGroupComponent"
import { RadioButtonComponent } from "@@/ui/adaptable/RadioButtonComponent/RadioButtonComponent"
import "./FilterComponent.css"
import { SearchIcon } from "@@/icons/SearchIcon"
import { FormSimple } from "./FormSimple"
import { useTagStore } from "@/libs/store/zustand/useTagStore"
import { LIMIT } from "@/constants/Paginate"
import { Pagination } from "@/Models/Pagination"
import { Tag } from "@/Models/Tag"
import { SideBarToggleComponent } from "@@/ui/adaptable/SideBarToggleComponent/SideBarToggleComponent"
import { FilterIcon } from "@@/icons/FilterIcon"

interface Props {
    getFilters  : (filter:any)=>void
    // isOpenFilter: boolean
    // setIsOpenFilter: Dispatch<SetStateAction<boolean>>
}

export const FilterComponent = ({getFilters}:Props) => {
    const { categoryId } = useParams()

    const [tags, setTags] = useState<Pagination<Tag[]>>()
    const [tagsSelected, setTagsSelected] = useState<string[]>([])
    const [orderBy, setOrderBy] = useState<string>()
    const [subCategoryId, setSubCategoryId] = useState<string>()

    const listByCursor = useTagStore(state => state.listByCursor)

    const getSubByCategoryId = useSubCategoryStore(state=> state.getSubByCategoryId)
    const subByCategoryId = useSubCategoryStore(state=> state.subByCategoryId)

    const handleChange = (key:string ,value:string) =>{
        if(key === "orderBy"){
            setOrderBy(value)
        }
        if(key === "subCategoryId"){
            setSubCategoryId(value)
        }
    }

    const handleTags = (value:string, checked:boolean)=> {
        if(checked){
            setTagsSelected(prev=> [...prev, value])
        }else{
            setTagsSelected(prev=> [...prev.filter((elemento)=> elemento !== value)])
        }
    }

    const validateKeys = () => {
        let query = new Map()
        orderBy && (query.set("orderBy", orderBy))
        subCategoryId && (query.set("subCategoryId", subCategoryId))
        tagsSelected.length && (query.set("tags", tagsSelected))
        return  Object.fromEntries(query);
    }

    useEffect(()=>{
        getFilters(validateKeys())
    },[orderBy, subCategoryId, tagsSelected])

    useEffect(()=>{
        if(categoryId){
            getSubByCategoryId(categoryId)
        }

        listByCursor("", LIMIT, "next")
            .then(tags=>{
                setTags(tags)
            })
    },[])

    return (
        <SideBarToggleComponent
            content={
                <section className="filters">
                    <h3>Filtros</h3>
                    
                    <RadioGroupComponent 
                        onValueChange={(v:string) => handleChange("orderBy", v)}
                    >
                        <div className="filter">
                            <RadioButtonComponent value="desc" id="desc" />
                            <label htmlFor="desc">Lo mas nuevo</label>
                        </div>
                        <div className="filter">
                            <RadioButtonComponent value="asc" id="asc" />
                            <label htmlFor="asc">Lo mas clasico</label>
                        </div>
                    </RadioGroupComponent>
                    
                    <hr />
                    <RadioGroupComponent 
                        onValueChange={(v:string) => handleChange("subCategoryId", v)}
                    >
                        {
                            subByCategoryId.length && 
                                subByCategoryId.map(subCategory=> (
                                    <div key={subCategory.id} className="filter">
                                        <RadioButtonComponent value={subCategory.id} id={subCategory.id} />
                                        <label htmlFor={subCategory.id}>{subCategory.name}</label>
                                    </div>            
                                ))
                        }
                    </RadioGroupComponent>
                    <hr />
                    <div className="tagsQuery">
                        <FormSimple
                            className="query" 
                            icon={<SearchIcon />}
                            getValue={handleTags}
                        />
                    </div>

                 
                    {
                        tags?.content.length && 
                            tags?.content.map(tag=> (
                                <div key={tag.id} className="filter">
                                    <Checkbox onCheckedChange={(v:any)=>handleTags(tag.displayName,v)}/>
                                    <label htmlFor={tag.id}>{tag.name}</label>
                                </div>            
                            ))
                    }

                    
                    {
                        tagsSelected.length && tagsSelected.map((tag, i)=>(
                            <div key={i}>{tag}</div>
                        ))
                    }
                    <hr />

                </section>
            }
            trigger={<FilterIcon />}
            side="left"
        />
    )
}
