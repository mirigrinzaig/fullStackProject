const useGetFilePath = () =>{

    const getFilePath = (img) =>{
        if(img){
            return "http://localhost:1234/uploads/" + img
        }else{
            return "/logo512.png"
        }
    }

    return {getFilePath}

}
export default useGetFilePath