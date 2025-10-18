export interface ProductIndividual {
    id                :string 
    title              :string
    description       :string
    size              :string
    color             :string
    typeStamping      :string
    quantity          :number
    subCategoryId     :string
    categoryId        :string
    generalProductId  :string
    urlImage          :URLImageElement[]
}

export type URLImageElement = {
    id:        string;
    url:       string;
    productId: string;
}
