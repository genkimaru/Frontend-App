interface Article{
    title : string ;
    author : string;
    comment : string;
    likes : string;
} 


type Optional<T , K extends keyof T> =  Omit< T , K > & Partial<Pick<T , K>>;


//创建新的类型。
type CreateArticleOptions = Optional<Article , 'comment' | 'likes' >;


function postMArticle(article : CreateArticleOptions) : void{

}

let article : Omit<Article , 'comment' | 'likes'>  = {
    title : 'aaa' ,
    author : 'kkk',
}

let article2 : Partial<Pick<Article ,  'comment' | 'likes' >> = {
    comment : 'ccc',
    likes : 'ddd'
}

let article3 : Omit<Article , 'comment' | 'likes'> & Partial<Pick<Article ,  'comment' | 'likes' >>
= {
    title : 'aaa' ,
    author : 'kkk',
    comment : 'ccc'
}